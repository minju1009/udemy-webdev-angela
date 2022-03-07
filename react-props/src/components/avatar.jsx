import React from "react"; 
export default Avatar;

function Avatar(props){
    return ( 
    <img 
        className="circle-img"  
        src={props.imgUrl}
         alt="avatar_img"
  />
    )
}
