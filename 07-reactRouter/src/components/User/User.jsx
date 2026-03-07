import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid} = useParams() // useParams is a hook provided by react-router-dom that allows us to access the parameters of the current route. In this case, we are accessing the userid parameter from the URL.
  return (
      <div className='bg-gray-500 text-white text-3xl p-4 '
      >
        User: {userid}</div>
  )
}

export default User