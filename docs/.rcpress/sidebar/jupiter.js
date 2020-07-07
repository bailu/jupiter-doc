module.exports = {
    '/jupiter/': [
        {
            title: '第1章 Jupiter简介',
            collapsable: false, // 可选的, 默认值是 true,
            children: [
                '/jupiter/1.1quickstart',
                '/jupiter/1.2example',
                '/jupiter/1.3feature',
                '/jupiter/1.4contribute',
            ]
        },
        {
            title: '第2章 基础模块',
            collapsable: false, // 可选的, 默认值是 true,
            children: [
                '/jupiter/2.1startup',
                '/jupiter/2.2config',
                '/jupiter/2.3logger',
            ]
        },
        {
            title: '第3章 服务模块',
            collapsable: false, // 可选的, 默认值是 true,
            children: [
                '/jupiter/3.1http',
                '/jupiter/3.2grpc',
                '/jupiter/3.3worker',
            ]
        },
        {
            title: '第4章 调用模块',
            collapsable: false, // 可选的, 默认值是 true,
            children: [
                '/jupiter/4.1clientetcd',
                '/jupiter/4.2clientgrpc',
                '/jupiter/4.3clientgorm',
                '/jupiter/4.4clientredis',
            ]
        },
        {
            title: '第5章 服务治理',
            collapsable: false, // 可选的, 默认值是 true,
            children: [
                '/jupiter/6.4worker',
                '/jupiter/6.5clientetcd',
                '/jupiter/6.6clientgrpc',
                '/jupiter/6.7clientgorm',
                '/jupiter/6.8clientredis',
            ]
        },
        {
            title: '第7章 自动治理',
            collapsable: false, // 可选的, 默认值是 true,
            children: [
                '/jupiter/7.1autologger',
            ]
        }
    ], //这样自动生成对应文章
}