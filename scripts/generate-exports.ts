import { readdirSync, writeFileSync } from 'fs';
import { join, basename } from 'path';
// validators
const validatorFolders = ['backbones', 'base', 'resources', 'datatypes'];

for (const folder of validatorFolders) {
  const files = readdirSync(join(__dirname, `../src/core/r4/validators/${folder}`));
  const exports = files
    .filter((file) => file !== 'index.ts')
    .map((file) => {
      const moduleName = basename(file, '.ts');

      const camelCaseName = moduleName.replace(/[-.](.)/g, (_, g1) => g1.toUpperCase());
      const PascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
      console.log('Generated: ', PascalCaseName);

      return `export { ${PascalCaseName} } from './${moduleName}';`;
    })
    .join('\n');

  const indexPath = join(__dirname, `../src/core/r4/validators/${folder}/index.ts`);
  writeFileSync(indexPath, exports);
}

/*

// builders
const builderFolders = ['backbones', 'base', 'resources', 'datatypes'];

for (const folder of builderFolders) {
  const files = readdirSync(join(__dirname, `../src/r4/builders/${folder}`));
  const exports = files
    .filter((file) => file !== 'index.ts')
    .map((file) => {
      const moduleName = basename(file, '.ts');
      const camelCaseName = moduleName.replace(/[-.](.)/g, (_, g1) => g1.toUpperCase());
      const PascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);

      return `export { ${PascalCaseName} } from './${moduleName}';`;
    })
    .join('\n');

  const indexPath = join(__dirname, `../src/r4/builders/${folder}/index.ts`);
  writeFileSync(indexPath, exports);
}

// interfaces
const interfaceBuilderFolders = ['backbones', 'base', 'resources', 'datatypes', 'utils'];

for (const folder of interfaceBuilderFolders) {
  const files = readdirSync(join(__dirname, `../src/r4/interfaces/builders/${folder}`));
  const exports = files
    .filter((file) => file !== 'index.ts')
    .map((file) => {
      const moduleName = basename(file, '.ts');

      const name = moduleName.replace('.interface', '');

      const camelCaseName = name.replace(/[-.](.)/g, (_, g1) => g1.toUpperCase());
      const PascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);

      return `export { I${PascalCaseName} } from './${moduleName}';`;
    })
    .join('\n');

  const indexPath = join(__dirname, `../src/r4/interfaces/builders/${folder}/index.ts`);
  writeFileSync(indexPath, exports);
}

// models
const modelFolders = ['backbones', 'resources', 'datatypes'];

for (const folder of modelFolders) {
  const files = readdirSync(join(__dirname, `../src/r4/models/${folder}`));
  const exports = files
    .filter((file) => file !== 'index.ts')
    .map((file) => {
      const moduleName = basename(file, '.ts');

      const name = moduleName.replace('.model', '');

      const camelCaseName = name.replace(/[-.](.)/g, (_, g1) => g1.toUpperCase());
      const PascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);

      return `export { ${PascalCaseName} } from './${moduleName}';`;
    })
    .join('\n');

  const indexPath = join(__dirname, `../src/r4/models/${folder}/index.ts`);
  writeFileSync(indexPath, exports);
}

// types
const files = readdirSync(join(__dirname, `../src/r4/types`));
const _exports = files
  .filter((file) => file !== 'index.ts')
  .map((file) => {
    const moduleName = basename(file, '.ts');

    const camelCaseName = moduleName.replace(/[-.](.)/g, (_, g1) => g1.toUpperCase());
    const PascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);

    return `export { ${PascalCaseName} } from './${moduleName}';`;
  })
  .join('\n');

const indexPath = join(__dirname, `../src/r4/types/index.ts`);
writeFileSync(indexPath, _exports);
*/
