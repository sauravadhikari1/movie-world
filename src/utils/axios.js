import axios from "axios"
const apiKEY =process.env.REACT_APP_APIKEY
const apiEP=`http://www.omdbapi.com/?apikey=${apiKEY}&`
export const fetchfromAPI =async(str)=>{
    try{
        const url =apiEP+ "t=" + str
       const response = await axios.get(url) 

       return response.data
    }
    catch(error
    ){
        console.log(error)
    }
}