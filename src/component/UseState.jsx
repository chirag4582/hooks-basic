import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function UseState() {

const [content,setcontent] = useState('')
const [count,setcount]=useState(0)
const [color,setcolor]=useState('black')

useEffect(()=>{
    alert('button got pressed')
}, [content])

const HandleChange =()=>{
    setcontent(' text ')
}

const changeColor=()=>{
    if(color==='black')
    {setcolor('grey')}
    else{
        setcolor('black')
    }
}

  return (
    <div>
        <button  onClick={()=>changeColor()} >Toggle</button>
        <div  style={{backgroundColor:color,height:'40vh'}}>
            <p style={{color:'white'}}>{content}</p>
            <button onClick={()=>HandleChange()} >Content</button>
            <br />
            <button>{count}</button>
            <br />
            <button onClick={()=>{setcount(e=>e+1)}} >LIKE</button>
        </div>
    </div>
  )
}

export default UseState