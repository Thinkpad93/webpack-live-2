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
##### 活动还没开始
actStatus = 1;
1.当前时间小于活动开始时间，各榜单提示活动暂未开启，敬请期待
2.不可请求各榜单数据
3.个人榜单数据也不可请求

##### 活动开始
actStatus = 1;
1.活动开始时间大于当前时间，请求各榜单数据
2.显示活动倒计时
3.个人榜单数据根据tabs切换后展示不同数据

##### 活动结束
actStatus = 2;
1.只显示总榜数据
2.提示活动已结束
3.除了日榜，个人总榜单数据还是要展示出来