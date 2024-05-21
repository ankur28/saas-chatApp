import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

type Props = {
    name: string,
    image: string,
    className?: string
}

function UserAvatar({name, image,className}: Props) {
  return (
<Avatar className="bg-white,text-black">
    {image && (
        <Image
            src={image}
            alt = {name || ""}
            width={40}
            height={40}
            className="rounded-full"
        />
    )}
  {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
  <AvatarFallback className='dark:bg-white dark:text-black text-lg'>
    {name 
        ?.split(" ")
        .map((n) => n[0])
        .join("")    
    }
  </AvatarFallback>
</Avatar>
  )
}

export default UserAvatar