// process.on('uncaughtException', function (err) {
// 	console.log('Caught exception: ' + err);
// 	setTimeout(()=>{
// 		console.log('xx')
// 	},1000)
// });
// setTimeout(function () {
// 	console.log('This will still run.');
// }, 500);
// 故意导致异常，并且不捕获它。 nonexistentFunc(); console.log('This will not run.');
// 故意导致异常，并且不捕获它。
// nonexistentFunc();
// console.log('This will not run.');
// // exit的事件队列不在执行，所以函数就不在执行
// process.on('exit', function () {
// 	setTimeout(function () {
// 		console.log('This will not run');
// 	}, 100);
// 	console.log('Bye.');
// });
//
// var http = require('http');
// var server = http.createServer(function(req,res) {
// 	res.writeHead(200, {});
// 	res.end('response');
// 	badLoggingCall('sent response');
// 	console.log('sent response');
// });
// process.on('uncaughtException', function(e) {
// 	console.log(e);
// });
// server.listen(8080,()=>{
// 	console.log('server has created')
// });
// process.title="😆"
// console.log(process.version)
// process.stdin.resume();
// process.on('SIGINT', function () { //SIGINT
// 	console.log('Got SIGINT.  Press Control-D to exit.');
// 	process.exit(0)
// });
// process.on('exit',(code)=>{
// 	console.log(code)
// })

// process.stdin.resume();//这是开启写入流，
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', function (chunk) {
// 	process.stdout.write('data: ' + chunk);
// });
// process.stdin.on('end', function () {
// 	process.stdout.write('end');
// });
process.stdin.resume();
process.stdin.pipe(process.stdout);