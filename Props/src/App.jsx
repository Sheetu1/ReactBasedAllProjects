import React from 'react'
import Card from './Components/Cards'
import myImage from './assets/sheetu.jpg'
import me  from './assets/me.jpg'
import official  from './assets/official.jpg'
import sheetal  from './assets/sheetal.jpg'


const App = () => {
  return (
    <div className='w-full min-h-screen bg-blue-200 p-5 flex flex-wrap gap-5 justify-center items-start'>
      <Card img={myImage} name="sheetalSharma" deg="BCA" />
      <Card img={me} name="DivyanshChaudhary" deg="MCA" />
      <Card img={official} name="ManishChaudhary" deg="BTech" />
      <Card img={sheetal} name="PoonamSharma" deg="MBA" />
    </div>
  )
}

export default App;
