import React from 'react'
import DatilBlogById from '../../components/DaitlBlogById/DatilBlogById';
import SuggestedBosts from '../../components/SuggestedBosts/SuggestedBosts';
import Email from '../../components/Email/Email';

export default function DatilsBlog() {

  
  return (
    <div>
   <div className='flex justify-between flex-wrap gap-4 px-5 lg:px-28'>
     <SuggestedBosts/>
     <DatilBlogById/>
   </div>
   <div className='px-5 xl:hidden'>
   <Email/>
   </div>

   </div>
  )
}
