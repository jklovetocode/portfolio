import CareerDetail from '@/components/profile/CareerDetail'
import ExpDetail from '@/components/profile/ExpDetail'
import Experiences from '@/components/profile/ExpDetail'

export default function profile() {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='flex flex-col gap-4'>
        <div className='redCard divide-y divide-primary/50'>
          <div className='redCard-title'>Objective</div>
          <div className='redCard-text'>
            As a Full Stack Web Developer, I aim to leverage my expertise in web
            development and passion for the financial technology sector to
            create secure and user-friendly fin-tech or web 3 applications. I am
            passionate about creating innovative solutions and having a
            significant impact on the industry.
          </div>
        </div>
        <div className='redCard divide-y divide-primary/50'>
          <div className='redCard-title'>Career Path</div>
          <div className='redCard-text'>
            <CareerDetail></CareerDetail>
          </div>
        </div>
      </div>
      <div className='redCard divide-y divide-primary/50'>
        <div className='redCard-title'>Experienced, Skill and Stacks</div>
        <div className='redCard-text'>
          <ExpDetail></ExpDetail>
        </div>
      </div>
    </div>
  )
}
