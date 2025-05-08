### What are the possible ways to create objects in JavaScript

1. Object literals:
```javascript
const obj = {
  name: 'John',
  age: 30,
  greet() {
    console.log('Hello, world!');
  }
};
```

2. Constructor functions:
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

3. Object.create():
```javascript
const obj = Object.create(null);
```

4. Class declarations:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
} 
```

5. Class expressions:
```javascript
const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### What is a prototype chain

The prototype chain is a chain of objects that are linked together by the prototype property. The prototype chain is used to inherit properties and methods from one object to another.

```javascript
const obj = Object.create(null);
```