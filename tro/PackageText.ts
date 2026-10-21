import packageConfig from './PackageConfig';

/** Expand stable plain-text tokens in distributed documentation. */
export default function formatPackageText(template: string): string {
  const result = template
    .replaceAll('{{PACKAGE_NAME}}', packageConfig.name)
    .replaceAll('{{PACKAGE_VERSION}}', packageConfig.version)
    .replaceAll('{{UPSTREAM_VERSION}}', packageConfig.upstreamVersion)
    .replaceAll('{{REPOSITORY}}', packageConfig.repository);
  if (/\{\{[A-Z_]+\}\}/.test(result)) {
    throw new Error(
      'Tro package documentation contains an unresolved token. Update PackageText and its template sources before release.',
    );
  }
  return result;
}
