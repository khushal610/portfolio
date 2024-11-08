import React from 'react'

function ExCard({icon,title,description}) {
  return (
    <>
        <div>
            <h1 className='text-2xl flex items-center gap-1'>{icon} {title}</h1>
            <h3>[{description}]</h3>
        </div>      
    </>
  )
}

export default ExCard
