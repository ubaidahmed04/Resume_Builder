"use client"
import Image from 'next/image'
import React from 'react'
import CVTemplate2 from '@/public/Images/cvtemp2.png'
import CVTemplate3 from '@/public/Images/cv3.jpg'
import newCVTemplate1 from '@/public/Images/cv temp.PNG'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'

const Template = () => {
  return (
    <div>
      <span className='text-2xl font-bold text-center w-full py-8 flex justify-center h-full' >Use Template</span>
      <span className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center h-full w-full'>
      <span className='w-full h-full flex justify-center items-center flex-col gap-4'>
      <Image
       height={'1000'}
       width={'1000'}
       src={newCVTemplate1}
       alt='background image'
       className='h-full w-full '
       />
       <Link href={'/form'}>
      <Button fullWidth type="submit" className="ml-auto w-44 h-12 bg-blue-600 text-black">
         Use Template
       </Button>
       </Link>
       </span>
      <span className='w-full h-full flex justify-center items-center flex-col gap-4'>
      <Image
       height={'1000'}
       width={'1000'}
       src={CVTemplate2}
       alt='background image'
       className='h-full w-full '
       />
       <Link href={'/form'}>
      <Button fullWidth type="submit" className="ml-auto w-44 h-12 bg-blue-600 text-black">
         Use Template
       </Button>
       </Link>
       </span>
      <span className='w-full h-full flex justify-center items-center flex-col gap-4'>
      <Image
       height={'1000'}
       width={'1000'}
       src={CVTemplate3}
       alt='background image'
       className='h-full w-full '
       />
       <Link href={'/form'}>
      <Button fullWidth type="submit" className="ml-auto w-44 h-12 bg-blue-600 text-black">
         Use Template
       </Button>
       </Link>
       </span>
      
      
      </span>
    </div>
  )
}

export default Template