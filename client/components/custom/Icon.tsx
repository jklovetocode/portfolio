import { FC } from 'react'
import * as Icons from '@heroicons/react/24/solid'

const Icon: FC<{ icon: string }> = (props) => {
  const { ...Icon } = Icons
  //@ts-ignore
  const HeroIcon: JSX.Element = Icon[props.icon]
  return (
    <div>
      {/* @ts-ignore */}
      <HeroIcon className='w-6 h-6 '></HeroIcon>
    </div>
  )
}
export default Icon
