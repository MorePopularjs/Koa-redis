// var redis = require("redis"),
//     client = redis.createClient();
//
// // if you'd like to select database 3, instead of 0 (default), call
// // client.select(3, function() { /* ... */ });
// // redis是一个服务，监听error错误类型
// client.on("error", function (err) {
//     console.log("Error " + err);
// });
//
// client.set("string 22", "string val", redis.print);
// client.hset("hash key", "hashtest 1", "some value", redis.print);
// // client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
// // client.hkeys("hash key", function (err, replies) {
// //     console.log(replies.length + " replies:");
// //     replies.forEach(function (reply, i) {
// //         console.log("    " + i + ": " + reply);
// //     });
// //     // client.quit();
// //   });
// //
// var redis = require('redis'),
// 	client = redis.createClient();
// client.on("error", function (err) {
// 	console.log("Error " + err);
// });
// console.log("Setting key1");
// console.log( redis.print)
// client.set("key1", "My string!", redis.print)// 必须有三个方法写入这样才可以
// console.log("Getting key1");
// client.get("key1", function (err, reply) {
// 	console.log("Results for key1:");
// 	console.log(reply);
// 	client.quit(); //关闭连接
// });
// client.hset("hash key", "hashtest 1", "some value", redis.print);
// client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
// // hkeys是获取
// client.hkeys("hash key", function (err, replies) { //hash key  是key
//     console.log(replies.length + " replies:");
//     replies.forEach(function (reply, i) {
//         console.log("    " + i + ": " + reply);
//     });
//     client.quit();
//   });
// // 多个同时设置
// var redis = require('redis'),
// 	client = redis.createClient();
// client.on("error", function (err) {
// 	console.log("Error " + err);
// });
// console.log("Setting user hash");
// //hmset
// client.hmset("user", "username", "johndoe", "firstname", "john",
// 	"lastname", "doe");
// client.hkeys("user", function (err, replies) {
// 	console.log("Results for user:");
// 	console.log(replies.length + " replies:");
// 	replies.forEach(function (reply, i) {
// 		console.log(i + ": " + reply);
// 	});
// 	client.quit();
// })
//// 放在对象里面 只能是hmset
// var redis = require('redis'),
// 	client = redis.createClient();
// client.on("error", function (err) {
// 	console.log("Error " + err);
// });
// var user = {
// 	username: 'johndoe',
// 	firstname: 'John',
// 	lastname: 'Doe',
// 	email: 'john@johndoe.com',
// 	website: 'http://www.johndoe.com'
// }
// console.log("Setting user hash");
// client.hmset("user", user);
// client.hmset("hosts", "mjr", "1", "another", "23", "home", "1234");
// client.hgetall("hosts", function (err, obj) {
// 	console.dir(obj);
// 	client.quit();
// });
//
// client.hgetall("user", function (err, obj) {
// 	console.dir(obj);
// 	client.quit();
// });
// client.hgetall("F3FyKaH7OxfmdGEZ64kLRLVq7MQHavn7", function (err, obj) {
// 	console.dir(obj);
// 	client.quit();
// });

// client.hkeys("user", function(err,replies) {
// 	console.log("Results for user:");
// 	console.log(replies.length + " replies:");
// 	replies.forEach(function (reply, i) {//reply
// 		console.log(i + ": " + reply );
// 	});
// 	client.quit();
// });
// client.get("user", function (err, reply) {
// 	console.log(reply); // Will print `OK`
// // });
//
//
// 最近获取了那些荣誉
// var redis = require('redis'),
// 	client = redis.createClient();
// client.on("error", function (err) {
// 	console.log("Error " + err);
// });
// client.lpush("pendingusers", "user1" );
// client.lpush("pendingusers", "user2" );
// client.lpush("pendingusers", "user3" );
// client.lpush("pendingusers", "user4" );
// //// push 往里推，pop 已经取出来了 数组取出来了就
// client.rpop("pendingusers", function(err,username) {
// 	if( !err ) {
// 		console.log("Processing " + username);
// 	}
// 	// client.quit();
// });
// client.lpop('pendingusers',(err,username)=>{
// 	console.log(username)
// })
// var  ary=[1,2];
// ary.push(0);
// console.log(ary);
// ary.pop();//都是操作队尾
// console.log(ary);

// var sys = require("sys");  
try{   
    var client = require("redis").createClient(6379, "127.0.0.1");  
      
    // sys.puts("waiting for messages...");  
    client.on(  
        "error",  
        function(err){  
            console.log("err"+err);  
            }  
    );  
    client.subscribe("testSecond");   //只要订阅这个通道，就会按照监听 subscribe 这个事件
    client.on('subscribe',  
        function(channel,count){  
					console.log('dd');
            console.log("channel:" + channel + ", count:"+count);  
            }  
    );  
    client.on('message',  // 当有消息过来的时候就会 触发这个事件
        function(channel,message){  
            console.log("channel:" + channel + ", msg:"+message);  
            }  
    );  
    client.on('unsubscribe',  
        function(channel,count){  
            console.log("channel:" + channel + ", count:"+count);  
            }  
    );  
} catch(e){  
        console.log("err:"+e);  
}  