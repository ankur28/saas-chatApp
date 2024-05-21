import React from 'react'
import LogoImage from "@logos/logo.svg";
import Link from '../node_modules/next/link';
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"


type Props = {}

function Logo({}: Props) {
  return <Link href="/" prefetch={false} className='overflow-hidden'> 
  <div className='flex items-center w-72 h-14'>
    <AspectRatio
        ratio = { 16/ 9}
        className = "flex items-center justify-center"
    >
        <Image
            priority
            src={LogoImage}
            alt="logo"
            className="dark:filter dark:invert "
        />
    </AspectRatio>
  </div>
   </Link>
}

export default Logo