import React, {useState} from 'react'
import axios from 'axios'

export const FileUploader = () => {

    const [link, setLink] = useState(undefined)

    const handleFile = async (event) => {
        try{
            const data = new FormData()
            data.append('file', event.target.files[0])
            console.log('Files: ', event.target.files)

            const result = await axios.put('http://localhost:3003/files/upload', data)
            setLink(result.data.link)
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <div>
            <input type={'file'} onChange={handleFile}/>
            {link && (<div>
                <img src={link} style={{width:"300px", height:"200px"}}alt={link}/>
                <p><a href={link}>Link</a></p>
                </div>
            )}
        </div>
    )
}