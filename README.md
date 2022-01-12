# activity-page

活动项目架子，该项目是为了避免因为几个页面的活动而重复的创建项目，该架子可以是多个活动项目在同一个架子下共存的

## 项目使用

### 活动项目名称要和跟路由一致，config/project.js 文件中要有当前开发的路由名和项目名，否则会出现问题

#### pubilc-utils 公共方法 public-style 公共样式 public-plugins 公共插件 views 活动项目集合文件

#### 当运行其他项目时要将，config/project.js 修改 再运行

## 示例

### demo1

活动 1
projectValue = {
title: '示例 1',
route: 'demo1',
}

### demo2

活动 2
projectValue = {
title: '示例 1',
route: 'demo2',
}
