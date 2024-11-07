<h2><a href="https://leetcode.com/problems/To be or not to be">To be or not to be</a></h2> <img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' />

<p>Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions./p>
<p>toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal"./p>
<p>notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal"./p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
func = () => expect(5).toBe(5)
<strong>Output:</strong> 
{"value": true}
<strong>Explanation:</strong> 
5 === 5 so this expression returns true.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
func = () => expect(5).toBe(null)
<strong>Output:</strong> 
{"error": "Not Equal"}
<strong>Explanation:</strong> 
5 !== null so this expression throw the error "Not Equal".
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> 
func = () => expect(5).notToBe(null)
<strong>Output:</strong> 
{"value": true}
<strong>Explanation:</strong> 
5 !== null so this expression returns true.
</pre>
