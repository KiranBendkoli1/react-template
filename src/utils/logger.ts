/* eslint-disable no-console */
const isDev = import.meta.env.DEV;

export const logger = {
  log: (...args: unknown[]) => isDev && console.log('[LOG]:', ...args),
  warn: (...args: unknown[]) => isDev && console.warn('[WARN]:', ...args),
  error: (...args: unknown[]) => console.error('[ERROR]:', ...args), // always log errors
};
