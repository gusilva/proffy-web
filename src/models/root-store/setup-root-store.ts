import { onSnapshot } from 'mobx-state-tree'
import { RootStoreModel, RootStore, RootStoreSnapshot } from './root-store'
import { Environment } from '../environment'

export async function createEnvironment(): Promise<Environment> {
  const env = new Environment()
  await env.setup()
  return env
}

/**
 * Setup the root state.
 */
export async function setupRootStore(): Promise<RootStore> {
  const initialValues: RootStoreSnapshot = {
    proffy: { connection: { total: 0 }, classes: [] },
  }

  // prepare the environment that will be associated with the RootStore.
  const env = await createEnvironment()

  const rootStore = RootStoreModel.create(initialValues, env)

  // track changes & save to storage
  onSnapshot(rootStore, (snapshot) => console.log('snapshot: ', snapshot))

  return rootStore
}
