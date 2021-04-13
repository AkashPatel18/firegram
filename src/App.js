import Title from './components/title'
import UploadForm from './components/upload'
import ImageGrid from './components/imagegrid'
import Modal from './components/modal'
import { useState } from 'react'

const App = () => {

  const [selected,setSelected] = useState(null)

  return(<>
  <div className="App">
    <Title/>
    <UploadForm />
    <ImageGrid setSelected={setSelected}/>
   {  selected && <Modal selected={selected} setselected={setSelected}/>}
  </div>

  </>)

}

export default App