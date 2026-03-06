# Vue Admin Lite

一个基于 shadcn-vue、Vue3 和 Vite 的轻量级后台管理系统模板。

## ✨ 特性

- ⚡️ **Vue 3 + Vite 7** - 快速的现代化开发体验
- 🎨 **shadcn-vue + Tailwind CSS** - 完全可定制的 UI 组件
- 🔐 **路由权限守卫** - 基于路由的身份验证
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🌙 **深色模式** - 内置主题切换
- 📦 **最小依赖** - 保持轻量

## 🛠️ 技术栈

- Vue 3.5 + TypeScript
- Vite 7
- Pinia（状态管理）
- Vue Router 5（路由）
- shadcn-vue（UI 组件）
- Tailwind CSS 4（样式）

## 📦 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 📁 项目结构

```
src/
├── layouts/          # 布局组件
│   ├── default.vue   # 默认布局（侧边栏+内容区）
│   └── blank.vue     # 空白布局（登录页等）
├── pages/            # 页面组件（自动路由）
│   ├── auth/         # 认证相关页面
│   ├── dashboard/    # 仪表盘
│   ├── settings/     # 设置页面
│   └── errors/       # 错误页面
├── components/       # UI 组件
│   ├── ui/           # shadcn-vue 组件
│   └── app-sidebar/ # 侧边栏组件
├── stores/           # Pinia 状态管理
│   ├── auth.ts       # 认证状态
│   └── theme.ts      # 主题状态
├── router/           # 路由配置
│   ├── index.ts      # 路由入口
│   └── guard/        # 路由守卫
└── utils/            # 工具函数
```

## 🎯 核心功能

### 认证系统
- 登录/注册页面
- 路由权限守卫
- 登录状态持久化

### 布局系统
- 响应式侧边栏
- 顶部导航栏
- 面包屑导航

### 主题系统
- 亮色/暗色模式切换
- 自定义主题颜色
- 圆角大小调整

## 📝 开发指南

### 添加新页面

在 `src/pages/` 目录下创建 `.vue` 文件，路由会自动生成。

```vue
<!-- src/pages/example.vue -->
<template>
  <div>新页面</div>
</template>
```

访问路径：`/example`

### 添加权限保护

在页面中添加 `meta.auth` 标记：

```vue
<route lang="yaml">
meta:
  auth: true
</route>
```

### 自定义侧边栏菜单

编辑 `src/components/app-sidebar/data/sidebar-data.ts`

## 📄 许可证

MIT

## 🙏 致谢

基于 [shadcn-vue-admin](https://github.com/Whbbit1999/shadcn-vue-admin) 精简而来
