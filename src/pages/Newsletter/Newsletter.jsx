import React from 'react'
import Email from '../../components/Email/Email'
import SomeBosts from '../../components/SomePosts/SomeBosts'

export default function Newsletter() {
  return (
    <div className='pt-7.5 px-5 xl:px-28'>
      <Email/>
      <SomeBosts/>
    </div>
  )
}
