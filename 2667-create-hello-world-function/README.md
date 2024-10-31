<h2><a href="https://leetcode.com/problems/create-hello-world-function">Create hello world function</a></h2> <img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' />

<p>Write a function createHelloWorld. It should return a new function that always returns "Hello World".</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
args = []
<strong>Output:</strong> 
"Hello World"
<strong>Explanation:</strong> 
const f = createHelloWorld();
f(); // "Hello World"
The function returned by createHelloWorld should always return "Hello World".
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
args = [{},null,42]
<strong>Output:</strong> 
"Hello World"
<strong>Explanation:</strong> 
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
Any arguments could be passed to the function but it should still always return "Hello World".
</pre>
