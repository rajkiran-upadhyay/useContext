import React from 'react'
import '../App.css'
import { useContext } from 'react'
import { context } from './context/AppContext'
function Cb() {
    const {x}=useContext(context)
    // console.log(data)//{quality: 'kind', x: 1}

    //const {quality}=useContext(context)
    // const data=useContext(context)//data is inside context store
    //data={quality:"kind"}
  return (<>
   <div className='App'>Cb <br />
   {
    x
   }</div>
    </>
   
  )
}

export default Cb