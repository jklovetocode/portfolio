import Icon from '@/components/custom/Icon'
import { useState } from 'react'

export default function project() {
  const [showTitle, setShowTitle] = useState(false)
  return (
    <div className='h-full flex flex-col gap-10'>
      <div className='text-3xl'>Project Showroom</div>
      <div className='grid grid-cols-2 gap-5'>
        <div
          className='redCard h-[200px] relative'
          style={{
            backgroundImage:
              'url(https://cdn-images-1.medium.com/max/700/1*Sh5tG4dnkk3-p_Jbd630Fw.jpeg)',
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-70 hover:bg-opacity-0'>
            <div
              onMouseEnter={() => setShowTitle(true)}
              onMouseLeave={() => setShowTitle(false)}
              className='flex justify-center items-center w-full h-full text-3xl'
            >
              {showTitle ? (
                <div
                  className={
                    'flex gap-1  w-full justify-center ' +
                    ` ${showTitle ? 'bg-black' : ''}  `
                  }
                >
                  Magic Book Shop
                  <Icon icon='SparklesIcon' />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
