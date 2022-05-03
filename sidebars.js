/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    'Home',
    {
      type: 'category',
      label: 'iOS',
      items: [
        {
          type: 'category',
          label: '源码分析',
          items: [
            'iOS/源码分析/TaggerPointer',
          ],
        },
        {
          type: 'category',
          label: '碎片知识整理',
          items: [
            'iOS/碎片知识整理/AVPlayer截取视频流的当前帧',
          ],
        },
        {
          type: 'category',
          label: '工具',
          items: [
            'iOS/工具/fastlane',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '计算机基础知识',
      items: [
        '计算机基础知识/位运算按位取反',
        '计算机基础知识/符号的意义',
      ],
    },
    {
      type: 'category',
      label: '逆向与安全',
      items: [
        '逆向与安全/签名',
        '逆向与安全/注入闪退相关',
        {
          type: 'category',
          label: 'ARM 汇编基础',
          items: [
            '逆向与安全/ARM/ARM汇编总览',
            '逆向与安全/ARM/寄存器',
            '逆向与安全/ARM/指令集',
            '逆向与安全/ARM/栈及传参规则',
            '逆向与安全/ARM/具体指令使用细节',
            '逆向与安全/ARM/if_switch_循环',
            
          ],
        },
        {
          type: 'category',
          label: 'Frida 使用',
          items: [
            '逆向与安全/Frida/在iOS上分析应用',
            '逆向与安全/Frida/Hook大法，拦截器的使用',
            '逆向与安全/Frida/如何拦截sub_xxxx这种函数',
            '逆向与安全/Frida/API查找器和拦截器的组合使用',
            '逆向与安全/Frida/远程过程调用RPC的使用方法',
            '逆向与安全/Frida/非越狱环境下使用Frida',
            '逆向与安全/Frida/总结',
            
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Web',
      items: [
        {
          type: 'category',
          label: 'HTML&CSS',
          items: [
            'Web/学习笔记/HTML&CSS/html基础知识',
            'Web/学习笔记/HTML&CSS/CSS基础知识',
            'Web/学习笔记/HTML&CSS/项目样式补充',
            'Web/学习笔记/HTML&CSS/2D&3D转换与动画',
            'Web/学习笔记/HTML&CSS/空间转换-动画',
            'Web/学习笔记/HTML&CSS/移动端布局',
          ],
        },
        {
          type: 'category',
          label: 'JavaScript',
          items: [
            'Web/学习笔记/JavaScript/JavaScript基础',
            'Web/学习笔记/JavaScript/JavaScript基础-DOM和BOM',
            'Web/学习笔记/JavaScript/javascript高级使用',
            'Web/学习笔记/JavaScript/JavaScript高级-jQuery',
          ],
        },
        {
          type: 'category',
          label: '前端与后台交互',
          items: [
            'Web/学习笔记/前端与后台交互/ajax+http+跨域+JSONP+mysql',
            'Web/学习笔记/前端与后台交互/node.js',
          ],
        },
        {
          type: 'category',
          label: 'Vue',
          items: [
            'Web/学习笔记/Vue/vue-基础',
            'Web/学习笔记/Vue/vue组件基础+进阶',
            'Web/学习笔记/Vue/vue-进阶-路由',
            'Web/学习笔记/Vue/vuex',
          ],
        },
      ],
    },
  ],
};


