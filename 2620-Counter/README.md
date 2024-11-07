<h2><a href="https://leetcode.com/problems/counter">Counter</a></h2> <img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' />

<p>Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
n = 10 
["call","call","call"]
<strong>Output:</strong> 
[10,11,12]
<strong>Explanation:</strong> 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
n = -2
["call","call","call","call","call"]
<strong>Output:</strong> 
[-2,-1,0,1,2]
<strong>Explanation:</strong> 
counter() initially returns -2. Then increases after each sebsequent call.
</pre>
