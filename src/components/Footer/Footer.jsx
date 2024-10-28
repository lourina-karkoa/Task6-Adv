import React from 'react'

export default function Footer() {
  return (
    <footer className='px-5 lg:px-28 pt-7.5 pb-[23px] md:pb-7.5 font-inter'>
      <ul className='flex justify-start items-center flex-col md:flex-row gap-[14px] text-nav  dark:text-white text-xl font-normal pt-7.5'>
        <li>© 2023</li>
        <li>Twitter </li>
        <li>LinkedIn</li>
        <li>Email</li>
        <li>RSS feed</li>
        <li>Add to Feedly</li>
      </ul>
    </footer>
  )
}
