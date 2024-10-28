import React from 'react'

export default function BostTitle({title,classText}) {
  return (
    <h4 className={`text-barbar font-semibold ${classText ? 'text-base' : 'text-sm'}`}>{title}</h4>
  )
}
