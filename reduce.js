// a 是第一个值
// const data =[1,2,3].reduce((a,b)=>{
// 	console.log(a,b);
// 	return a+b
// },10);
// console.log(data);


// setTimeout(()=>{
// 	test.then((content)=>{
// 		console.log('sss')
// 		console.log(content)
// 	})
// 	// console.log(Promise.resolve(test))
// },1000)
//
// console.log([1,2,3].find(()=>(1)))

// (async ()=>{
// 	const promise= new Promise((resolve,reject)=>{
// 		setTimeout(resolve,1000)
// 	});
// 	await  promise;
// 	console.log('=======')
// })();
const R = require('ramda');
// const fn1=(n)=>n+1;
// const fn2=(x)=>x*2;
// console.log(R.compose(fn1,fn2)(20));
// // compose 从右到左执行；
// var addFourNumbers = (a, b, c, d) => a + b + c + d;
//
// var curriedAddFourNumbers = R.curry(addFourNumbers);
// var f = curriedAddFourNumbers(1, 2);
// // console.log(f)
// var g = f(3);
// console.log(g(10))
// g(4); //=> 10

const fn1 = (a)=>a*2;
console.log( R.curry(fn1)(3))
