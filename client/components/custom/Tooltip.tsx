import React, { useState } from 'react'

interface TooltipProps {
  text: string
  children: React.ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className='relative'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div className='absolute flex justify-center bottom-6 inset-x-0 '>
          <div className='relative w-max z-10 p-2  text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg border border-primary/40 rounded-2xl'>
            {text}
          </div>
        </div>
      )}
      {children}
    </div>
  )
}

export default Tooltip
