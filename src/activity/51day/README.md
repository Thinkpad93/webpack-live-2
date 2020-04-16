- 172800000等于48小时

```javascript

var start = 1491789600000;//2017-4-10 10:00
var end = 1494381600000;//2017-5-10 10:00

var utc = end - start;

var day = utc / (24 * 60 * 60 * 1000);

var h = utc / (60 * 60 * 1000);

var m = utc / (60 * 1000);

//https://blog.csdn.net/qq_29132907/article/details/83787402
//http://www.imooc.com/article/256463
```