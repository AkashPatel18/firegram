import React from 'react'
import useFireStore from '../hook/useFirestore'

const ImageGrid = ({setSelected}) => {

    let {docs} = useFireStore('images')

    // let docsUrl = useFireStore(docs)
    

   
    

    return(
        <div className="img_grid">
        { docs && docs.map(doc => (
            <div className="img-wrap" key={doc.id}
            onClick = {() => setSelected(doc.url)}
            >
                <img src={doc.url} alt=""></img>     
            </div>
        ))
        }

        </div>
    )
}

export default ImageGrid