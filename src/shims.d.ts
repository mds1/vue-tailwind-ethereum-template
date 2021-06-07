/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Shims for dependencies which don't support TypeScript, so we use these to avoid `Could not find a declaration
// file for module 'moduleName'` errors
declare module '@heroicons/*';
declare module 'nightwind/helper';
