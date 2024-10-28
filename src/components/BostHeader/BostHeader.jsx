import React from 'react'

export default function BostHeader({text,someUpdate}) {
  return (
    <h2 className={`text-nav dark:text-white ${someUpdate ? 'font-bold text-4xl leading-8 pt-8 pb-5' : 'text-lg font-semibold'}`}>{text}</h2>
  )
}
