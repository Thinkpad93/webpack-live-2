const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const modules = path.join(__dirname, './src/modules/');
const activity = path.join(__dirname, './src/activity/');


rl.question('输入要创建的文件目录名？', (answer) => {
  let strArr = answer.split(' ');
  if (strArr.length) {
    const dir = strArr[0] === 'modules' ? modules : activity;
    // 先检查目录是否存在
    if (fs.existsSync(dir + strArr[1])) {
      console.log(`目录已经存在`);
      rl.close();
    } else {
      // 创建
      fs.mkdir(dir + strArr[1], { recursive: true }, (err) => {
        if (err) {
          throw new Error(err);
        }
        rl.close();
      });
    }
  }
});