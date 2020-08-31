import React, {Fragment, useEffect} from "react"
import {Link} from "gatsby";
import "./index.scss";
import svg from "../assets/menu.svg";
import pic from "../assets/pic.jpg"

const Home = () => {

   useEffect(() => {
      const cursor = document.querySelector(".Home__cursor");
      document.addEventListener("mousemove", e => {
         cursor.setAttribute("style", 
         "top: "+(e.pageY - 2)+"px; left: "+(e.pageX - 2)+"px;");
      });
      document.addEventListener("click", () => {
         cursor.classList.add("expand");
         setTimeout(() => {
            cursor.classList.remove("expand")
         }, 500)
      });
   }, [])
 

 return (
    <Fragment>
 <div className="Home__cursor">
</div>
<div className="Home__header">
<img src={svg}></img>
</div>
<div className="Home__main">
<img src={pic} className="Home__pic"></img>
</div>
</Fragment>


 )
}
export default Home;
