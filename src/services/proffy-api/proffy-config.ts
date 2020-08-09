import * as env from '../../config/env-variables'

export interface ApiConfig {
  url: string
  timeout: number
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: env.API || 'http://localhost:3333/api/v1',
  timeout: 10000,
}
