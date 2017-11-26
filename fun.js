// (1+2)*4

// var a = 1+2;
// var b = a*4

// const a = ()=>{
//   return 1+2
// }
// const b =() => {
//   return a*4
// }
// b()
// // 将运算过程定义为不同的函数
// 1：可以赋值给其他变量，
// 2：可以当做参数传入
// 3：可以当做函数的返回值
// 处理回调呢 或者promise
//  打印这个过程 写成一个函数 同时将这个函数当做参数传入到函数中
// const print = (i)=>{
//   console.log('xxx',i);
// }
// [1,2,3].forEach(print)
let sum
// 这个结果到时相同，但是 改变了外外面的
// function add(a,b) {
//   sum = a +b
//   return this
// }
// global.multiply=  function multiply (c) {
//   sum = c * sum
//   return this
// }
// add(1,2).multiply(3)
// console.log('sum',sum);
//  ({name,age}={name:'xx',age:'rr'})
//  console.log('name',name);
//  console.log('age',age);

// const data ={name:'xxx',age:'444'};
// Object.entries(data).forEach(([key,value])=>{
//   console.log('key',key);
//   console.log('value',value);
// });

// for(var [key,value] of Object.entries(data)){
//   console.log(key,value);
// }
// const data = ({name='333',age='100'})=>{
//   console.log('name',name);
// }

// // 返回一个对象
// const data = (name = '333',age='444')=>(
//   // console.log('name',name)
//   // setTimeout(function() {
//   //   console.log('ddd');
//   // }, 10);  
//   `${name}++++${age}`
// )
// console.log(data()); 
// function fn1({name = '222',age = 'ccc'}) {
// 	console.log(name,age)
// }
// fn1({name:333})
// 箭头函数默认 return
const g = n => n+1; 
const f = n => n*2
// 需求是将输入一个数 加1 乘以 2 返回
const data = (n)=>{
  const incremented = g(n)
  return f(incremented)
}
console.log(data(20))
// 1 f(g(x))是一个重点 每次都有返回值
// const compose = (f,g) => x => f(g(x))
// const composefn = compose(f,g)
// console.log(composefn(20))
// 2仿函数
// const compose = (f,g) => x => [x].map(g).map(f).pop()
// const composefn= compose(f,g)
// console.log(composefn(20))
// 3 使用reduce 将多个函数组装在一起 
// 3.1 将所有的函数放在数组里面 ，然后利用reduce 将函数的结果不断的往下一个函数里面放 用不用promise 明天再说 执行的时候如果有异步呢 看 up即可
// fns 将所有的参数全部收集起来放在 fns这个参数里面 数组的形式  注意：函数的次序
const pipe = (...fns) => x=>fns.reduce((acc,fn)=>fn(acc),x)
console.log(pipe(g,f)(20))




