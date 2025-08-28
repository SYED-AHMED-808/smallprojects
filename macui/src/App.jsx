import React from 'react'
import Canva from './Canva'
import { div } from 'three/tsl'

const App = () => {
  return (
    <div className='w-full h-screen '>
      <div className='absolute text-white top-32 left-1/2 -translate-x-1/2'>
        <h3 className='text-7xl tracking-tighter font-bold'>macboook pro.</h3>
      </div>
      <Canva/>
    </div>
      
  )
}

export default App
