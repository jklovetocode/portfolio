import Link from 'next/link'

export default function ProfileCard() {
  const linkOut = [
    {
      text: 'linkedIn',
      pic: `https://cdn-icons-png.flaticon.com/512/174/174857.png`,
      link: `https://www.linkedin.com/in/jk-love-to-code/`,
    },
    {
      text: 'medium',
      pic:
        `https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W` +
        `5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw`,
      link: `https://medium.com/@jklovetocode`,
    },
    {
      text: 'github',
      pic: `https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg`,
      link: `https://github.com/jklovetocode/jklovetocode`,
    },
    {
      text: 'youtube',
      pic:
        `https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full` +
        `-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png`,
      link: ``,
    },
  ]
  return (
    <div className='col-span-2 redCard'>
      <div className='flex flex-col p-6'>
        <div className='flex items-center gap-6'>
          <img
            src={
              `https://i.seadn.io/gae/` +
              `lxs8NeiP_VIZx548ZvHkQlMb9qfi4r4o89H5y7FrEhx42oEnh66QjI-uZPuXvHInh4AHfanlA2nu2kA-` +
              `YF5VQZFnLEzl51XzbSrn8NE?auto=format&w=1000`
            }
            className=' w-36 h-36 rounded-full'
          />
          <div className='flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
              <div>
                <div className=' text-3xl'>JkLoveToCode</div>
                <div className='text-slate-400 font-thin text-sm'>
                  <div>"I'm fast learner who love in learning, flexible,</div>
                  <div>talkative, eager and tech lover"</div>
                </div>
              </div>
              <div className='flex gap-4'>
                {linkOut.map((x) => {
                  return (
                    <button
                      className={
                        'bg-white rounded-full p-[4.5px]' +
                        `${x.text === 'youtube' ? ' disabled ' : ''}`
                      }
                      key={x.text}
                    >
                      <Link href={x.link} target='_blank'>
                        <img
                          src={x.pic}
                          alt={x.text}
                          className={'rounded-full w-9 h-9'}
                        ></img>
                      </Link>
                    </button>
                  )
                })}
              </div>
            </div>
            <div className=' text-slate-100 font-light'>
              {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
                dicta fugiat. Repellat voluptas, tempora, vitae ab aperiam eos
                laudantium nemo eligendi perferendis tempore dolorum quisquam
                aliquam illo fugit ratione corrupti`}
            </div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
