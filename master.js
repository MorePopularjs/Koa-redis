var cp = require('child_process');
// exec 直接使用exec 是可以直接
cp.exec('ls -l', function(e, stdout, stderr) {
	if(!e) {
		console.log(stdout);
		console.log(stderr);
	}
});
cp.exec('rm -rf exec.js', function(e, stdout, stderr) {
	if(!e) {
		console.log(stdout);
		console.log(stderr);
	}
});