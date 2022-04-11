import 'antd/dist/antd.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'virtual:windi.css'
import App from './App'
import './index.css'
import store from './stores'
import '@/domain/index'
import 'moment/locale/zh-cn'
import moment from 'moment'
// 设置中文
moment.locale('zh-cn')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
