import { useState } from 'react'
import ImageForm from './components/ImageForm';




function App() {
  const [imageItems, setImageItems ] = useState({}) ;
  

  return (
    <>
      <h1>Lets see some images</h1>
      <ImageForm  generateList={setImageItems} />
    </>
  )
}

export default App
