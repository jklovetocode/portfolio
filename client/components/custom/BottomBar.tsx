import { useRouter } from 'next/router'
import { useState } from 'react'
import Icon from './Icon'

export default function BottomBar() {
  const NavIcon = [
    { text: 'home', icon: 'HomeIcon', link: '/' },
    { text: 'profile', icon: 'UserIcon', link: '/profile' },
    { text: 'roadmap', icon: 'MapIcon', link: '/roadmap' },
    { text: 'project', icon: 'RectangleGroupIcon', link: '/project' },
  ]
  const router = useRouter()
  const [selectedIcon, setSelectedIcon] = useState(
    NavIcon.find((x) => x.link === router.pathname)
  )
  return (
    <div className='flex justify-center fixed bottom-10 w-full '>
      <div className='p-4 redCard bg-black/70 flex gap-6'>
        {NavIcon.map((x) => {
          return (
            <div
              key={x.text}
              onClick={async () => {
                await router.push(x.link)
                setSelectedIcon(x)
              }}
              className={`p-1 cursor-pointer ${
                selectedIcon?.text === x.text ? 'bg-primary rounded-full' : ''
              }`}
            >
              <Icon icon={x.icon}></Icon>
            </div>
          )
        })}
      </div>
    </div>
  )
}
