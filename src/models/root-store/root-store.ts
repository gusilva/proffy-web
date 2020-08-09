import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { ProffyModel } from '../proffy-store/proffy-store'

export const RootStoreModel = types.model('RootStore', {
  proffy: ProffyModel,
})

export type RootStore = Instance<typeof RootStoreModel>
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>
