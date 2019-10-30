module.exports = {
  title: '502Network - 知识库',
  description: '502Network 知识库，pterodactyl 面板使用手册',
  themeConfig: {
    docsDir: 'docs',
    repo: 'dz-apji/502Network-knowledge-base',
    sidebar: [
      '/',
      '/test'
    ],
    nav: [{
      text: 'Admin',
      link: '/admin/#/',
    }]
  }
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  }
}