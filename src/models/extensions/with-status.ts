import { IObservableValue, observable } from 'mobx'

export type StatusType = 'idle' | 'pending' | 'done' | 'error'

// eslint-disable-next-line
export const withStatus = () => {
  const status: IObservableValue<string> = observable.box('idle')

  return {
    views: {
      get status() {
        return status.get() as StatusType
      },
      set status(value: StatusType) {
        status.set(value)
      },
    },
    actions: {
      setStatus(value: StatusType) {
        status.set(value)
      },
    },
  }
}
