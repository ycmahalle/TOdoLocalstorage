import React,{useState,useEffect} from "react";
import "../sass/weather.css";
const Weather=()=>{
     const [city, getCity] = useState(null);
     const [search , setSearch]=useState("");
    
        useEffect(() => {
            const fetchAPi=async()=>{
                const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9bbbde1d020e655c7bfa98cbac8d2a2b
                `;
                const response = await fetch(url);
                let resjson = await response.json(); 
                console.log(resjson.name);
                
            }
            fetchAPi();
        }, [setSearch])
    return(
        <>
            {/* <div className="header d-flex justify-content-center">
            </div> */}

            <div className=" row col-lg-12 d-flex flex-column " style={{height:"90vh"}}>
            <h1 className="text-center"> Weather App</h1>
                <div className="card align-self-center mt-5 col-lg-3 col-xs-4 col-sm-4 col-md-7  h-75">
                     <div className="card-header">
                        <input type="search" 
                        className="form-control rounded-pill" 
                        onChange= {(event)=>{
                            setSearch(event.target.value);
                        }}
                        /> 
                     </div>
                     <div className="card-body">
                            {/* <h3 className="location">{city}</h3> */}

                            <h1 className="temp h-75 d-flex justify-content-center align-items-center  text-uppercase">
                                    {search}     
                            </h1>
                            <div className="temp_det text-center">
                                    <h3>5.25  `Cel</h3>
                                    <p>min : 5.25  | max : 5.25</p>
                            </div>
                     </div>
                </div>
            </div>
        </>
    );
}
export default Weather;