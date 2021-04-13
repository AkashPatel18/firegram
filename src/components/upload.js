import React,{ useState } from 'react'
import ProgressBar from './progress'


const UploadForm = () => {

    const [file,setFile] = useState(null)

    const [error,setError] = useState("")

    const types = ['image/png','image/jpeg']

    const changeHandler = (e) => {
        let selectedFile = e.target.files[0]

        if (selectedFile && types.includes(selectedFile.type)){
            setFile(selectedFile)
        } else{
            setFile(null)
            setError("Please select an image file (jpeg or png)")

        }
    }

    return (<>
        <form>
            <input type="file" onChange={changeHandler} className="file_input" hidden></input>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div className="error">{ file.name }</div>}
                { file && <ProgressBar file ={file} setFile={setFile}/>}

            </div>
        </form>
        
    </>)
}
export default UploadForm