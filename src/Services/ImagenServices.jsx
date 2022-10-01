 
const REST_API_URL = "http://localhost:8080/images";

class UserServices{


    async getImagenes(idCarpeta){
        let request = await fetch(REST_API_URL + "/list/" + idCarpeta,{
            headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'        }},
        )
        const respuesta = await request.json();
        return respuesta
    }

}

export default new UserServices();