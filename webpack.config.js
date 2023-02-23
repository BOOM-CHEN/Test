const path = require('path')    //����node.js��ר�Ų���·����ģ��
const HtmlPlugin = require('html-webpack-plugin')   //������,�õ����캯��
const htmlPlugin = new HtmlPlugin({ //���������ʵ������
    template:'./src/index.html',
    filename:'./index.html'
})
module.exports = {
    mode: 'development',     //mode ����ָ������ģʽ,��ѡֵ��development �� production
    entry: path.join(__dirname,'./src/index.js'),   //�������ļ���·��
    output:{    //��������ļ���·��
        path:path.join(__dirname,'./dist'), //����ļ��Ĵ��·��
        filename:'bundle.js' //����ļ�������
    },
    plugins:[htmlPlugin],    //����ʵ��������
    devServer:{
        open:true,
        host:'127.0.0.1',
        port:8079
    }
}
/*mode�ڵ�Ŀ�ѡֵ*/
/*
* development
* ��������
* ����Դ�����ɵ��ļ����д���ѹ���������Ż�
* ����ٶȿ�,�ʺ��ڿ����׶�ʹ��
*/
/*
* production
*��������
*��Դ��ɬ�����ɵ��ļ����д���ѹ���������Ż�
*����ٶȺ���,���ʺ�����Ŀ�����׶�ʹ��
 */
