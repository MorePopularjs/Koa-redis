var koa = require('koa');
var session = require('koa-generic-session');
var RedisStore = require('koa-redis')

var app = new koa();

app.keys = ['jackblog-secret'];
console.log('process.argv',process.argv);
if (process.argv[2] !== 'nosession') {
  console.log('test');
  // 把所有的session放在
  app.use(session({
    // key: "11",
    store: new RedisStore({
      host:'127.0.0.1',
      port:'6379',
      auth_pass:'xxx'
    })
  }));
}
// session是通过cookie 相互连接起来的
app.use(function *() {
  this.session = this.session || {};
  console.log('this.session',this.session);
  this.session.name = 'koa-redis';
  console.log('=----->',this.session);
  this.body = this.session.name;
});

require('http').createServer(app.callback()).listen(8080);
console.log('server start listen at 8080');
