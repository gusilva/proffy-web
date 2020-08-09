import { GeneralApiProblem } from './proffy-api-problem'

interface ClassesResponse {
  avatar: string
  bio: string
  cost: string
  id: number
  name: string
  subject: string
  user_id: number
  whatsapp: string
}

export type GetTotalConnectionsResult =
  | { kind: 'ok'; total: number }
  | GeneralApiProblem

export type GetClassesResult =
  | { kind: 'ok'; classes: ClassesResponse[] }
  | GeneralApiProblem
