import {React, useState} from "react";
import axios from "axios";
import "../Main.css";


import {Routes, Route, Link} from "react-router-dom";

function Main() {
    console.log("Hello from Main")
    

    // GET Data from BackEnd
    axios("http://127.0.0.1:8000/api/category/", {
        method: "get"
    })
    .then(response => {
        const categories = response.data;
        const categoryTitle = document.getElementsByClassName("category-title")
        console.log(response.data)
        categoryTitle[0].textContent = categories[0].categoryName;
        categoryTitle[1].textContent = categories[1].categoryName;
        categoryTitle[2].textContent = categories[2].categoryName;
        categoryTitle[3].textContent = categories[3].categoryName;
        categoryTitle[4].textContent = categories[4].categoryName;   
        categoryTitle[5].textContent = categories[5].categoryName;
        const categoryImage = document.getElementsByClassName("category-capture")

        categories.forEach(element => {
            categoryImage[categories.indexOf(element)].src = element.categoryPhoto
        });
  
             
    })
    .catch((error) => {
        console.log("Sorry, but seems Menu is unavailable now. Please, try check this page later.");
    });

    // const [currentURL, checkURL] = useState(window.location.pathname)
    // console.log(`path = ${currentURL}`)
    // if (currentURL != "/") {
    //     const menuLink = document.getElementsByClassName("menu-text")[0]
    //     menuLink.innerHTML += "<br> <span class='menu-span'>back to main page</span>"
    // }

    return(
        <div className="categories-container" id="categoriesContainer">
                
            <div className="one-category-container">
                <Link to="/starters">
                    <div>
                        <h3 className='category-title'></h3>
                        <img className='category-capture' src=""></img>
                    </div>
                </Link>
            </div>
            
            <div className="one-category-container">
                <Link to="/salads">
                    <div>
                        <h3 className='category-title'></h3>
                        <img className='category-capture' src=""></img>
                    </div>
                </Link>
            </div>

            <div className="one-category-container">
                <Link to="/main_courses">
                    <div>
                        <h3 className='category-title'></h3>
                        <img className='category-capture' src=""></img>
                    </div>
                </Link>
            </div>

            <div className="one-category-container">
                <Link to="/desserts">
                    <div>
                        <h3 className='category-title'></h3>
                        <img className='category-capture' src=""></img>
                    </div>
                </Link>
            </div>

            <div className="one-category-container">
                <Link to="/drinks">
                    <div>
                        <h3 className='category-title'></h3>
                        <img className='category-capture' src=""></img>
                    </div>
                </Link>
            </div>    

            <div className="one-category-container">
                <Link to="/random">
                    <div>
                        <h3 className='category-title'></h3>
                        <img className='category-capture' src=""></img>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Main;