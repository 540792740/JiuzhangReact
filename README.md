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
