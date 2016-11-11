# D3 basics
Testing and learning the basics of D3.js, a JavaScript library for manipulating documents based on data.

## Scales
Scales allow to map a given value within a given domain to an equivalent of a given range.

### Linear scales
Linear scales map a given value in a linear way. If the given numer is 50, the domain between 0 and 100 and the range between 0 and 10, the returned value will be 5.

```js
const linearScale = d3.scaleLinear()
	.domain([0, 100])
	.range([0, 10]);

console.log(linearScale(50)); // Outputs 5
```

To make sure that the given number remains within the boundaries of the given range, you can use the ``clamp`` method.

```js
let linearScale = d3.scaleLinear()
	.domain([0, 100])
	.range([0, 10]);

console.log(linearScale(150)); // Outputs 25

linearScale = linearScale.clamp(true);

console.log(linearScale(150)); // Outputs 10
```

You can ``invert`` the linear scale in order to use the range as the domain and the domain as the range.

```js
const linearScale = d3.scaleLinear()
	.domain([0, 100]) // Using invert, this becomes the range...
	.range([0, 10]); // ...and this the domain

console.log(linearScale.invert(5)); // outputs 50
```
