"use client";
import React from 'react'
import Image from 'next/image'
import { Http2ServerRequest } from 'http2'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
const menuOptions=[
{
  name:'Home',
  path:'/'
},
{name:'Pricing', 
  path:'/path'},
{
  name:'Contact us',
  path: '/contact-us',
}

]

function Header() {
  return (
    <div className='flex justify-between item-center p-4  '>
      <div className="flex gap-3">
        {/* Logo */}
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        {/* App name */}
        <h2 className="font-bold text-2xl">ZourneyAI</h2>
      </div>

<div className='flex gap-5 items-center '>
        {menuOptions.map((menu, index) => (
        <Link key={index} href={menu.path}>
        <h2 className="text-lg transition hover:scale-105 hover:text-[var(--primary)]">
        {menu.name}
        </h2>          
        </Link>
        ))}
      </div>
     <SignInButton mode="modal">
        <Button>Get Started</Button>
     </SignInButton>
    
    </div>
  );
}


export default Header