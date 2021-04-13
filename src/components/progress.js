import useStorage from '../hook/useStorage'
import { useEffect } from 'react'

const ProgressBar = ({ file,setFile}) => {

    const {url ,progress} = useStorage(file) 

    useEffect(() => {
        
        if (url) {
           setFile(null) 
        }
        
    }, [url])

    console.log(progress,url);
    return(
        <div className="progress-bar" style={{ width: progress + '%' }}></div>
    )
}

export default ProgressBar