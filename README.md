# JiuzhangReact

## Package.json:
* Version ^4.2.1 Means keep version 4, for remain version, get latest: maybe 4.3.0, or 4.3.1.
* Version 4.2.1, will absolute get version 4.2.1

* Version ~4.2.1, keep first two version, 4.2 is confirmed, remain is latest. maybe 4.2.5

## Splice
* arr.splice(index, deleteCount, replace Into);
* arr.splice(3, 2, 'a') replace from index = 3 to index = 5, into 'a'

## e.stopPropagation()
* stop pass to child

## Babel
* "babel 是一个代码转译器，比如说你想使用一些最新的语法，就可以通过 babel 安装插件，然后 babel 帮你把新特性代码转换成浏览器可以兼容的格式 "
* npm install babel-plugin-import -D  antd的按需加载, override.js更新，提升性能。

## LocalStorage
* Can only save string, must using JSON.stringify(todo).

* parse string into array
* JSON.parse(localStorage.getItem('todos'))

* localStorage.removeItem('todos')

## CSS preprocessor
* advantages
    * Variable
    * 嵌套
    * mixin 
    * if else
    * 继承 @extend .class
* Methd:
    * eject
    * override cra: using react-app-rewired in LESS(example)
* 按需加载
#### LESS： Using Less loader to eject Less.
* npm install react-app-rewired -D 
    * change package.json react-script to react-app-rewired
* npm install customize-cra -D 
    * add config-overrides.js at root
* npm i css-loader less less-loader@6.0.0 -D

* 使用方式 import style from 'xx.module.less' className={style.menu}

* ./login.module.less: &::before{}, :global{}

* @import '~antd/lib/style/themes/default.less';  
    *   color: @text-color-secondary;
#### SASS：
* SCSS is more functional than SASS, almost same. Sass is strict write way(no {})



## antd
* prefix: using add component before current Com ponent
* Using Form
* more focus on Bussiness design, bundle size is large, contain more design

## function component
*  const { name, ...rest } = props

## useEffect
* return: unmount
* when there is no second para: always call this hook after render.
* when second para is empty array: excute once, work same as componentDidMount

## useState
* setState( previous=> console.log(previous)); // 其中 previous 的值就是上次更新的 state

## CSS
* vertical-align: middle 一行对齐
* margin: 0 auto; 水平居中

## key in react
```
    same key value will improve performance
    <ul>
        <li key=2012>same one</li>
    </ul>
    <ul>
        <li key=2012>same one</li>  
    </ul>
```

* if using index as key, every time need to rerender, which can decrease performance

## setState
* why setState is Async?
    * 保持内部一致性, inner function, state will not change.
    * improve performance

## 写程序的提高：
* donot repeat yourself

## React improve Reuseability 可复用性:
* Mixin: based on OOP design(no longer be uesd)
* HOC ： lack: wapper hell
* Render props
* Hooks

## browser type address, what will happen?
* Browser will find IP address of Domain name
    * based on cache: broweser cache -> OS cache -> Router Cache - DNS Cache -> Root Domain Name C ache
* Build TCP connection
* Browser will send a HTTP request to WEB
    * 200 sucessful
    * 3xx need client resend request
    * 4xx client issue, 404 not found
    * 5xx server issue
* Server side will receive request and close TCP connection, return a 

## http
* http1
    * easy, flexiable
    * 跨平台（服务器和服务器，浏览器和服务器等等）
    * stateless, good for server.
    * 明文传输
    * http1.1 安全性差，因为是明文，而且不需要验证信息
* https
    * add security, public key and private key
    * TCP + TLS
* http2
    * 二进制报文
    * 优先级高的先回复
    * TCP + TLS
* http3
    * UDP
    * Using QUIC

## setting.json
    "editor.formatOnSave": true,


