const path = require('path')    //导入node.js中专门操作路径的模块
const HtmlPlugin = require('html-webpack-plugin')   //导入插件,得到构造函数
const htmlPlugin = new HtmlPlugin({ //创建插件的实例对象
    template:'./src/index.html',
    filename:'./index.html'
})
module.exports = {
    mode: 'development',     //mode 用来指定构建模式,可选值有development 和 production
    entry: path.join(__dirname,'./src/index.js'),   //打包入口文件的路径
    output:{    //打包出口文件的路径
        path:path.join(__dirname,'./dist'), //输出文件的存放路径
        filename:'bundle.js' //输出文件的名称
    },
    plugins:[htmlPlugin],    //挂载实例化对象
    devServer:{
        open:true,
        host:'127.0.0.1',
        port:8079
    }
}
/*mode节点的可选值*/
/*
* development
* 开发环境
* 不会对打包生成的文件进行代码压缩和性能优化
* 打包速度快,适合在开发阶段使用
*/
/*
* production
*生产环境
*会对打包涩会给你成的文件进行代码压缩和性能优化
*打包速度很慢,仅适合在项目发布阶段使用
 */
