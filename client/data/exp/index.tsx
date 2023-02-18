import { TExpStacks } from '@/types'
import { backExp } from './back'
import { frontExp } from './front'
import { infraExp } from './infra'
import { learningExp } from './learning'
import { web3Exp } from './web3'

const expStack: TExpStacks[] = [
  ...frontExp,
  ...backExp,
  ...infraExp,
  ...learningExp,
  ...web3Exp,
]
export default expStack
