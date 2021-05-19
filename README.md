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
* React has inner node-sass: yarn add node-sass -D
* SCSS is more functional than SASS, almost same. Sass is strict write way(no {})
    ```
        @import './mixin.scss' 
    ```




## antd
* yarn add antd
* prefix: using add component before current Com ponent
* Using Form
* more focus on Bussiness design, bundle size is large, contain more design
* Grid
    * 24 grid (bootstrap 12 grid )
    * `<Row gutter={16}>` between two grid
    * `<Col span={8}` take 8 / 24
    * used when screen size changed `<Col key={item.id} lg={24} xl={12}>`

## function component
*  const { name, ...rest } = props

## useEffect
* trigger useEffect when second para[] changed
* when first para return a function: unmount
* when there is no second para: always call this hook after render. componentDidUpdate
* when second para is empty array: excute once, work same as componentDidMount

## useState
* setState( previous=> console.log(previous)); // 其中 previous 的值就是上次更新的 state

## CSS
* vertical-align: middle 一行对齐
* margin: 0 auto; 水平居中
*   overflow: hidden: 框外的不显示
    white-space: nowrap; 不换行
    text-overflow: ellipsis
    word-break: break-all; 长词换行显示
* justify: space-between: 放在两端
            space-around: 两边留白
            start 放在开头
            center 中间
* .div1::after{content:'...'} add content after the element

## css interview question: two line long sentences:
* text areacd 
```
    display: -webkit-box;
    overflow: hidden: 框外的不显示
    -webkit-line-clamp:2 显示两行
    -webkit-box-orient:vertical
```
* list with no default:
```
    ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
    }
```
* Position:
```
absolute, fixed, reletive, static, sticky
sticky: 在父辈的scope里面fix。limitation： 有兼容性问题，IE
fixed：全局fix
```

* 9 pictures css
```

```

## compatibility (browser support)：
[can I use](https://caniuse.com/)

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

## table with screen size 
* <Col lg={7} md={24}></Col>

## Destructuring Assignment 解构赋值
*  https://blog.don.red/destructuring-assignment/

## moment API： Deal with Time 
* moment(item.updateAt).fromNow()

## Redux
* npm install redux redux-thunk redux-react-hook -s
* steps:
    1. create root reducer file, exprot it
    2. create store at root index.js 
* npm i redux-devtools-extension -s



## counter
* Promise:
```
    fn = (i) =>{
        return new Promise((resolve, reject)=>{
            setTimeOut(()=>{
                resolve(i)
            }, i * 1000)
        })
    }
```
* async \ await
```
    fn = () =>{
        for( let i = 0; i < 5; i++){
            const res = await fn(i);
            consolo.log(res)
        }
    }
```

## clearInterval: without that, will listen the interval all the time which will waste Memory

## anonymous funtion run immediately 
* used when print 5 second using setTime out method 
```
    for(let i){
        (function anyo(i){consolo.log(i)})(i)
    }
```

## Promise:
* 4 api: Resolve(), Reject(), Race()有一个通过就可以继续, All() 所有通过才可以继续
* 3 state: Pending, Resolved(Fullfiled), Rejected


## Axios 的拦截器


## Import on Demand/Lazy Loading 按需加载/懒加载
* Browser will loading component when use it rather than loading everything.
* save network resource
```
    import React, { lazy, Suspense } from 'react';
    const Login = lazy(() => import('../Pages/Login'))
```
* npm install babel-plugin-import -D  antd的按需加载, config-overrides.js更新，提升性能。

## loading: Suspense wrap component, used when async loading
```
    import React, { lazy, Suspense } from 'react';
    <Suspense fallback='loading...'>Router inside...</Suspense>
```

## Memo
* worked as pure component ??????

## Interview Question: array reduce duplicated element
* [new Set(arr)]
* `arr.reduce((prev, cur)=> prev.include(cur) ? prev : [...prev, cur], [])`

## 控制流量
* nosql
    * seperate write second DB and read main DB: update 读写分离
    * seperate table 分表
    * Nginx & nosql
* 10min传一次

## meta in html
* only show up in `<head>`
* `<meta charset='utf-8'>`
* E.g. name, charset, http-quiv

## Axios:
* reating an instance, You can create a new instance of axios with a custom config.
```
    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    });
```
* interceptors
    * used to deal with duplicated request or response. `instance.interceptors.request.use()`
    * 拦截器是用于统一处理请求或响应的一种工具，结合了 AOP 切面编程的思想。
    * Request Interceptor & Response Interceptor 
    * AOP，切面编程思想。
## interview question:
* keep login status: using Cookie
    * first response, server provide cookie
    * second request need keep cookie.
* Cookie lackness:
    * length limited, cannot save too many informaitons
    * security limited
    * using HTTP Only, improve security

## samesite
* strict, lax, none

## window.location.href = '/home'

## Interview question: Cross-origin 
* Cannot get Cookie, Localstorage, indexDB 
* Cannot get DOM and JS object
* Cannot get AJAX request
* Solutions:
    * CORS(Cross-origin resource sharing)
    * Node add proxy middleware: npm install http-proxy-middleware
    ```
        module.exports = function (app) {
            app.use(
                '/proxy',
                createProxyMiddleware({
                    target: 'http://api/weibo.com',
                    pathRewrite: { '/proxy': '/' },
                    changeOrigin: true
                })
            )
        }
    ```

## Access problem:
* only allowed same domain with different path.
* port different, http/https, domain and it's IP address, Subdomain different，different domain

## OAuth??

## Mobile CSS
* padding : 80%  => '%' percetage will based on width

## antd react-infinite-scroller 
* npm install react-infinite-scroller -S

## Interview question: what is Serverside Rendering:
* The ReactDOMServer object enables you to render components to static markup. Typically, it’s used on a Node server:
The following methods can be used in both the server and browser environments:
renderToString()
renderToStaticMarkup()

## npmjs:
* query-string:
    * queryString.parseUrl(url) -> object

## interview Question: 常用的安全问题：
* XSS (Crose Site Script) 占9成
    * 解决方法： 
        1. 转译： encodeURIComponent(`<script>`), 尤其对用户输入的信息
* CSRF
    * using CSRF token
* SQL 注入


## jsConfig.js
```
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": [
        "src"
    ]
}
```

### Interview Questions:
* 不仅要学技术，还要深入了解自己的产品，了解产品痛点。 因为技术不是独立存在的的，必须要帮助到业务。
* Stateful vs stateless
* a==1 && a==2 && a==3
* most difficut tech thing in project
* 我喜欢写文档，遇到一些问题我都会记录起来。在sams我们有confluence。
* prefetch, preload
* cookie 的作用