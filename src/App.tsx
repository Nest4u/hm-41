import { useState } from 'react'
import DataFetcher from './DataFetcher'
import './App.css'

function App() {
 const [id, setId] = useState<number>(1)
  return (
   <div>
      <button onClick={()=> setId(id-1)} disabled={id===1}>Prev</button>
      <button onClick={()=> setId(id+1)}> Next</button>
      <DataFetcher id={id} />
   </div>
  )
}

export default App
