import { resolve } from 'node:path';
import { stageReleasePackage } from './PackageRelease';

stageReleasePackage(resolve(process.cwd()))
  .then(() => {
    process.stdout.write(
      'Tro release package staged in .tro-package. No registry publication performed.\n',
    );
  })
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : 'Tro release package staging failed.');
    process.exitCode = 1;
  });
