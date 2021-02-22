import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
// import VConsole from 'vconsole'
import { initWindowWidth } from 'basic-kit-browser'
import App from './App'
initWindowWidth()

// const App = React.lazy(() => import('./App' /* webpackChunkName: "app" */))

ReactDOM.hydrate(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
