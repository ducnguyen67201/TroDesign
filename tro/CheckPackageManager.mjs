/** Preserve upstream's pnpm-only installation without invoking npx from a lifecycle hook. */
const userAgent = process.env.npm_config_user_agent ?? '';

if (!userAgent.startsWith('pnpm/')) {
  throw new Error('Tro Design: install this workspace with pnpm. See TroFork.md for setup.');
}
