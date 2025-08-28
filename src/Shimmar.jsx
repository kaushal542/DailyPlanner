import React from 'react'

const Shimmar = () => {
  
  return (
    <div className="flex flex-wrap justify-center m-10">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-[#ebecf0] m-[24px] p-4 w-[300px] h-[180px] rounded-2xl animate-pulse"
        >
          <div className="h-4 bg-gray-300 rounded w-24 ml-auto mb-3"></div>
          <div className="h-6 bg-gray-400 rounded w-40 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="flex gap-2 mt-4">
            <div className="h-8 w-16 bg-gray-300 rounded"></div>
            <div className="h-8 w-16 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shimmar
