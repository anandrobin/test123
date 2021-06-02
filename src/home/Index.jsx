import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import image from './inventory.jpg';
function Home() {

    return (

       
            <div style={{
             backgroundColor: "white", 
             width: "100%",
             height: "100%",
             //position: "absolute",
             //top: "0",
             left: "0",
             opacity: "0.7"
             }}>

            <h1 style={{textAlign: "center"}}>Inventory Manager</h1>     
            <img src={image}
            alt="Background"
            position ="absolute"
            
            // justifyContent= "center"
            // alignItems= "center"
            // margin= "auto"
              width= "100%"
            //position="absolute"
             //width= "70%"
             //right="20px"
             //left="20px"
             //height= "20%"
            />
            
            
       
                <p style={{textAlign: "center",
                        fontFamily: "Arvo",
                        fontSize: "250%"
                          }}>"Inventory acuracy is cornerstone to sucess.<br/> 
                          It is a bedrock topic to improving service levels, 
            <br/> reducing lead times, increasing margins, <br/>improving efficiencies, reducing inventory levels...<br/>and the list goes on."</p>

            <div style={{
             //backgroundColor: "#6b74ea", 
            backgroundColor:"#2E39DC",
            //backgroundColor:"#084BAF",
             width: "100%",
             height: "70%",
             position: "absolute",
             //top: "0",
             left: "0",
             opacity: "0.7"
             }}>

                 <h1 style={{textAlign: "center",
                marginTop:"5%",
                color:"#FDFEFB"}}>Embrace change at speed and optimise performance</h1>
                <p style={{
                    marginTop:"5%",
                    textAlign: "center",
                    fontFamily: "serif",
                    fontSize: "200%",
                    //fontWeight:"30px",
                    color:"#FDFEFB"
                }}>
                   Whether you need to operate in thriving or challenging times,<br/> 
                    Inventory Manager is changing how businesses compete and operate<br/> 
                    with faster, more intuitive and tailored inventory management solutions. <br/>
                    With Inventory Manager, you will be choosing a next-generation solution<br/> 
                    to accelerate efficiencies and run a more agile business.</p>
            </div>
            
            
            </div>

            
        /* <div style={{backgroundColor: "#33475b",  margin: "auto", width: '1000px',
        height: '1000px'}}>
            
            <h1 style={{textAlign:"center", fontFamily: "arial, sans-sarif", fontWeight: "bold"}}>Welcome to Inventory Management System </h1>
            <p>  </p>
        </div> */

        /* <div style={{backgroundColor: "black",  width: '1000px',
        height: '1000px'}}>
            
            
        </div> */

        
    );
}

export { Home };