##### 文本

大约在 1 小时之前
大约在 2 小时之前
大约在 6 小时间之前
6 天之前
10 天之前
11 天之前
1 个月之前
2 个月之前
超过一年，则显示具体时间(如： 2020-05-18 20:02:47 +0800 )

##### new Date().getTime();

获得时间戳: 1591002518167

1.根据获取的时间戳与之当前的时间对比

- 如果获取的时间大于当前时间，则不处理(时间超前了)
- 如果获取的时间小于当前时间，则往下处理

```javascript
const second = 1000;
let now = new Date().getTime();

let get = new Date(1591002518167).getTime();

if (get > now) {
  return;
}

let d = now - get;

let s = Math.floor(d / (24 * 60 * 60 * 1000));
```
