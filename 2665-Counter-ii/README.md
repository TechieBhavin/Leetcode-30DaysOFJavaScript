<h2><a href="https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript">Counter ii</a></h2> <img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' />

<p>Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.</p>
<p>The three functions are:</p>
<p>increment() increases the current value by 1 and then returns it.</p>
<p>decrement() reduces the current value by 1 and then returns it.</p>
<p>reset() sets the current value to init and then returns it.</p>



<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
init = 5, calls = ["increment","reset","decrement"]
<strong>Output:</strong> 
[6,5,4]
<strong>Explanation:</strong> 
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
init = 0, calls = ["increment","increment","decrement","reset","reset"]
<strong>Output:</strong> 
[1,2,1,0,0]
<strong>Explanation:</strong> 
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
</pre>
