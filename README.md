# 💅 自用的 prettier 配置

## 📦 安装

```sh
npm i -D @leekoho/prettier-config
```

## 📦 安装 `peerDependencies`

```sh
npm i -D prettier
```

## 🛠️ 使用

如果不需要额外的的设置，可以在`package.json`中设置:

```json
{
  "prettier": "@ikscodes/prettier-config"
}
```

或者你需要自定义配置，可以在`.prettierrc.js`中使用 require:

```js
module.exports = {
  ...require("@leekoho/prettier-config"),
  // ...设置覆盖
};
```
