# 适用于Vue的代码规范
## 依赖
* eslint : 代码规范
* prettier : 代码格式化
* husky : 用于在git hook 时执行校验
## Eslint规则依赖
* vue-eslint-parser(^9.1.1) : 用于解析.vue文件成 AST
* eslint-plugin-vue(^9.10.0) : vue相关的规则
* eslint-plugin-chzky(0.0.2) : 自定义规则
* @typescript-eslint/parser(^5.57.0) : 用于解析SFC文件中的 script内容成 AST
* @typescript-eslint/eslint-plugin(^5.57.0) : typescript相关的规则  
* eslint-plugin-check-file(^2.6.2) : 文件/文件夹命名规则
* husky : 用于在git commit时执行校验
* validate-commit-msg : 用于校验git commit message

`pnpm install eslint vue-eslint-parser@9.1 eslint-plugin-vue@9.10 eslint-plugin-chzky @typescript-eslint/parser@5.57 @typescript-eslint/eslint-plugin@5.57 eslint-plugin-check-file@2.6.2  husky validate-commit-msg -D `


