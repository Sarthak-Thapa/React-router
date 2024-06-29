import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
  const {userid} = useParams([]);
  return (
    <>
        <div className="text-center py-4 font-bold text-white bg-slate-800 text-3xl"> User: {userid} </div>
    </>
  )
}
