import ProfileCard from '@/components/homepage/ProfileCard'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-2 gap-10'>
        <ProfileCard></ProfileCard>
        <div
          className='grid flex-col gap-6
          '
        >
          <div className='redCard divide-y divide-primary/50'>
            <div className='redCard-title'>Learning</div>
            <div className='redCard-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nam sunt ipsam dolore. Minus dolor dolores sit eum voluptas error
              nesciunt ipsa suscipit perferendis? Officia, numquam? Illo veniam
              minus voluptatum.
            </div>
          </div>
          <div className='redCard divide-y divide-primary/50'>
            <div className='redCard-title'>Etc</div>
            <div className='redCard-text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              doloribus, quae voluptas at dignissimos porro nesciunt
              perspiciatis eos, tempore quas ad sequi quisquam quos perferendis
              necessitatibus. Enim eveniet culpa eum!
            </div>
          </div>
        </div>
        <div className='redCard divide-y divide-primary/50'>
          <div className='redCard-title'>Interesting In</div>
          <div className='redCard-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque
            magni aperiam deserunt, cum beatae excepturi consequatur vitae
            commodi quisquam, odio labore, itaque nulla laborum minima. Nam iure
            perspiciatis accusamus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Molestias tempora impedit aperiam illo praesentium
            nemo eaque, officia maiores facilis voluptate veniam iure accusamus
            recusandae odio, libero dicta quia maxime. Cum? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Eligendi quasi modi in
            laudantium doloremque ea tenetur. Consectetur tenetur enim eos, esse
            vel sint nam est ipsum earum voluptas accusantium quidem.
          </div>
        </div>
      </div>
    </div>
  )
}
