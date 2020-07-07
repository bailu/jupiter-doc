const sidebarJuno = require('./sidebar/juno');
const sidebarJupiter = require('./sidebar/jupiter');

module.exports = {
    title: 'Jupiter',
    description: 'Governance-oriented Microservice Framework',
    themeConfig: {
        nav: [
            {
                text: '框架',
                link: '/jupiter/'
            },
            {
                text: '管理平台',
                link: '/juno/'
            },
            {
                text: '加入我们',
                link: '/join/'
            },
            {
                text: '了解更多',
                items: [
                    {text: '微服务管理平台', link: 'https://github.com/douyu/juno'},
                ]
            },

        ],
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'douyu/jupiter-website',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在github.com上编辑此页',
        sidebar: {
            ...sidebarJupiter,
            ...sidebarJuno,
        },
        showAvatarList: true,
        lastUpdated: '上次更新',
        showBackToTop: true
    },
}
