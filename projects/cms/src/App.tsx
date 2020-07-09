import * as React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, createLazyComponent } from 'redux-async-kit'
import { PageRouter } from '@smoex-web/basic'
import { userSlice } from '@smoex-business/user'

const store = configureStore({
  injector: userSlice.injector,
})

window['store'] = store

const HomePage = createLazyComponent({
  injector: userSlice.injector,
  loader: () => import('./containers/HomePage' /* webpackChunkName: "home" */),
})

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PageRouter>
        <Route exact path="/" component={HomePage} />
      </PageRouter>
    </Provider>
  )
}

export default App
