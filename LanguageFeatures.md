# Language Features

This is the list of features that are turned on by default.

* [Array Comprehension](LanguageFeatures#array-comprehension)
* [Arrow Functions](LanguageFeatures#arrow-functions)
* [Classes](LanguageFeatures#classes)
* [Computed Property Names](LanguageFeatures#computed-property-names)
* [Default Parameters](LanguageFeatures#default-parameters)
* [Destructuring Assignment](LanguageFeatures#destructuring-assignment)
* [Iterators and For Of](LanguageFeatures#iterators-and-for-of)
* [Generator Comprehension](LanguageFeatures#generator-comprehension)
* [Generators](LanguageFeatures#generators)
* [Modules](LanguageFeatures#modules)
* [Numeric Literals](LanguageFeatures#numeric-literals)
* [Property Method Assignment](LanguageFeatures#property-method-assignment)
* [Object Initializer Shorthand](LanguageFeatures#object-initialiser-shorthand)
* [Rest Parameters](LanguageFeatures#rest-parameters)
* [Spread](LanguageFeatures#spread)
* [Template Literals](LanguageFeatures#template-literals)
* [Promises](LanguageFeatures#promises)

And these are only experimental and need to be turned on manually:

* [Block Scoped Binding](LanguageFeatures#block-scoped-binding)
* [Symbols](LanguageFeatures#symbols)
* [Deferred Functions](LanguageFeatures#deferred-functions)
* [Types](LanguageFeatures#types)
* [Annotations](LanguageFeatures#annotations)

All these features are either part of the official ECMAScript Harmony [draft](http://people.mozilla.org/~jorendorff/es6-draft.html) or [proposals](http://wiki.ecmascript.org/doku.php?id=harmony:proposals) unless otherwise noted.

## Array Comprehension

### Examples

```js
var array = [for (x of [0, 1, 2]) for (y of [0, 1, 2]) x + '' + y];
expect(array).to.be.eql([
  '00', '01', '02', '10', '11', '12', '20', '21', '22'
]);
````

**Offical Draft:** [Array Comprehension](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array-comprehension)

## Arrow Functions

### Examples
```js
var square = (x) => {
  return x * x;
}
var square2 = x => x * x;
````

**Offical Draft:** [Arrow Functions](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-arrow-function-definitions)

## Classes

This implements class syntax and semantics as described in the ES6 draft spec. In earlier
versions of Traceur we had more feature rich classes but in the spirit of Harmony we have
scaled back and are now only supporting the minimal class proposal.

[Classes](http://en.wikipedia.org/wiki/Class_(computer_programming)) are a great way to
reuse code. Several JS libraries provide classes and inheritance, but they aren't
mutually compatible.

### Examples

```s
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
    this.health_ = 100;
  }

  attack(character) {
    super.attack(character);
  }

  get isAlive() { return this.health_ > 0; }
  get health() { return this.health_; }
  set health(value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}
```

Here's an example of subclassing an HTML button:

```js
class CustomButton extends HTMLButtonElement {
  constructor() {
    this.value = 'Custom Button';
  }
  // ... other methods ...
}
var button = new CustomButton();
document.body.appendChild(button);
```

*Warning* This is currently not supported.

**Offical Draft:** [Classes](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-class-definitions)

## Computed Property Names

### Examples

```js
var x = 0;
var obj = {
  [x]: 'hello'
};
// obj[0] === 'hello'
```

## Default Parameters
Default parameters allow your functions to have optional arguments without needing to check `arguments.length`
or check for `undefined`.

### Examples

```js
function f(list, indexA = 0, indexB = list.length) {
  return [list, indexA, indexB];
}
// f([1,2,3]) === [[1,2,3], 0, 3]
// f([1,2,3], 1) === [[1,2,3], 1, 3]
// f([1,2,3], 1, 2) === [[1,2,3], 1, 2]
```
**Offical Draft:** [Default Parameters](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-function-definitions)

## Destructuring Assignment
Destructuring assignment is a nice way to assign or initialize several variables at once.

### Examples

```js
var [a, [b], c, d] = ['hello', [', ', 'junk'], ['world']];
alert(a + b + c); // hello, world
```

It can also destructure objects:

```js
var pt = {x: 123, y: 444};
var rect = {topLeft: {x: 1, y: 2}, bottomRight: {x: 3, y: 4}};
// ... other code ...
var {x, y} = pt; // unpack the point
var {topLeft: {x: x1, y: y1}, bottomRight: {x: x2, y: y2}} = rect;

alert(x + y); // 567
alert([x1, y1, x2, y2].join(',')) // 1,2,3,4
```
**Offical Draft:** [Destructuring Assignment](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-destructuring-assignment)

## Iterators and For Of

[Iterators](http://en.wikipedia.org/wiki/Iterator) are objects that can traverse a container.
It's a useful way to make a class work inside a for of loop. The interface is similar
to the [iterators-interface](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-iterator-interface).
Iterating with a for of loop looks like:

### Examples

```javascript
for (let element of [1, 2, 3]) {
  console.log(element);
}
```

You can also create your own iterable objects. Normally this is done via the `yield`
keyword (discussed below in [Generators](#Generators) but it could be done explicitly by
returning an object that has `'@@iterator'`:

```js
function iterateElements(array) {
  return {
    [Symbol.iterator]: function() {
      var index = 0;
      var current;
      return {
        next: function() {
          if (index < array.length) {
            current = array[index++];
            return {
              value: current,
              done: false
            };
          }
          return {
            value: undefined,
            done: true
          }
        }
      };
    }
  };
}
// Usage:
var g = iterateElements([1,2,3]);

for (var a of g) {
  console.log(a);
}
```

## Generator Comprehension
Lazy computed comprehensions.

### Examples

```javascript
function* range() {
  for (var i = 0; i < 5; i++) {
    yield i;
  }
}

var iter = (for (x of [0, 1, 2, 3, 4]) x);
```

**Offical Draft:** [Generator Comprehension](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-generator-comprehensions)

## Generators
Generators make it easy to create iterators. Instead of tracking state yourself
and implementing `'@@iterator'`, you just use `yield` (or `yield*` to yield each element
in an iterator).

### Examples

```javascript
// --deferred-functions
// A binary tree class.
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}
// A recursive generator that iterates the Tree labels in-order.
function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

// Make a tree
function make(array) {
  // Leaf node:
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// Iterate over it
var result = [];
for (let node of inorder(tree)) {
  result.push(node); // a, b, c, d, ...
}
expect(result).to.be.eql(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
```

A generator function needs to be annotated as `function*` instead of just `function`.

**Offical Draft:** [Generators](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-generator-function-definitions)

## Modules
[Modules](https://github.com/jorendorff/js-loaders/tree/master/specs) are mostly implemented,
with some parts of the Loader API still to be corrected.  Modules try to solve many issues
in dependencies and deployment, allowing users to create modules with explicit exports, import
specific exported names from those modules, and keep these names separate.

### Examples

```javascript
// Profile.js
export var firstName = 'David';
export var lastName = 'Belle';
export var year = 1973;
```

```javascript
// ProfileView.js
import {firstName, lastName, year} from './Profile';

function setHeader(element) {
  element.textContent = firstName + ' ' + lastName;
}
// rest of module
```
These modules can be loaded in several ways. We'll just show a couple of ways to get you started.

In a Web page you can use `script` tags with `type="module"`:
```html
<script type="module" src="ProfileView.js"></script>
```
and the `WebPageTranscoder`:
```javascript
 new traceur.WebPageTranscoder(document.location.href).run(function() {
    // things you want to do with the modules.
  });
```
See for example, [runner.html](https://github.com/google/traceur-compiler/blob/master/test/runner.html#L50).

On the traceur command line you can load them with `Loader.import`:
```js
    function getLoader() {
      var LoaderHooks = traceur.modules.LoaderHooks;
      var loaderHooks = new LoaderHooks(new traceur.util.ErrorReporter(), url);
      return new traceur.modules.CodeLoader(loaderHooks);
    }
    getLoader().import('../src/traceur.js',
        function(mod) {
          console.log('DONE');
        },
        function(error) {
          console.error(error);
        }
    );
```
See for example, [repl.html](https://github.com/google/traceur-compiler/blob/master/demo/repl.html#L162).

## Numeric Literals

### Examples

```js
var binary = [
  0b0,
  0b1,
  0b11
];
// binary === [0, 1, 3]

var octal = [
  0o0,
  0o1,
  0o10,
  0o77
];
// octal === [0, 1, 8, 63]
```

**Offical Draft:** [Numeric Literals](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-additional-syntax-numeric-literals)

## Property Method Assignment
Did you ever end up staring at code looking like this wondering where the syntax error was?

```js
var object = {
  value: 42,
  toString() {
    return this.value;
  }
};
```

**Offical Draft:** [Object Initializer Shorthand](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser)

## Object Initializer Shorthand
This allows you to skip repeating yourself when the property name and property value are the same in
an object literal.

### Examples

```js
function getPoint() {
  var x = 1;
  var y = 10;

  return {x, y};
}
expect(getPoint()).to.be.eql({
  x: 1,
  y: 10
});
```

**Offical Draft:** [Object Initializer Shorthand](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-initialiser)

## Rest Parameters
Rest parameters allows your functions to have variable number of arguments without using the `arguments` object.
The rest parameter is an instance of `Array` so all the array methods just works.

### Examples

```js
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
  });
}
```

**Offical Draft:** [Rest Parameters](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-function-definitions)

## Spread
The spread operator is like the reverse of [rest parameters](#Rest_Parameters). It allows you to
expand an array into multiple formal parameters.

### Examples

```js
function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

var numbers = [4, 38];
add(...numbers);  // 42
```

The spread operator also works in array literals which allows you to combine multiple arrays more easily.

```js
var a = [1];
var b = [2, 3, 4];
var c = [6, 7];
var d = [0, ...a, ...b, 5, ...c];
```

**Offical Draft:** [Spread Operator](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array-literal)

## Template Literals

### Examples

```js
var name = 'world';
var greeting = `hello ${name}`;
// greeting === 'hello world'
```

**Offical Draft:** [Template Literals](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-template-literals)

## Promises

Currently we have a version of Promises which needs to be documented better here.

```javascript
function awaitTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function awaitOutput() {
  console.log( "Ready to await." );
  await awaitTimeout(1000);
  console.log( "Await finished." );
}

awaitOutput();
```

Deferred functions allow you to write asynchronous non-blocking code without writing
callback functions, which don't compose well. With deferred functions, you can use
JavaScript control flow constructs that you're used to, inline with the rest of your code.

```javascript
function deferredAnimate(element) {
    for (var i = 0; i < 100; ++i) {
        element.style.left = i;
        await deferredTimeout(20);
    }
};

deferredAnimate(document.getElementById('box'));
```

Deferred functions use await expressions to suspend execution and return an object that
represents the continuation of the function.

**Offical Draft:** [Promises](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects)

## Block Scoped Binding
Block scoped bindings provide scopes other than the function and top level scope. This
ensures your variables don't leak out of the scope they're defined:

### Examples

```javascript
// --block-binding
{
  const tmp = a;
  a = b;
  b = tmp;
}
alert(tmp); // error: 'tmp' is not defined.
```

It's also useful for capturing variables in a loop:

```javascript
// --block-binding
let funcs = [];
for (let i of [4,5,6]) {
  funcs.push(function() { return i; });
}
for (var func of funcs) {
  console.log(func()); // 4, 5, 6
}
```

## Symbols
### Examples

```js
// --symbols
var s = Symbol();
var object = {};
object[s] = 42;
assert.equal(42, object[s]);
```

## Deferred Functions
### Examples

```javascript
function asyncValue(value) {
  if (true)
    return value;
  await asyncYield();
}

function asyncYield() {
  return asyncTimeout(0);
}

function asyncTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(function() {
  var value;
  await value = asyncValue(42);
  assert.equal(42, value);
  done();
})();
```

**Offical Strawman:** [Deferred Functions](http://wiki.ecmascript.org/doku.php?id=strawman:deferred_functions)

## Types
### Examples

**Offical Strawman:** [Types](http://wiki.ecmascript.org/doku.php?id=strawman:types&s=types)

## Annotations
### Examples

```javascript
// --annotations
import {Anno} from './resources/setup';

@Anno
function Simple() {}

assertArrayEquals([new Anno], Simple.annotations);
```
