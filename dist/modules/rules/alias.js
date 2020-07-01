(function (window, document) {
  var brow = appNativeFun.checkVersion(); //
  var platflag = document.querySelectorAll('.platflag'); // 名称
  var company = document.querySelectorAll('.company'); // 公司名称
  var abbreviation = document.querySelectorAll('.abbreviation'); // 公司简称
  var address = document.querySelector('.address'); // 联系电话
  var tel = document.querySelector('.tel'); // 联系电话
  var email = document.querySelector('.email'); // 联系电话
  var trading = document.querySelectorAll('.trading'); // 贷币体系
  var origin = location.origin; // 
  var platArray = [
    { 
      id: 1, 
      appName: 'bibi约玩', 
      company: '成都飞雁网络科技有限公司', 
      abbreviation: '飞雁科技',
      address: '成都市成华区二环路东一段29号3楼7号',
      tel: '020-85686599',
      email: '877977688@qq.com',
      trading: '金豆',
      origin: '' 
    },
    { 
      id: 2, 
      appName: '多多语音', 
      company: '深圳而立之年网络科技有限公司', 
      abbreviation: '而立之年',
      address: '深圳市南山区粤海街道高新南七道1号粤美特大厦1302',
      tel: '020-85686606',
      email: '2630937037@qq.com',
      trading: '金豆',
      origin: 'www.cdsfl8888.com'        
    },
    {
      id: 3, 
      appName: '笨笨', 
      company: '华兀科技（深圳）有限公司', 
      abbreviation: '华兀科技',
      address: '深圳市南山区南山街道红花园社区深南大道12069号海岸时代公寓西座2909',
      tel: '18211472440',
      email: '430106807@qq.com',
      trading: '金豆',
      origin: 'betapack.cdsfl8888.com'      
    }
  ];
  
  function getObjInfo(obj) {
    var id = null;
    // app内
    if (obj.app) {
      console.log('app内');
      if (obj.bibi) {
        id = 1;
      } else if (obj.duoduo) {
        id = 2;
      } else {
        id = 3;
      }
    } else {
      console.log('app外');
      platArray.forEach(function(item) {
        var _origin = item.origin;
        if (_origin.length) {
          if (origin.indexOf(_origin) > -1) {
            id = item.id;
          }
        }
      });
    }
    // 返回对象
    var f = platArray.filter(function (item) {
      return item.id === id;
    })[0];
    return f;    
  }
  var result = getObjInfo(brow);
  console.log(result);
  console.log(tel);
  console.log(email);
  if (result != null) {
    // 设置名称
    if (platflag.length) {
      for (var i = 0; i < platflag.length; i++) {
        platflag[i].innerHTML = result.appName;
      }
    }
    // 公司名称
    if (company.length) {
      for (var i = 0; i < company.length; i++) {
        company[i].innerHTML = result.company;
      } 
    }  
    // 公司简称
    if (abbreviation.length) {
      for (var i = 0; i < abbreviation.length; i++) {
        abbreviation[i].innerHTML = result.abbreviation;
      }       
    }
    if (tel || address || email) {
      address.innerHTML = result.address;
      tel.innerHTML = result.tel;
      email.innerHTML = result.email;
    }
    // 贷币体系
    if (trading.length) {
      for (var i = 0; i < trading.length; i++) {
        trading[i].innerHTML = result.trading;
      }      
    } 
  }
})(window, document);
