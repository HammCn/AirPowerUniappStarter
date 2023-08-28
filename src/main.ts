import '@/airpower/assets/css/airpower.css'
import '@/airpower/assets/css/weui.css'
import '@/static/css/main.scss'

import { createSSRApp } from 'vue'
import App from './App.vue'
import { AirConfig } from '@/airpower/config/AirConfig'

const rootUrl = 'https://service.hamm.cn/'

AirConfig.apiUrl = `${rootUrl}api/`
AirConfig.staticUrl = `${rootUrl}upload/`

export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
