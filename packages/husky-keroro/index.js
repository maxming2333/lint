const path = require('path');
const fs = require('fs-extra');
const klawSync = require('klaw-sync');

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

function install() {
  console.log('[husky] 执行安装操作');

  try {
    // 安装 husky
    require('husky').install();
    // 复制当前配置到项目中
    fs.copySync(huskySrcPath, huskyPath, { overwrite: true });
    return true;
  } catch (error) {
    console.error('[husky] 无法安装，可能是用户无操作权限！');
  }
  return false;
}

function env() {
  console.log(`[husky] 缓存当前环境变量至 ${huskyEnvPath}`);

  try {
    fs.writeFileSync(huskyEnvPath, `#!/usr/bin/env sh\n\nexport PATH="$PATH:${envPath}"\n`);
  } catch (error) {
    console.error('[husky] 无法缓存 husky 环境变量至文件，可能是用户无该文件写入权限！');
  }
}

function chmod() {
  console.log('[husky] 修改文件权限，变更为可执行文件');

  try {
    // 获取目录下所有文件
    const files = klawSync(huskyPath, {
      nodir: true,
      filter(item) {
        return !item.path.includes('.gitignore');
      },
    });

    // 给文件加执行权限
    files.forEach((item) => {
      fs.chmodSync(item.path, 0o755);
    });
  } catch (error) {
    console.error('[husky] 无法修改 husky hook 可执行权限，可能是用户无该文件操作权限！');
  }
}


if (!isGit || isCi) {
  console.log('[husky] 当前项目为非 Git 项目');
} else {
// 执行安装
  const isInstall = install();
  if (isInstall) {
    env();
    chmod();
  }
}
