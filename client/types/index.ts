import { EStackGroup } from '@/enums'

export type TCareer = {
  text: string
  time: string
  detail: string
  learn: string
}

export type ExpDetail = {
  exp: string
  output: string
  revelent: string
  subSkills: string
}

export type TExpStacks = {
  text: string
  pic: string
  group: EStackGroup
  details: ExpDetail
  ref: string
}
