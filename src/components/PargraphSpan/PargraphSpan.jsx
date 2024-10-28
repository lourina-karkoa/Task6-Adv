import React from 'react'

export default function PargraphSpan({title,text}) {
  return (
    <p className='text-gray-obacity dark:text-gray-dark font-inter pt-3'><span className='font-bold'>{title}</span>{text}</p>
  )
}
