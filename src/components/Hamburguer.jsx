import { useState } from "react"

const Hamburguer = () =>{
    const [state, setState] = useState('open')
    const handleState = () =>{
        state === 'open' ? setState('close') : setState('open')        
    }
    return (
        <>
        <div className="hamburguer" onClick={()=>handleState()}>
            <i className={state}></i>
            <i className={state}></i>
            <i className={state}></i>
        </div>
        </>
    )
}

export default Hamburguer;