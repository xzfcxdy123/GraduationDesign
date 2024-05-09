/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly NODE_ENV: string;
  readonly VITE_BASE_URL: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
