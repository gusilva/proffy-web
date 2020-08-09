import { ProffyApi } from '../services/proffy-api'

export class Environment {
  api: ProffyApi

  constructor() {
    this.api = new ProffyApi()
  }

  async setup(): Promise<void> {
    await this.api.setup()
  }
}
