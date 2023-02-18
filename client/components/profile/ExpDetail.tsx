import expStack from '@/data/exp/index'
import { EStackGroup } from '@/enums'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Icon from '../custom/Icon'
import { Modal, ModalHeader, ModalMain, ModalFooter } from '../custom/Modal'
import Tooltip from '../custom/Tooltip'

export default function ExpDetail() {
  const data = expStack
  const [selectedItem, setItem] = useState(data[0])
  const [modal, setModal] = useState(false)
  return (
    <div className='grid gap-2'>
      {Object.entries(EStackGroup).map(([key, value]) => {
        return (
          <div key={key} className='flex flex-col gap-2 '>
            <div className='underline underline-offset-1'>{value}</div>
            <div className='flex items-center gap-2'>
              {data
                .filter((stack) => stack.group === value)
                .map((stack) => {
                  return (
                    <button
                      className='bg-white p-[0.3rem] w-max rounded-full'
                      onClick={() => {
                        setItem(stack)
                        setModal(true)
                      }}
                    >
                      <img
                        src={stack.pic}
                        className='object-contain w-6 h-6'
                      ></img>
                    </button>
                  )
                })}
            </div>
          </div>
        )
      })}
      <Modal open={modal} setOpen={setModal}>
        <ModalHeader open={modal} setOpen={setModal}>
          <div className='flex justify-center items-center gap-1'>
            <span>{`${selectedItem.text}`}</span>
            <Link href={selectedItem.ref} target='_blank'>
              <Tooltip text={selectedItem.ref}>
                <Icon icon='InformationCircleIcon'></Icon>
              </Tooltip>
            </Link>
          </div>
        </ModalHeader>
        <ModalMain>
          <div className='grid gap-2'>
            <div className='flex flex-col gap-1'>
              <div className='chips '>Experiences: </div>
              <div>{selectedItem.details.exp}</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='chips'>Output:</div>
              <div>{selectedItem.details.output}</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='chips'>Revelant:</div>
              <div>{selectedItem.details.revelent}</div>
            </div>
          </div>
        </ModalMain>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  )
}
