const fs = require('fs');
const path = require('path');

module.exports = {
  getProjectDirectory() {
    return process.env.INIT_CWD || process.cwd();
  },
  getProjectFile(filename) {
    const dir = this.getProjectDirectory();
    const filePath = path.join(dir, filename);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
    return '';
  },
};
