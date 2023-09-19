import ImagenServices from "../../Services/ImagenServices"
import Styles from "./Image.module.css"


export const Image = (props) =>{

    const deleteImage = async event =>{
        if (window.confirm("Are you sure that you want delete the image?")){
            await ImagenServices.delImage(props.id)
            window.location.reload()
        }
    }

    return (
        <div>
            <div>
                <img className={Styles.image} src="/Icons/delete.png" width="25em" onClick={deleteImage}/>
            </div>
            <img width="300em" src={props.url} />
        </div>
    )   
}