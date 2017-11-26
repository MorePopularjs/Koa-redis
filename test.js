// var redis = require('redis'),
// 	client = redis.createClient();
// client.on("error", function (err) {
// 	console.log("Error " + err);
// });
// client.zadd( "contestants", 60, "Deborah" );
// client.zadd( "contestants", 65, "John" );
// client.zadd( "contestants", 26, "Patrick" );
// client.zadd( "contestants", 62, "Mike" );
// client.zadd( "contestants", 24, "Courtney" );
// client.zadd( "contestants", 39, "Jennifer" );
// client.zadd( "contestants", 26, "Jessica" );
// client.zadd( "contestants", 46, "Joe" );
// client.zadd( "contestants", 63, "Bonnie" );
// client.zadd( "contestants", 27, "Vinny" );
// client.zadd( "contestants", 27, "Ramon" );
// client.zadd( "contestants", 51, "Becky" );
// client.zadd( "contestants", 41, "Sunny" );
// client.zadd( "contestants", 47, "Antone" );
// client.zadd( "contestants", 40, "John" );
// client.zcard( "contestants", function( err, length ) {
// 	if( !err ) {
// 		var contestantCount = length;
// 		var membersPerTeam = Math.ceil( contestantCount / 3 );
// 		// 这种就是取出数据进行排序了  这就是操作数据库
// 		client.zrange( "contestants", membersPerTeam * 0, membersPerTeam * 1 - 1, function(err, values) {
// 			console.log('Young team: ' + values);
// 		});
// 		client.zrange( "contestants", membersPerTeam * 1, membersPerTeam * 2 - 1, function(err, values) {
// 			console.log('Middle team: ' + values);
// 		});
// 		client.zrange( "contestants", membersPerTeam * 2, contestantCount,
// 			function(err, values) {
// 				console.log('Elder team: ' + values);
// 				client.quit();
// 			});
// 	} });

var redis = require("redis"),
	talkativeClient = redis.createClient(),
	talkativeClient1 = redis.createClient(),
	pensiveClient1 = redis.createClient();
	pensiveClient = redis.createClient();
pensiveClient.on("subscribe", function (channel, count) {
	// talkativeClient.publish( channel, "Welcome to " + channel );
	// 多个客户端往一个
	talkativeClient.publish( channel,"You subscribed to " + count + "channels!" );
	talkativeClient1.publish( channel,"sss " + count + "channels!" );
});

pensiveClient.on("unsubscribe", function(channel, count) {
	if (count === 0) {
		talkativeClient.quit();
		pensiveClient.quit();
	}
});

pensiveClient.on("message", function (channel, message) {
	// 这里接收了
	console.log(channel + ': ' + message);
});

pensiveClient1.on("message", function (channel, message) {
	// 这里接收了
	console.log(channel + '====== ' + message);
});

pensiveClient.on("ready", function() {
	// 发布事件 和订阅事件  三个事件
	// pensiveClient.subscribe("quiet channel", "peaceful channel", "noisychannel" );
	pensiveClient.subscribe("quiet channel");
	pensiveClient1.subscribe("quiet channel");
	setTimeout(function() {
		// 取消这些事件
		pensiveClient.unsubscribe("quiet channel", "peaceful channel", "noisychannel" );
	}, 1000); });


	