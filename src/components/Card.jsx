import React from "react";

const Card =(props)=>{
    return(
        <>
            <div className="card" style={{ width: "20vw" , background:props.background}}>
            <div className="card-img" >
                <img src={props.imgsrc}  className="card-img-top" alt="" />
            </div>
                <div className="card-body">
                    {/* crd titler  */}
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> 
                        {props.desc} 
                    </p>
                    <a href={props.link} target="_blank" className="btn btn-primary"> More -> </a>
                </div>
            </div>
                    
        </>
    );
}
export default Card;