import * as React from 'react'
import { Route } from 'react-router-dom'
import { createLazyComponent } from 'redux-async-kit'
import { PageContainer } from '@smoex-web/basic'
import { renderToNodeStream } from 'react-dom/server'

const HomePage = createLazyComponent({
  // injector: userSlice.injector,
  loader: () => import('./containers/HomePage' /* webpackChunkName: "home" */),
})

const App: React.FC = () => {
  React.useEffect(() => {
    console.log(666)
    console.log(111, renderToNodeStream(<HomePage />))
  }, [])
  return (
    <PageContainer>
      <Route exact path="/" component={HomePage} />
    </PageContainer>
  )
}

export default App
