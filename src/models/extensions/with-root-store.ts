import { getRoot, IStateTreeNode } from 'mobx-state-tree'
import { RootStoreModel } from '../root-store'

// eslint-disable-next-line
export const withRootStore = (self: IStateTreeNode) => ({
  views: {
    get rootStore() {
      return getRoot<typeof RootStoreModel>(self)
    },
  },
})
