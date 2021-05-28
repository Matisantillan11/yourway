

const Hamburguer = ( {status, handleState} ) =>{
 
    return (
        <>
        <div className="hamburguer" onClick={handleState}>
            <i className={status}></i>
            <i className={status}></i>
            <i className={status}></i>
        </div>
        </>
    )
}

export default Hamburguer;