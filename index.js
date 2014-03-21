var fs = require('fs');
var spawn = require('child_process').spawn;
var async = require('async');
var removeSync = require('remove').removeSync;

var content = fs.readFileSync('./LanguageFeatures.md');

var parts = content.toString().split('\n```');

var examples = [];
parts.forEach(function(part) {
    if (part.indexOf('js') === 0) {
        examples.push(part.substring(3));
    }
});

if (fs.existsSync('test')) removeSync('test');
if (fs.existsSync('tmp')) removeSync('tmp');

fs.mkdirSync('test');
fs.mkdirSync('tmp');

var i = 0;


var prefix = function (name) {
    return [
        'var expect = require("chai").expect;',
        'describe("' + name + '", function(){',
        '  it("works", function() {'
    ].join('\n');
}
var suffix = [
    '  });',
    '});'
].join('\n');

async.each(examples, function (example, cb) {
    var filename = 'tmp/example' + i + '.js';
    i++;
    console.log('writing %s', filename);
    fs.writeFile(filename, example, cb);
}, function (err) {
    if (err) return console.error(err);
    compile(function (err) {
        if (err) return console.error(err);
        addTestCode(function (err) {
            if (err) return console.error(err);
            runTests();
        });
    });
});

function compile(done) {
    async.each(fs.readdirSync('tmp'), function (file, cb) {
        var filename = 'tmp/' + file;
        fs.readFile(filename, function (err, content) {
            if (err) cb(err);
            content = content.toString();
            var args = [
                '--script', filename,
                '--out', 'test/' + file
            ];
            if (content.indexOf('// --') === 0) {
                args.push(content.split('\n')[0].replace('// ', '').trim());
            }
            var child = spawn('./node_modules/.bin/traceur', args, {
                cwd: __dirname
            });
            child.stderr.pipe(process.stderr);
            child.on('close', function (code) {
                cb(code === 0 ? undefined : code);
            });
        });
    }, done);
}

function addTestCode(done) {
    async.each(fs.readdirSync('test'), function (file, cb) {
        var filename = 'test/' + file;
        fs.readFile(filename, function (err, content) {
            if (err) return cb(err);
            fs.writeFile(filename, [prefix(file), content.toString(), suffix].join('\n'), cb);
        });
    }, done);
}
function runTests() {
    spawn('./node_modules/.bin/mocha', [
        '--require', 'test-utils.js'
    ], {cwd: __dirname, stdio: 'inherit'});
}
