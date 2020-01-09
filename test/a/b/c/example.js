const { basePath, packageJsonPath, find } = require("../../../../index");
console.log("测试方法:  cmd -> cd .demo\\a\\b\\c -> node .\\example ");
// test - 1 basePath
console.log(`basePath [ ${basePath} ]`);
// test - 1 package.json
console.log(`basePath [ ${packageJsonPath} ]`);
// test - 2 find file path.
console.log(`检索 index.js 路径结果 [ ${find("index.js")} ]`);
