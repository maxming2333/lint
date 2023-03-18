const fs = require('fs-extra');
const path = require('path');

const projectDir = process.env.INIT_CWD || process.cwd();


console.log(`[husky] 进入当前项目目录 ${projectDir}`);
process.chdir(projectDir);

const envPath = process.env.PATH;
const huskyPath = path.join(projectDir, '.husky');
const huskySrcPath = path.join(__dirname, '.husky');
const gitFilePath = path.join(projectDir, '.git', 'config');
const huskyEnvPath = path.join(huskyPath, '_', 'env.sh');
const isCi = process.env.CI !== undefined;
const isGit = fs.existsSync(gitFilePath);

if (!isGit || isCi) {
  console.log('[husky] 当前项目为非 Git 项目');
  process.exit(0);
}

console.log('[husky] 执行安装操作');
// 安装 husky
require('husky').install();
// 复制当前配置到项目中
fs.copySync(huskySrcPath, huskyPath, { overwrite: true });

console.log(`[husky] 缓存当前环境变量至 ${huskyEnvPath}`);

try {
  fs.writeFileSync(huskyEnvPath, `#!/usr/bin/env sh\n\nexport PATH="$PATH:${envPath}"\n`);
} catch (error) {
  console.error('[husky] 无法缓存 husky 环境变量至文件，可能是用户无该文件写入权限！');
}
