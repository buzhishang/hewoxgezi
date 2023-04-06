window.onload = function () {
   let s = 150;//速度
   let music1 = document.querySelector('.music1');//音乐1
   var music2 = document.querySelector('.music2');//音乐2
   var music3 = document.querySelector('.music3');//音乐2
   var music4 = document.querySelector('.music4');//音乐4
   var pt4 = document.querySelector('.shui4');//移动平台光圈
   var yunsan = document.querySelector('.yunsan');//云山
   var shouji = document.querySelector('.top');//手机框
   var box = document.querySelector('.box');//最大盒子
   var qipao = document.querySelector('.qipao');//气泡
   var ptgg3 = document.querySelector('.z21-3')//第三个平台
   var ptgg2 = document.querySelector('.z09-2')//第二个平台
   var ptgg1 = document.querySelector('.z09')//第一个平台
   var jianto = document.querySelectorAll('.jianto');//箭头集合类名
   var prev = document.querySelector('.prev')//箭头的类名
   var img = document.querySelector('.img1');//鸽子图片
   var ge = document.querySelector('.gege');//鸽子
   var pt1 = document.querySelector('.shui1')//第一个平台光圈
   var wenz1 = document.querySelector('.wenz1');//文字1
   var wenz2 = document.querySelector('.wenz2');//文字2
   var pt2 = document.querySelector('.shui2')//第二平台光圈
   var wenz3 = document.querySelector('.wenz3');//文字3
   var wenz4 = document.querySelector('.wenz4');//文字4
   var pt3 = document.querySelector('.shui3')//第三平台光圈
   var wenz5 = document.querySelector('.wenz5');//文字5
   var wenz6 = document.querySelector('.wenz6');//文字6
   var yidon = document.querySelector('.z12');//移动平台
   var xqiu1 = document.querySelector('.xqiu1');//星球1
   var xqiu2 = document.querySelector('.xqiu2');//星球2
   var xqiu3 = document.querySelector('.xqiu3');//星球3
   var arr = document.querySelectorAll('.xxx');//最后页面类名集合
   var xuanyao = document.querySelector('.xuanyao');//最后页面的文字
   var diy = document.querySelectorAll('.diy');//第一平台长板阶梯的类名集合
   var di = document.querySelectorAll('.di');//阁楼，风车等类名集合
   var box2 = document.querySelector('.box2');//滑动后的文字的盒子
   var sm = document.querySelector('.sm');//第一面文字
   var xshd = document.querySelector('.xshd');//箭头盒子的类名
   let sid1;//定时器的id
   let flag1 = true, flag2 = false, flag3 = false, flag4 = false;//光圈的开关

   //箭头的动画的效果
   for (let i = 0; i < jianto.length; i++) {
      setTimeout(function () {
         jianto[2 - i].setAttribute('class', 'jianto donh')
      }, i * 500)

   }
   //初始化音乐点击播放
   document.onclick = function () {
      music1.play()
   }


   function dskai(a, b = 0) {//音乐定时开启函数
      setTimeout(() => {
         a.play();
      }, b)
   }
   function dsguan(a, b = 0) {//音乐定时关闭函数
      setTimeout(() => {
         a.pause();
      }, b)
   }
   function ycshui(a, b) {//水波纹隐藏
      a.setAttribute('class', `${b} yinc`)
   }
   function dsshui(a, b, c) {//水波纹定时显现
      setTimeout(() => {
         a.setAttribute('class', `${b}`)
      }, c)
   }
   function ptkg(a = 0, b = 0, c = 0) {//点击平台的开关
      ptgg1.setAttribute('kg', `${a}`)
      ptgg2.setAttribute('kg', `${b}`)
      ptgg3.setAttribute('kg', `${c}`)
   }
   function clear(a) {//定时清id
      setTimeout(() => {
         clearInterval(sid1)
      }, a)
   }
   function set(a, b, c) {//设置类名
      a.setAttribute('class', `${b} ${c}`)
   }
   function wenzi(a, b, c, d) {//文字变化动画
      setTimeout(() => {
         wenz1.setAttribute('class', `wenz1 ${a}`)
         wenz2.setAttribute('class', `wenz2 ${a}`)
         wenz3.setAttribute('class', `wenz3 ${b}`)
         wenz4.setAttribute('class', `wenz4 ${b}`)
         wenz5.setAttribute('class', `wenz5 ${c}`)
         wenz6.setAttribute('class', `wenz6 ${c}`)
      }, d)
   }
   function dsq(b) {//星球上下动画
      setTimeout(() => {
         xqdh('sxfd', 'sxfd', 'sxfd')
      }, b)
   }
   function xqdh(a, b, c) {//星球上升动画
      xqiu1.setAttribute('class', `xqiu1 ${a}`)
      xqiu2.setAttribute('class', `xqiu2 ${b}`)
      xqiu3.setAttribute('class', `xqiu3 ${c}`)
   }
   function fz1(a, b, c, d) {//鸽子位移，转向
      var i = a;
      sid1 = setInterval(() => {
         if (i >= d) i = a
         img.setAttribute('src', './xn/gegezi/gz' + i + '.png')
         i++;
         ge.setAttribute('class', 'gege pingy' + c)
      }, b);
   }
   function ggzl(a, b, c, d, e) {//鸽子走路定时器
      setTimeout(() => {
         clearInterval(sid1)
         fz1(a, b, c, d)
      }, e)
   }
   function tymusic(a, b) {//音乐开始结束调用
      dskai(music4)//开启第一平台鸽子走路的声音
      dsguan(music4, a)//走到第一平台时关闭鸽子走路声音
      dskai(music2, a)//开启阶梯升起音乐
      dsguan(music2, b)//阶梯全部升起后，关闭音乐
   }
   function shangtia() {//鸽子平台上天
      setTimeout(() => {
         for (var i = 0; i <= div.length - 1; i++) {//所有阶梯添加最后下降的动画
            div[i].classList.add('xc')
         }
         box.classList.add('bg')
         set(yidon, 'pn1', 'z12')//第四平台上天的动画
         set(ge, 'gege', 'nn1')//鸽子上天的动画
      }, 3889)
   }
   function zuiho() {//最后页面的效果显示
      setTimeout(() => {
         for (let i = 0; i <= arr.length - 1; i++) {
            arr[i].classList.add('guodu')//最后页面文字的显现效果
         }
         xqdh('xztx', 'fdtx', 'xztx2')//星球动画
         dsq(2500)//星球上下动画
      }, 5089)
   }
   //-------------------------------
   music4.playbackRate = 0.8;//音乐播放速度

   var paY, pa2Y;
   //箭头点击事件
   setTimeout(() => {
      document.ontouchstart = function (event) {
         var event = event || window.event
         paY = event.changedTouches[0].pageY
      }
      document.ontouchend = function (event) {
         if (event.changedTouches[0].pageY - paY < 0) {
            dsguan(music1)  //初始化音乐关闭
            dskai(music2) //阶梯声音开启
            set(sm, 'sm', 'yinc')
            set(xshd, 'xshd', 'yinc')
            set(box2, 'box2', 'ggdd')
            ge.classList.remove('gegebzg')//移除鸽子初始化上升动画
            for (let i = 0; i < di.length; i++) {//风车，阁楼上升动画
               di[i].classList.remove('yinc');
               di[i].classList.add('animate__animated', 'animate__bounceInUp');
            }
            dd(diy, 1000)//柱子升起来动画
            dsshui(pt1, 'shui1', 7200)//定时显现光圈
            setTimeout(() => {
               qipao.classList.add('guodu')//给气泡增加显现过渡
            }, 7200)
            dsguan(music2, 6800)//鸽子走路声音定时关闭
            document.onclick = null;//事件清除
            document.ontouchstart = null;//事件清除
            document.ontouchend = null;//事件清除
         }


      }
   }, 3000)
   //-----------------------

   // 点击柱子，鸽子瞬移
   ptgg1.onclick = function () {
      ptdj(ptgg1, 55, 11, 'ggdd', 'fgd', 'fgd')
   }
   ptgg2.onclick = function () {
      ptdj(ptgg2, 45, 11, 'fgd', 'ggdd', 'fgd')
   }
   ptgg3.onclick = function () {
      ptdj(ptgg3, 35, 21, 'fgd', 'fgd', 'ggdd')
   }
   function ptdj(a, b, c, e, f, g) {//鸽子瞬移封装
      if (a.getAttribute('kg') == 1) {
         ge.setAttribute('class', `gege py${b}`)
         img.setAttribute('src', './xn/gegezi/gz' + c + '.png')
         wenz1.setAttribute('class', `wenz1 ${e}`)
         wenz2.setAttribute('class', `wenz2 ${e}`)
         wenz3.setAttribute('class', `wenz3 ${f}`)
         wenz4.setAttribute('class', `wenz4 ${f}`)
         wenz5.setAttribute('class', `wenz5 ${g}`)
         wenz6.setAttribute('class', `wenz6 ${g}`)
      }
   }

   // ------------
   function dd(x, y) {  //柱子升起来的动画
      setTimeout(() => {
         for (let i = 0; i < x.length; i++) {
            setTimeout(() => {
               x[i].classList.remove('yinc')
               x[i].classList.add('animate__animated', 'animate__bounceInUp');
            }, i * 500)

         }
      }, y)
   }
   // 风车动画
   var fenche = document.querySelector('.ffcc');
   function fc(a, b) {
      var i = a;
      setInterval(() => {
         if (i >= 3) i = a
         fenche.setAttribute('src', './xn/qietu/z18-' + i + '.png')
         i++;
      }, b);
   }
   fc(1, 200)
   //-----------------------------------------------

   //第一平台点击事件

   var die = document.querySelectorAll('.die')
   pt1.onclick = function () {
      qipao.classList.add('yinc')//隐藏气泡
      ycshui(pt1, 'shui1')//隐藏第一平台光圈
      tymusic(9250, 13550)
      dd(die, 8750)//第二平台阶梯升起
      fz1(1, s, 1, 5);//第一平台鸽子位移
      ggzl(11, s, 1, 15, 2000)//第一平台鸽子转向
      ggzl(1, s, 1, 5, 3556)//第一平台鸽子转向
      ggzl(11, s, 1, 15, 7273)//第一平台鸽子转向
      wenzi('ggdd', null, null, 9750)//第一平台文字显现，消失效果
      clear(9250)//清除上一个定时器id
      dsshui(pt2, 'shui2', 14850)//开启第二平台光圈
      setTimeout(function () {
         set(box2, 'box2', 'fgd')
      }, 9250)
   }
   //------------------------------------------
   //第二平台点击事件
   let dis = document.querySelectorAll('.dis')
   pt2.onclick = function () {
      ycshui(pt2, 'shui2')//隐藏平台2光圈
      tymusic(5100, 9600)
      dd(dis, 4800)//第三平台阶梯升起
      fz1(1, s, 2, 5);//第二平台鸽子位移
      ggzl(11, s, 2, 15, 730)//第二平台鸽子转向
      wenzi('fgd', 'ggdd', null, 5100)//第二平台文字显现，消失效果
      clear(5100)//清除上一个定时器id
      dsshui(pt3, 'shui3', 10600)//显现第三平台光圈
      setTimeout(() => {
         ptkg(1, 1, 0)
      }, 10600)

   }
   //-----------------------------------------

   //第三平台点击事件
   let dix = document.querySelectorAll('.dix')
   pt3.onclick = function () {
      ycshui(pt3, 'shui3')//隐藏第三平台光圈
      tymusic(5400, 9600)
      ptkg(0, 0, 0)//三个平台鸽子瞬移开关
      dd(dix, 5000)//第四平台阶梯升起
      fz1(21, s, 3, 25)//鸽子位移
      ggzl(31, s, 3, 35, 1785)//定时鸽子转向
      ggzl(21, s, 3, 25, 3137)//鸽子转向
      ggzl(21, s, 3, 25, 5223)//鸽子转向
      wenzi('fgd', 'fgd', 'ggdd', 5400)//第三平台文字显现，消失效果
      clear(5400)//清除上一个定时器id
      dsshui(pt4, 'shui4', 10600)//显现第四平台光圈
      setTimeout(() => {
         ptkg(1, 1, 1)
      }, 10600)


   }
   //---------------------------------------

   //移动平台点击事件
   var div = document.querySelectorAll('.stt');
   var wzyc = document.querySelectorAll('.sdd')
   pt4.onclick = function () {
      dskai(music4)//开启第四平台鸽子走路声音
      ptkg(0, 0, 0)//三个平台鸽子瞬移开关
      ycshui(pt4, 'shui4')//隐藏第四平台光圈
      fz1(31, s, 4, 35)//鸽子位移
      ggzl(1, s, 4, 5, 2324)//鸽子转向
      clear(3589)//清楚上一个定时器
      setTimeout(() => {
         set(ge, 'gege', 'nn2')//鸽子上天先下降的动画
         set(shouji, 'top', 'yinc')//给手机框设置隐藏
         set(yunsan, 'yunsan', 'yinc')//给云山设置隐藏
         music4.pause();//关闭第四平台鸽子走路声音
         img.setAttribute('src', './xn/gegezi/gz' + 31 + '.png')
         yidon.classList.add('pn2')//第四平台上天先下降的动画
         dskai(music3)//开启上天音乐
         for (var i = 0; i <= wzyc.length - 1; i++) {
            wzyc[i].classList.add('yinc')//给前三面文字循环隐藏
         }
      }, 3589)
      shangtia();//鸽子平台上天
      zuiho();//最后页面的效果显示

   }


   // --------------------------------------

































   // setTimeout(() => {
   //    wenz1.setAttribute('class', 'wenz1 ggdd')
   //    wenz2.setAttribute('class', 'wenz2 ggdd')
   //    wenz3.setAttribute('class', 'wenz3 ')
   //    wenz4.setAttribute('class', 'wenz4 ')
   //    wenz5.setAttribute('class', 'wenz5 ')
   //    wenz6.setAttribute('class', 'wenz6 ')
   // }, 500)



   // function fz2(a, b, c) {
   //    var i = a;
   //    sid2 = setInterval(() => {
   //       if (i >= 15) i = a
   //       img.setAttribute('src', './xn/gegezi/gz' + i + '.png')
   //       i++;
   //       ge.setAttribute('class', 'gege pingy' + c)
   //    }, b);
   // }
   // function fz3(a, b, c) {
   //    var i = a;
   //    sid3 = setInterval(() => {
   //       if (i >= 25) i = a
   //       img.setAttribute('src', './xn/gegezi/gz' + i + '.png')
   //       i++;
   //       ge.setAttribute('class', 'gege pingy' + c)
   //    }, b);
   // }
   // function fz4(a, b, c) {
   //    var i = a;
   //    sid4 = setInterval(() => {
   //       if (i >= 35) i = a
   //       img.setAttribute('src', './xn/gegezi/gz' + i + '.png')
   //       i++;
   //       ge.setAttribute('class', 'gege pingy' + c)
   //    }, b);
   // }
   //--------------------------------------
   // setTimeout(() => {
   //    wenz1.setAttribute('class', 'wenz1 fgd')
   //    wenz2.setAttribute('class', 'wenz2 fgd')
   //    wenz3.setAttribute('class', 'wenz3 fgd')
   //    wenz4.setAttribute('class', 'wenz4 fgd')
   //    wenz5.setAttribute('class', 'wenz5 ggdd')
   //    wenz6.setAttribute('class', 'wenz6 ggdd')
   // }, 5400)



   // setTimeout(function () {
   //    wenz1.setAttribute('class', 'wenz1 fgd')
   //    wenz2.setAttribute('class', 'wenz2 fgd')
   //    wenz3.setAttribute('class', 'wenz3 ggdd')
   //    wenz4.setAttribute('class', 'wenz4 ggdd')
   //    wenz5.setAttribute('class', 'wenz5 ')
   //    wenz6.setAttribute('class', 'wenz6 ')
   // }, 5100)
}



 // read.classList.add('guodu')
               // join.classList.add('guodu')
               // shijie.classList.add('guodu')
               // xuanyao.classList.add('guodu')
               // wenz7.classList.add('guodu')
               // wenz8.classList.add('guodu')
               // hwxlogo.classList.add('guodu')
