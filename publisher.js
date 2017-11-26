var redis = require("redis");  

try{   
 var client = redis.createClient(6379, "127.0.0.1");  

 client.on(  
     "error",  
     function(err){  
         console.log("err"+err);  
         }  

 );  
 client.on('ready',  
     function(){  
      //   这个客户端
         client.publish('testFirst',"hi! first!");  
         client.publish('testSecond',"hi! second!");  
         client.end();  
     }  
 );  
}  
catch(e){  
     console.log("err:"+e);  
}  