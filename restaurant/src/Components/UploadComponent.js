import {React} from "react";
import {Link} from  "react-router-dom"


function UploadComponent(props) {
    if (props.data != null) {
  
        const listContainer = document.getElementsByClassName("category-meal-list")[0];
        
        listContainer.innerHTML = ""
        
        props.data.forEach(element => {
            let oneMealContent = `<div class="meal-container">
                                        <h3 class="meal-title">${element.foodName}</h3>
                                        <p class="meal-price">${element.price} rub.</p>
                                        <img class="meal-capture" src="${element.foodPhoto}" alt="meal capture"/>
                                        <p class="meal-description">${element.description}</p>
                                    </div>`
            
            listContainer.insertAdjacentHTML("beforeend", oneMealContent);
        });
    } 
           
    
    return(
        <>
            <div className="button-container"><Link to="/"><button className="back-button">BACK</button></Link></div>
            <div className="category-meal-list">

            </div>
        </>
    )
}


export default UploadComponent;