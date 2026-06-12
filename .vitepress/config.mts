import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'GEO培训指南',
  description: 'GEO（AI 搜索推荐 / 生成式引擎优化）的培训教程、视频、SOP 与宣传物料',
  lang: 'zh-CN',
  base: '/geo/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '用户操作文档', link: '/guide/user-manual' },
      { text: '视频教程', link: '/guide/video-tutorial' },
      { text: 'SOP 文档', link: '/guide/sop' },
      { text: '宣传物料', link: '/guide/promotional-materials' },
      { text: '公司资质', link: '/guide/company-qualifications' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'GEO培训指南',
          items: [
            { text: '📘 用户操作文档', link: '/guide/user-manual' },
            { text: '🎬 视频教程', link: '/guide/video-tutorial' },
            { text: '📑 SOP 文档', link: '/guide/sop' },
            { text: '📦 宣传物料', link: '/guide/promotional-materials' },
            { text: '🏢 公司资质与案例', link: '/guide/company-qualifications' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sekirodong/geo' },
    ],

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdatedText: '最后更新',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
