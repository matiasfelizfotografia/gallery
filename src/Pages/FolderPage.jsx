import React,{useState,useEffect} from "react"
import ImagenServices from "../Services/ImagenServices"
import Styles from "./FolderPage.module.css"
import { useParams } from "react-router-dom"
import { Image } from "../Components/imagen/Image"



export const FolderPage = () =>{
    const [imaegenes, setImagenes]   = useState([])
    const {id} = useParams();
    const [imageSelected,setImageSelected] = useState("")

    useEffect( () =>{
        const fetchImagenes = async () =>{
          const data = await ImagenServices.getImagenes(id)
          setImagenes(data)
          console.log(imaegenes)
        }
          fetchImagenes()    
      },[])

    const uploadImage = async (files) =>{
        console.log(files)
        for(var i = 0; i < files.length; i++){
            const formData = new FormData();
            formData.append("multipartFile", files[i]);
            formData.append("folderId", id);
            await ImagenServices.postImage(formData)
        }
        window.location.reload()

      
    }

    return(
        <div className={Styles.container}>
            <div className = {Styles.upload}>
                <input type="file" multiple id="myFileField" onChange={(event) => {setImageSelected(event.target.files)}}/>
                <button onClick={() => uploadImage(imageSelected)}>Upload image</button>
            </div>
            <div className={Styles.imageContainer}>
                {imaegenes.map((imagen) => 
                   <Image url={imagen.url} id={imagen.id}/>                )}
            </div>
       
        </div>
    )
}

export default FolderPage;