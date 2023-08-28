/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string | boolean>> {
  /**
   * # 环境名称
   */
  VITE_APP_NAME: string

  /**
   * # API根路径
   */
  VITE_APP_API_URL: string

  /**
   * # 静态资源根路径
   */
  VITE_APP_STATIC_URL: string

  /**
   * # 是否开发模式
   */
  DEV: boolean

  /**
   * # 是否生产模式
   */
  PROD: boolean

  /**
   * # 当前环境模式
   */
  MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
