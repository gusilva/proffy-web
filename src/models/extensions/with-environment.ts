import { getEnv, IStateTreeNode } from 'mobx-state-tree'
import { Environment } from '../environment'

// eslint-disable-next-line
export const withEnvironment = (self: IStateTreeNode) => ({
  views: {
    get environment() {
      return getEnv<Environment>(self)
    },
  },
})
