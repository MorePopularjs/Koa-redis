var http = require('http')
var opts = {
	host: 'dskjvnfskcsjsdkcds.net',
	port: 80,
	path: '/'
};
// 密集型计算的
var req = http.get(opts, function(res) {
	console.log('This will never get called')
})
req.on('error', function(e) {
	console.log('Got that pesky error trapped')
})