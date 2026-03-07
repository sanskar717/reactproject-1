import React from 'react'

function Card({username, btnText="visit me"}) {
  console.log(username);
  
  return (
    <div className="w-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 cursor-pointer transform hover:scale-105">
      <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1546519227-7a19fb3ce338?w=400&h=300&fit=crop)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{username}</h2>
        <p className="text-sm text-blue-100 mb-4">Beautiful card component with Tailwind CSS styling</p>
        
        <div className="flex gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-400 bg-opacity-30 rounded-full text-xs font-semibold">React</span>
          <span className="px-3 py-1 bg-purple-400 bg-opacity-30 rounded-full text-xs font-semibold">Tailwind</span>
        </div>
        
        <button className="w-full bg-white text-purple-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default Card