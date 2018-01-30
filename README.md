### vue学习
    https://cn.vuejs.org/v2/api/#Vue-extend  API
    
    document.body.style.background = '#000'
    document.body.style.color = 'deeppink'
    
    
    
    var as = document.querySelectorAll('a');
    for(var i = 0,len = as.length;i<len;i++){
    	as[i].style.color = 'deeppink'
    }
    
    
    
### 安装脚手架
    https://www.jianshu.com/p/1626b8643676  脚手架目录介绍
    
    npm install vue-cli -g  
    vue -V（注意这里是大写的“V”） 如果出现相应的版本号，则说明安装成功。
    vue init webpack 项目名称     
    cd 项目  进入项目名称
    安装项目依赖：npm install
    安装 vue 路由模块 vue-router 和网络请求模块 vue-resource，输入：cnpm install vue-router vue-resource --save
    启动项目，输入：npm run dev