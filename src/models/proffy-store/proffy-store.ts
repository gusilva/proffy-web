import { types, Instance } from 'mobx-state-tree'
import { flow } from 'mobx'
import { withStatus } from '../extensions/with-status'
import { ConnectionModel } from '../connection/connection'
import { withEnvironment } from '../extensions/with-environment'
import { ClassModel, ClassModelType } from '../classes/classes'
// import { ClassModel, ClassModelType } from '../classes'

export const ProffyModel = types
  .model('ProffyStore')
  .props({
    connection: types.optional(ConnectionModel, { total: 0 }),
    classes: types.optional(types.array(ClassModel), []),
  })
  .extend(withStatus)
  .extend(withEnvironment)
  .actions((self) => ({
    setClasses(values: ClassModelType[]) {
      if (self.classes) {
        if (values) {
          self.classes.replace(values as ClassModelType[])
        } else {
          self.classes.clear()
        }
      } else {
        // eslint-disable-next-line
        self.classes = values as any
      }
    },
  }))
  .actions((self) => ({
    totalConnections: flow(function* () {
      self.setStatus('pending')
      try {
        const result = yield self.environment.api.getTotalConnections()
        if (result.kind === 'ok') {
          self.connection.setTotal(result.total)
          self.setStatus('done')
        } else {
          self.setStatus('error')
        }
      } catch (e) {
        console.log(e)
        self.setStatus('error')
      }
    }),
    getClasses: flow(function* (
      subject: string,
      week_day: string,
      time: string
    ) {
      self.setStatus('pending')
      try {
        const result = yield self.environment.api.getClasses(
          subject,
          week_day,
          time
        )
        if (result.kind === 'ok') {
          self.setClasses(result.classes)
          self.setStatus('done')
        } else {
          self.setStatus('error')
        }
      } catch (e) {
        console.log(e)
        self.setStatus('error')
      }
    }),
  }))

export type ProffyStore = Instance<typeof ProffyModel>
