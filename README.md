# 📚 FDU CS 资料共享站

复旦大学计算机科学技术学院考试资料分享平台

## ✨ 特性

- 📝 历年期中/期末试卷
- 📚 课程复习资料
- 💬 Giscus 评论系统
- 🤝 支持 PR 贡献

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📁 项目结构

```
FDU-Sharing/
├── pages/               # 页面
│   ├── index.mdx       # 首页
│   ├── guide.mdx       # 使用指南
│   └── courses/        # 课程资料页面
├── public/resources/   # 📄 资料文件存放处
├── components/         # 自定义组件
└── theme.config.tsx    # 主题配置
```

## 🤝 如何贡献

1. Fork 本仓库
2. 将资料放入 `public/resources/课程名/`
3. 编辑对应的 `pages/courses/课程名.mdx`
4. 提交 Pull Request

详见 [贡献指南](.github/CONTRIBUTING.md)

## ⚠️ 免责声明

- 本站资料仅供学习交流
- 版权归原作者所有
- 如有侵权请联系删除

## 📄 License

MIT

