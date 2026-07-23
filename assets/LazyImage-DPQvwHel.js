import{j as e}from"./index-DSMwFxqu.js";import{b as r}from"./vendor-CN7vaCvy.js";const R=[{id:"1",title:"React 18 并发特性深入解析",summary:"深入理解 React 18 的 Concurrent Mode、useTransition、useDeferredValue 等并发特性，以及它们如何改善用户体验。",content:`## 什么是并发渲染？

React 18 引入了并发渲染机制，这是 React 渲染模型的一次重大升级。并发模式允许 React 在渲染过程中暂停、中断或恢复工作，从而保持应用的响应性。

## useTransition

\`useTransition\` 是 React 18 中最重要的新 Hook 之一。它允许你将某些状态更新标记为"过渡"，从而告诉 React 这些更新可以被中断。

\`\`\`tsx
const [isPending, startTransition] = useTransition();

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  startTransition(() => {
    setSearchQuery(e.target.value);
  });
}
\`\`\`

## useDeferredValue

\`useDeferredValue\` 让你可以延迟更新 UI 的某个部分。

\`\`\`tsx
const deferredQuery = useDeferredValue(query);
\`\`\`

当 query 变化时，deferredQuery 会滞后更新，React 会优先处理更紧急的更新。

## 自动批处理

React 18 默认启用了自动批处理，即使在 setTimeout、Promise 回调中也会自动合并状态更新，减少不必要的重渲染。

## 总结

并发特性为 React 应用带来了更流畅的用户体验，但需要理解其工作原理才能正确使用。`,category:"前端",tags:["React","TypeScript","性能优化"],coverImage:"https://picsum.photos/seed/react18/800/400",author:"张三",publishDate:"2025-10-15",readingTime:8},{id:"2",title:"TypeScript 高级类型体操指南",summary:"从条件类型到模板字面量类型，全面解析 TypeScript 类型系统的高级用法与实际应用场景。",content:`## TypeScript 类型系统

TypeScript 的类型系统是图灵完备的，这意味着你可以用类型来表达任意复杂的逻辑。

## 条件类型

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<42>;      // false
\`\`\`

## 模板字面量类型

TypeScript 4.1 引入了模板字面量类型，让字符串类型的操作更加灵活。

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<'click'>; // 'onClick'
\`\`\`

## infer 关键字

\`infer\` 让你在条件类型中声明一个类型变量，用于推断和提取类型。

\`\`\`typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
\`\`\`

## 映射类型与 as 子句

\`\`\`typescript
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};
\`\`\`

## 实践建议

高级类型应该服务于代码的可维护性和类型安全，而不是为了炫技。`,category:"前端",tags:["TypeScript","前端基础"],coverImage:"https://picsum.photos/seed/typescript/800/400",author:"张三",publishDate:"2025-10-10",readingTime:10},{id:"3",title:"Node.js 微服务架构实践",summary:"基于 Node.js + Express + Docker 搭建微服务体系，涵盖服务发现、负载均衡、消息队列等核心模块。",content:`## 微服务架构概述

微服务架构将单体应用拆分为多个独立部署的小型服务，每个服务围绕特定业务能力构建。

## 技术选型

- **运行环境**: Node.js 20 LTS
- **框架**: Express.js + TypeScript
- **消息队列**: RabbitMQ
- **服务发现**: Consul
- **容器化**: Docker + Docker Compose

## 服务拆分原则

1. **单一职责**: 每个服务只负责一项业务功能
2. **数据独立性**: 每个服务拥有自己的数据库
3. **接口契约**: 服务间通过 API 或消息队列通信

## 消息队列实践

\`\`\`typescript
// 发布消息
await channel.publish(
  'order.exchange',
  'order.created',
  Buffer.from(JSON.stringify(orderData))
);

// 消费消息
channel.consume('order.queue', async (msg) => {
  const order = JSON.parse(msg.content.toString());
  await processOrder(order);
  channel.ack(msg);
});
\`\`\`

## 容器化部署

使用 Docker Compose 编排多服务：

\`\`\`yaml
services:
  api-gateway:
    build: ./gateway
    ports:
      - "3000:3000"
  user-service:
    build: ./services/user
  order-service:
    build: ./services/order
\`\`\`

## 总结

微服务架构提升了系统的可扩展性和可维护性，但也带来了分布式系统的复杂性。`,category:"后端",tags:["Node.js","微服务","Docker"],coverImage:"https://picsum.photos/seed/microservice/800/400",author:"李四",publishDate:"2025-10-08",readingTime:12},{id:"4",title:"CSS Container Queries 完全指南",summary:"告别 Media Query 的局限，用 Container Queries 实现真正基于组件的响应式设计。",content:`## 引言

传统的 Media Query 基于视口宽度做响应式，但组件往往需要根据自己的容器大小来调整样式。CSS Container Queries 解决了这个问题。

## 基本用法

\`\`\`css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
\`\`\`

## container-type

- \`inline-size\`: 基于内联方向（通常是宽度）的容器查询
- \`size\`: 基于宽度和高度的容器查询
- \`normal\`: 不建立查询容器

## 实践案例

卡片组件在不同容器宽度下自动切换布局：

\`\`\`css
.product-card {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .product-detail {
    flex-direction: row;
  }
}

@container (min-width: 500px) {
  .product-detail {
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## 与 Media Query 对比

| 特性 | Media Query | Container Query |
|------|-------------|-----------------|
| 查询目标 | 视口大小 | 容器大小 |
| 组件复用 | 受限 | 天然支持 |
| 精确度 | 页面级 | 组件级 |

## 浏览器兼容性

2025 年所有主流浏览器都已支持 Container Queries，可以放心在生产环境使用。`,category:"前端",tags:["CSS","响应式"],coverImage:"https://picsum.photos/seed/css/800/400",author:"张三",publishDate:"2025-09-28",readingTime:7},{id:"5",title:"Git 工作流最佳实践",summary:"团队协作中的 Git 分支策略、提交规范与 Code Review 流程，提升开发效率与代码质量。",content:`## Git 分支策略

常用的分支策略包括 Git Flow、GitHub Flow 和 GitLab Flow。对于大多数团队，GitHub Flow 足够简单有效。

## 分支命名规范

\`\`\`
feature/user-login    # 新功能
fix/memory-leak       # Bug 修复
refactor/api-layer    # 重构
docs/api-reference    # 文档
\`\`\`

## 提交信息规范

遵循 Conventional Commits 规范：

\`\`\`
feat: 添加用户登录功能
fix: 修复内存泄漏问题
refactor: 重构 API 层代码
docs: 更新 API 文档
style: 调整代码格式
\`\`\`

## Code Review 流程

1. 创建 Feature Branch
2. 提交 Pull Request
3. CI 自动检查（Lint + Test + Build）
4. 至少一人 Code Review
5. Squash Merge 到主分支

## 常用技巧

- **交互式 Rebase**: 整理提交历史
- **Cherry-pick**: 选择性地合并提交
- **Bisect**: 二分定位引入 Bug 的提交
- **Stash**: 暂存未完成的修改`,category:"工具",tags:["Git","DevOps","工具链"],coverImage:"https://picsum.photos/seed/git/800/400",author:"王五",publishDate:"2025-09-20",readingTime:6},{id:"6",title:"Webpack 到 Vite：构建工具迁移实战",summary:"从 Webpack 迁移到 Vite 的完整过程，包含配置对比、插件替换与性能对比数据。",content:`## 为什么选择 Vite

Vite 利用浏览器原生 ES Module 支持，开发时无需打包，实现了极速冷启动和热更新。

## 迁移步骤

### 1. 安装依赖

\`\`\`bash
npm install -D vite @vitejs/plugin-react
\`\`\`

### 2. 配置文件对比

Webpack 配置：
\`\`\`javascript
module.exports = {
  entry: './src/index.js',
  output: { path: 'dist' },
  module: { rules: [/* ... */] },
  plugins: [/* ... */],
};
\`\`\`

Vite 配置：
\`\`\`typescript
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' },
});
\`\`\`

### 3. 环境变量

Webpack 使用 \`process.env\`，Vite 使用 \`import.meta.env\`。

## 性能对比

| 指标 | Webpack 5 | Vite 5 |
|------|-----------|--------|
| 冷启动 | 12s | 0.8s |
| HMR | 2s | 50ms |
| 生产构建 | 45s | 28s |

## 注意事项

- CommonJS 模块需要转为 ESM
- \`require.context\` 需要用 \`import.meta.glob\` 替代
- 部分 Webpack 特有 Loader 需要找 Vite 插件替代`,category:"工具",tags:["Vite","Webpack","构建工具","性能优化"],coverImage:"https://picsum.photos/seed/vite/800/400",author:"王五",publishDate:"2025-09-15",readingTime:9},{id:"7",title:"从零搭建个人技术博客",summary:"分享独立开发技术博客的全过程：技术选型、架构设计、部署上线与内容管理。",content:`## 为什么要自己搭建博客

虽然市面上有很多博客平台，但自己搭建博客可以完全掌控内容、样式和功能，同时也是学习技术的绝佳实践机会。

## 技术选型

- **前端**: React 18 + TypeScript + Vite
- **样式**: CSS Modules + CSS 变量
- **路由**: React Router v6
- **部署**: Vercel / Netlify

## 核心功能设计

1. **文章列表**: 支持分页、排序
2. **分类与标签**: 多维度的内容组织
3. **响应式布局**: PC / 平板 / 移动端三端适配
4. **主题切换**: 亮色 / 暗色主题
5. **性能优化**: 路由懒加载、图片懒加载

## 架构设计

\`\`\`
src/
├── components/   # 通用组件
├── pages/        # 页面组件
├── hooks/        # 自定义 Hooks
├── utils/        # 工具函数
├── types/        # 类型定义
└── router/       # 路由配置
\`\`\`

## 部署流程

1. 代码推送到 GitHub
2. Vercel 自动检测仓库并触发构建
3. 构建完成后自动部署到 CDN
4. 绑定自定义域名

## 总结

搭建个人博客不只是为了展示内容，更是一个完整的软件工程实践过程。`,category:"随笔",tags:["博客","React","全栈"],coverImage:"https://picsum.photos/seed/blog/800/400",author:"张三",publishDate:"2025-09-08",readingTime:5},{id:"8",title:"RESTful API 设计最佳实践",summary:"从 URL 设计到错误处理，全面解析 RESTful API 的设计原则与常见模式。",content:`## REST 架构风格

REST（Representational State Transfer）是 Roy Fielding 在 2000 年提出的一种软件架构风格。

## URL 设计原则

| 操作 | HTTP 方法 | URL 示例 |
|------|-----------|----------|
| 获取列表 | GET | /api/articles |
| 获取详情 | GET | /api/articles/:id |
| 创建 | POST | /api/articles |
| 更新 | PUT | /api/articles/:id |
| 删除 | DELETE | /api/articles/:id |

## 状态码规范

- **200**: 成功
- **201**: 创建成功
- **400**: 请求参数错误
- **401**: 未认证
- **403**: 无权限
- **404**: 资源不存在
- **500**: 服务器错误

## 统一响应格式

\`\`\`json
{
  "code": 0,
  "message": "success",
  "data": { /* ... */ }
}
\`\`\`

## 分页设计

\`\`\`
GET /api/articles?page=1&size=20&sort=created_at:desc
\`\`\`

## 版本管理

推荐使用 URL 路径版本，最为直观：\`/api/v1/articles\``,category:"后端",tags:["API","RESTful","架构设计"],coverImage:"https://picsum.photos/seed/api/800/400",author:"李四",publishDate:"2025-09-01",readingTime:8},{id:"9",title:"前端性能优化全景指南",summary:"从网络层到渲染层，系统梳理前端性能优化的各种策略与工具，附 Lighthouse 实战调优案例。",content:`## 性能优化金字塔

性能优化是一个系统工程，从底层到上层依次为：网络优化 → 资源优化 → 渲染优化 → 运行时优化。

## 网络优化

- **HTTP/2**: 多路复用，减少连接开销
- **CDN**: 内容分发，降低延迟
- **DNS 预解析**: 提前解析第三方域名
- **资源预加载**: preload / prefetch / preconnect

## 资源优化

- **代码分割**: 路由懒加载、动态 import
- **Tree Shaking**: 移除未使用代码
- **图片优化**: WebP/AVIF 格式、懒加载、响应式图片
- **字体优化**: font-display: swap、子集化

## 渲染优化

- **避免强制同步布局**: 批量读取 DOM
- **使用 CSS Containment**: contain 属性隔离渲染
- **虚拟列表**: 仅渲染可见区域

## Lighthouse 调优案例

| 指标 | 优化前 | 优化后 | 提升 |
|------|--------|--------|------|
| FCP | 2.1s | 1.2s | 43% |
| LCP | 3.2s | 2.1s | 34% |
| TBT | 450ms | 120ms | 73% |
| CLS | 0.15 | 0.02 | 87% |

## 关键策略

1. 路由懒加载拆分首屏 JS
2. 图片懒加载减少初始请求
3. CSS 变量替代运行时主题计算
4. 合理使用 useMemo / useCallback`,category:"前端",tags:["性能优化","Lighthouse","React"],coverImage:"https://picsum.photos/seed/perf/800/400",author:"张三",publishDate:"2025-08-25",readingTime:11},{id:"10",title:"Docker 多阶段构建优化镜像体积",summary:"通过多阶段构建、合理选择基础镜像和 .dockerignore 等手段，将镜像体积从 1.2GB 缩减至 120MB。",content:`## 问题背景

一个典型的 Node.js 应用镜像如果使用 node:20 基础镜像，体积会达到 1GB 以上，严重影响部署速度。

## 多阶段构建

\`\`\`dockerfile
# 第一阶段：构建
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# 第二阶段：运行
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE 3000
CMD ["node", "dist/index.js"]
\`\`\`

## 优化技巧

1. **选择 Alpine 镜像**: node:20-alpine 仅 ~50MB
2. **使用 .dockerignore**: 排除 node_modules、测试文件
3. **合并 RUN 指令**: 减少镜像层数
4. **清理缓存**: apt-get clean、npm cache clean

## 优化效果

| 阶段 | 镜像体积 |
|------|----------|
| 优化前 | 1.2 GB |
| 使用 Alpine | 350 MB |
| 多阶段构建 | 180 MB |
| 进一步优化 | 120 MB |

## 总结

多阶段构建是 Docker 镜像优化的核心手段，配合 Alpine 基础镜像和合理的层设计，可以显著减小镜像体积。`,category:"后端",tags:["Docker","DevOps","性能优化"],coverImage:"https://picsum.photos/seed/docker/800/400",author:"李四",publishDate:"2025-08-20",readingTime:7}],g="_wrapper_1ncdx_1",h="_placeholder_1ncdx_7",y="_img_1ncdx_29",T="_loaded_1ncdx_40",t={wrapper:g,placeholder:h,img:y,loaded:T};function b({src:n,alt:c,className:p=""}){const a=r.useRef(null),[d,l]=r.useState(!1),[o,u]=r.useState(!1);return r.useEffect(()=>{const s=a.current;if(!s)return;const i=new IntersectionObserver(([m])=>{m.isIntersecting&&(l(!0),i.unobserve(s))},{rootMargin:"200px",threshold:.01});return i.observe(s),()=>i.disconnect()},[]),e.jsx("div",{ref:a,className:`${t.wrapper} ${p}`,children:d?e.jsxs(e.Fragment,{children:[!o&&e.jsx("div",{className:t.placeholder}),e.jsx("img",{src:n,alt:c,className:`${t.img} ${o?t.loaded:""}`,onLoad:()=>u(!0),loading:"lazy"})]}):e.jsx("div",{className:t.placeholder})})}export{b as L,R as a};
