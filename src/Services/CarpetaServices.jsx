
const REST_API_URL = "http://localhost:8080/folders";

class UserServices{


    async getCarpetas(){
        let request = await fetch(REST_API_URL + "/list",{
            headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'        }}
        )
        const respuesta = await request.json();
        console.log(request)
        return respuesta
    }


}
export default new UserServices();