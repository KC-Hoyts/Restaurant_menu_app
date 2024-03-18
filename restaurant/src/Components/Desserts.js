import {React, useState, useEffect} from "react";
import axios from "axios";
import UploadComponent from "./UploadComponent";


function Starters() {
    
    const [data, updateData] = useState(null)

    useEffect(() => {
        axios("http://127.0.0.1:8000/api/food?foodCategory=4", {
            method: "get"
        })
        .then(response => {
            updateData(response.data);
        })
        .catch((error) => {
            console.log("Sorry, but seems Menu is unavailable now. Please, try check this page later.");
        });
    }, [])

    return(
        <UploadComponent data={data}/>

    )
}


export default Starters;