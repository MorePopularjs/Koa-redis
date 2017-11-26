var connection = require('amqp').createConnection();


connection.on('ready', function () {
	console.log('Connected to ' + connection.serverProperties.product); // 1
	var e = connection.exchange('up-and-running'); //exchange  exchange 是 负责接收消息并把它们传递给绑定的队列的实体。
	var q = connection.queue('up-and-running-queue');// 队 列

	q.on('queueDeclareOk', function (args) {
		console.log('Queue opened'); // 开通
		q.bind(e, '#');//   队列自己并不会做任何操作，它必须绑定到某个 exchange 之后才能进行其他操作

		q.on('queueBindOk', function () {
			console.log('Queue bound'); //3

			q.on('basicConsumeOk', function () {
				console.log("Consumer has subscribed, publishing message."); //4 消费者订阅完成。发布消息。
				e.publish('routingKey', {hello: 'world'});
			//而后 Node 会发布一条 hello world 消息，以及用来过滤的关键词 routingKey 给 exchange
			});
		});

		q.subscribe(function (msg) {
			console.log('Message received:'); //5
			console.log(msg);
			connection.end();//连接暂停
		});
	});
});
//最后，发送了 subscribe 命令。回调函数是作为参数传入的，并且每次符合条件的 消息传给 exchange 并通过 queue 传输之后，都会调用它。在本例中，回调函数会导 致程序退出，这对于演示的目的来说足够了。但在真实的应用中，你不太可能这样 做。当 subscribe 命令成功执行后，AMQP 会分发 basicConsumeOk 事件，这会 触发 hello world 消息的发布，然后中断演示程序。

/*
/Connected to RabbitMQ
Queue opened
Queue bound
Consumer has subscribed, publishing message.
	Message received:
{ hello: 'world' }
*/
