/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let present = init;
    return{
        increment:()=> ++present,
        decrement:()=> --present,
        reset: ()=> present = init,
    }
};
