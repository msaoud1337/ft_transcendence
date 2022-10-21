import { useState } from "react"



export default function Upload() {
    const [image, setImages] = useState([])

    const onImagechange = () => {
        // setImages([...e.target.files])
    }

    return (
        <>
            <input type="file" multiple accept="image/*" onChange={onImagechange}/>
        </>
    )
}