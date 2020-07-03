import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryConfigProvider } from 'react-query'
import 'antd/dist/antd.css'

import './index.css'
import './styles/global.css'
import { MainRouter } from './MainRouter'
import * as serviceWorker from './serviceWorker'
import { QueryConfig } from './react-query-config'

ReactDOM.render(
  // <React.StrictMode> ant design uses some deprecated features so this has to be disabled
  <ReactQueryConfigProvider config={QueryConfig}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </ReactQueryConfigProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
