import Image from 'next/image'
import React from 'react'
import bgImg from '@/public/Images/resume.png'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
      <span className='h-full w-full '>

      <span className='min-w-screen h-full '>
      <Image
       height={'1000'}
       width={'1000'}
       src={bgImg}
       alt='background image'
       className='h-screen w-screen '
       />
       </span>
       <Link href={'/form'}>
       <span className='absolute top-1/2 left-1/2 -translate-x-1/2'><button
  class="group flex justify-center items-center bg-white gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-[#22263B] text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
>
 
  Generate Resume
</button>
</span>
</Link>
      </span>

    </div>
  )
}

export default Home