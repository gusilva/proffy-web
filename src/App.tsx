import React, { useEffect, useState } from 'react'

import Routes from './routes'
import { RootStore } from './models/root-store'
import { setupRootStore } from './models/root-store/setup-root-store'
import { RootStoreProvider } from './models/root-store/root-store-context'

import './assets/styles/global.css'

const App: React.FunctionComponent = () => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      setupRootStore().then(setRootStore)
    })()
  }, [])

  if (!rootStore) return null

  return (
    <RootStoreProvider value={rootStore}>
      <Routes />
    </RootStoreProvider>
  )
}

export default App
