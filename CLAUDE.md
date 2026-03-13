# Vue Admin Lite 项目文档

## 项目概述

Vue Admin Lite 是一个现代化的轻量级管理后台系统模板，基于 Vue 3 + TypeScript + Vite 构建。

**项目特点**
- 轻量级设计，最小化依赖
- 完整的 TypeScript 类型支持
- 基于 shadcn-vue 的可定制组件库
- 文件系统自动路由
- 国际化支持（中英文）

## 核心技术栈

**框架与构建**
- Vue 3.5.29 (Composition API)
- Vite 7.3.1
- TypeScript 5.9.3

**UI 与样式**
- shadcn-vue (485个组件)
- Tailwind CSS 4.2.1
- Lucide Vue Next (图标)

**状态管理**
- Pinia 3.0.4 (本地状态)
- TanStack Vue Query 5.92.9 (服务端状态)

**表单与验证**
- Vee-Validate 4.15.1
- Zod 4.3.6

**路由与国际化**
- Vue Router 5.0.3 (文件系统路由)
- Vue I18n 11.2.8

**HTTP 客户端**
- Axios 1.13.6

## 目录结构

```
src/
├── assets/              # 静态资源（样式、图标）
├── components/          # 组件库
│   ├── ui/             # shadcn-vue 基础组件
│   ├── app-sidebar/    # 应用侧边栏
│   ├── global-layout/  # 全局布局组件
│   ├── data-table/     # 数据表格组件
│   └── ...
├── pages/              # 页面组件（自动路由）
│   ├── dashboard/      # 仪表盘
│   ├── tasks/          # 任务管理
│   ├── users/          # 用户管理
│   ├── billing/        # 账单管理
│   ├── settings/       # 设置中心
│   └── auth/           # 认证页面
├── composables/        # 组合式函数
├── stores/             # Pinia 状态管理
├── services/           # API 服务层
├── router/             # 路由配置
├── plugins/            # 插件配置
├── layouts/            # 布局组件
├── lib/                # 工具库
├── constants/          # 常量定义
└── types/              # TypeScript 类型定义
```

## 核心功能模块

### 1. 认证系统
- 登录/注册
- 密码找回
- OTP 验证
- 路由守卫 (src/router/guard/auth-guard.ts)

### 2. 仪表盘
- 数据概览
- 图表展示
- 最近销售记录

### 3. 任务管理
- 任务列表（数据表格）
- 任务创建/编辑/删除
- 批量操作
- 筛选和排序

### 4. 用户管理
- 用户列表
- 用户邀请
- 用户信息管理

### 5. 账单管理
- 账单历史
- 计费方案
- 交易记录

### 6. 设置中心
- 账户设置
- 外观设置
- 显示设置
- 通知设置

## 开发指南

### 路由系统
使用 unplugin-vue-router 实现文件系统路由：
- `src/pages/` 下的文件自动生成路由
- `index.vue` 对应路径根目录
- `[param].vue` 表示动态路由参数
- `[...path].vue` 表示通配符路由

### 状态管理
**Pinia Stores** (src/stores/)
- `auth.ts` - 认证状态
- `theme.ts` - 主题配置

**TanStack Query**
- 用于服务端数据获取和缓存
- 示例：src/pages/tasks/index.vue

### API 服务层
位置：`src/services/api/`
- 使用 Axios 实例 (src/composables/use-axios.ts)
- 统一的错误处理
- 请求/响应拦截器

### 表单验证
使用 Vee-Validate + Zod：
```typescript
// 定义验证模式
const schema = z.object({
  name: z.string().min(1, '名称不能为空'),
  email: z.string().email('邮箱格式不正确')
})

// 在组件中使用
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema)
})
```

### 组件使用
shadcn-vue 组件已全部配置，直接导入使用：
```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
</script>
```

### UI/UX 设计协助
后续所有 UI 相关的工作使用 `/ui-ux-pro-max` Skill 进行设计和优化。

**Skill 功能**
- 67 种设计风格（glassmorphism、claymorphism、minimalism、brutalism 等）
- 96 个精选调色板
- 57 个字体配对方案
- 25 个图表类型
- 13 个技术栈支持（React、Vue、Svelte、SwiftUI 等）

**使用场景**
- 设计新页面或组件
- 优化现有 UI 样式
- 选择合适的色彩方案
- 改进用户体验
- 实现响应式设计
- 添加动画和交互效果

**调用方式**
```bash
/ui-ux-pro-max [action] [description]
```

示例：
- `/ui-ux-pro-max design 为仪表盘设计一个现代化的卡片组件`
- `/ui-ux-pro-max improve 优化任务列表的表格样式`
- `/ui-ux-pro-max create 创建一个响应式的导航栏`

### 主题系统
- 支持亮色/暗色模式
- 可自定义主题颜色和圆角
- 配置位置：src/components/custom-theme/

### 国际化
- 语言文件：src/plugins/i18n/en.json, zh.json
- 使用：`const { t } = useI18n()`

## 环境配置

环境变量文件：`.env.example`
```
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=Vue Admin Lite
```

## 开发命令

```bash
# 安装依赖
pnpm install

# 开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 代码检查
pnpm lint
```

## 后端集成指南

### API 配置
1. 在 `.env` 中配置 API 基础路径
2. 在 `src/services/api/` 创建 API 服务文件
3. 使用 `useAxios` composable 发起请求

### 示例 API 服务
```typescript
// src/services/api/users.api.ts
import { useAxios } from '@/composables/use-axios'

export const usersApi = {
  getList: (params: any) => {
    const axios = useAxios()
    return axios.get('/users', { params })
  },

  create: (data: any) => {
    const axios = useAxios()
    return axios.post('/users', data)
  }
}
```

### 在页面中使用
```typescript
import { useQuery } from '@tanstack/vue-query'
import { usersApi } from '@/services/api/users.api'

const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: () => usersApi.getList()
})
```

## 注意事项

1. **类型安全**：所有 API 响应和表单数据都应定义 TypeScript 类型
2. **错误处理**：使用统一的错误处理机制（已在 axios 拦截器中配置）
3. **权限控制**：在路由守卫中实现权限验证
4. **数据验证**：使用 Zod 进行数据验证，确保类型安全
5. **组件复用**：优先使用 shadcn-vue 组件，避免重复造轮子

## 项目状态

当前项目处于初始化状态，包含完整的基础设施和示例页面。所有页面使用模拟数据，需要对接真实后端 API。

## 下一步开发建议

1. 配置真实的后端 API 地址
2. 实现完整的认证流程（JWT Token 管理）
3. 替换模拟数据为真实 API 调用
4. 根据业务需求添加新的功能模块
5. 完善错误处理和用户反馈机制
