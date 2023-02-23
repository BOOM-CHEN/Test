//存在兼容性
//使用es6模块化的语法导入jquery
import $ from 'jquery'
//实现隔行变色的效果
$(function (){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor','black')
})