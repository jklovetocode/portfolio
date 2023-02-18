import careers from '@/data/career'
import { useState } from 'react'
import ButtonClick from '../custom/ButtonClick'

export default function CareerDetail() {
  const data = careers
  const [selectedItem, setItem] = useState(data[0])
  return (
    <div className='grid gap-4'>
      <div className='flex gap-2'>
        {data.map((x) => {
          return (
            <div
              key={x.text}
              onClick={() => {
                setItem(x)
              }}
            >
              <ButtonClick
                style={`${x.text === selectedItem.text ? 'bg-primary' : ''}`}
              >
                {x.text}
              </ButtonClick>
            </div>
          )
        })}
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <span> Duration : </span>
          <span>{selectedItem.time}</span>
        </div>
        <div>
          <span>In Details :</span>
          <span>{selectedItem.detail}</span>
        </div>
        <div>
          <span>What I've Learned</span>
          <span>{selectedItem.learn}</span>
        </div>
      </div>
    </div>
  )
}
