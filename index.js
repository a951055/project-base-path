const fs = require("fs");
module.exports = {
  /** 项目根目录 */
  get basePath() {
    const FILENAME = "package.json";
    return this.find(FILENAME).replace("package.json", "");
  },
  get packageJsonPath() {
    const FILENAME = "package.json";
    return this.find(FILENAME);
  },
  /**
   * 向上遍历包含指定文件名的路径
   *
   * @description 包含这个文件的最近路径,直到最上层目录.
   * @param {*} fileName
   */
  find(fileName) {
    let path = process.cwd();
    let ergodic = () => {
      if (fs.readdirSync(path).includes(fileName)) {
        return `${path}\\${fileName}`;
      } else {
        if (/\/|\\/.test(path)) {
          path = path
            .split("\\")
            .splice(0, path.split("\\").length - 1)
            .join("\\");
          return ergodic();
        } else {
          return null;
        }
      }
    };
    return ergodic();
  }
};
