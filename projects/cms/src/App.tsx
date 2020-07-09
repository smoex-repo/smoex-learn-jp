import * as React from 'react'
import { Route } from 'react-router-dom'
import { configureStore, createLazyComponent } from 'redux-async-kit'
import { PageContainer } from '@smoex-web/basic'

const HomePage = createLazyComponent({
  // injector: userSlice.injector,
  loader: () => import('./containers/HomePage' /* webpackChunkName: "home" */),
})

const App: React.FC = () => {
  return (
    <PageContainer>
      <Route exact path="/" component={HomePage} />
    </PageContainer>
  )
}

export default App
