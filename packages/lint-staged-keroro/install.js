const fs = require('fs');
const path = require('path');
const PackageJson = require('@npmcli/package-json');

const projectDir = process.env.INIT_CWD || process.cwd();


console.log(`[lint-staged] 进入当前项目目录 ${projectDir}`);
process.chdir(projectDir);

const pkgPath = path.join(projectDir, 'package.json');
const isCi = process.env.CI !== undefined;
const hasPkg = fs.existsSync(pkgPath);
const scripts = {
  'lint:common': 'eslint --ext .js,.ts,.jsx,.tsx,.vue,.tsvue,.htm,.html --max-warnings=0',
  lint: 'npm run lint:common -- .',
  'lint:fix': 'npm run lint -- --fix',
  'lint:commit': 'cross-env GIT_HOOK=pre-commit npm run lint:common',
  'stylelint:common': 'stylelint --max-warnings=0',
  stylelint: 'npm run stylelint:common -- "**/*.{css,less,scss,sass,vue,tsvue,htm,html}"',
  'stylelint:fix': 'npm run stylelint -- --fix',
  'stylelint:commit': 'cross-env GIT_HOOK=pre-commit npm run stylelint:common',
  'lint:all': 'npm run lint && npm run stylelint',
  'lint:all:fix': 'npm run lint:fix && npm run stylelint:fix',
};

if (isCi) {
  process.exit(0);
}

async function main() {
  const pkg = new PackageJson(projectDir);
  if (hasPkg) {
    try {
      await pkg.load();
    } catch (e) {
      console.log('[lint-staged] 无法解析项目 `package.json` 文件, 请确认文件是否正确');
      process.exit(1);
    }
  }

  console.log('[lint-staged] 准备修改当前项目 `package.json` 文件，增加 scripts 脚本');
  pkg.update({
    scripts: {
      ...pkg.content.scripts,
      ...scripts,
    },
  });

  try {
    await pkg.save();
  } catch (error) {
    console.error(`[lint-staged] 无法写入项目 \`package.json\` 文件，可能是用户无该文件写入权限！\n请手动写入以下信息至项目 \`package.json\` 文件:\n${JSON.stringify(scripts, null, 2)}`);
  }
}

main();
