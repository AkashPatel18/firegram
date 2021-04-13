import React from 'react'

const Modal = ({selected,setselected}) => {
    console.log(selected);
    const handleClick = (e) => {
        setselected(null)
    }
    return(
    <div className="backdrop" onClick={handleClick}>
        <img src={selected} alt=""></img>
    </div>
    )

}
export default Modal