```javascript

var start = 1491789600000;//2017-4-10 10:00
var end = 1494381600000;//2017-5-10 10:00

//一天时间是 24小时(h)，每小时有60分钟(m)，每分钟有60秒(s)，每秒有1000毫秒(ms)

const SECOND = 1000; 
const MINUTE = 60 * SECOND; // 60 * 1000
const HOUR = 60 * MINUTE;  // 60 * 60 * 1000
const DAY = 24 * HOUR; // 24 * 60 * 60 * 1000


var utc = end - start;

var day = utc / (24 * 60 * 60 * 1000);

var h = utc / (60 * 60 * 1000);

var m = utc / (60 * 1000);

//https://blog.csdn.net/qq_29132907/article/details/83787402
//http://www.imooc.com/article/256463
//https://www.cnblogs.com/laosunlaiye/p/9395327.html
```

- 如果当前时间小于活动开始时间（还没开始），则提示活动暂未开启，敬请期待（不请求数据）
- 如果活动开始时间大于当前时间（活动已经开始），则请求数据
- 当actStatus = 2，则提示活动已结束，总榜数据保留展示出来，日榜提示已结束