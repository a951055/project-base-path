# project-base-path

> `description` 项目内任意子目录获取项目basePath和指定文件绝对路径

---
### usage

```
const { basePath, packageJsonPath, find } = require("project-base-path");
console.log("测试方法:  cmd -> cd .demo\\a\\b\\c -> node .\\example ");
// test - 1 basePath
console.log(`basePath [ ${basePath} ]`);
// test - 1 package.json
console.log(`basePath [ ${packageJsonPath} ]`);
// test - 2 find file path.
console.log(`检索 index.js 路径结果 [ ${find("index.js")} ]`);

```
---
### test
> `yarn test`