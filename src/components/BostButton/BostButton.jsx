import React from 'react'

export default function BostButton({category}) {
  return (
    <div className='flex gap-2 pt-6'>
            {category?.map((item,index)=>{
                return(
                    <button className={`h-6 px-2.5 text-sm  rounded-2xl ${item.design}`} key={index}>{item.textTwo}</button>
                )
            })}
            </div>
  )
}
