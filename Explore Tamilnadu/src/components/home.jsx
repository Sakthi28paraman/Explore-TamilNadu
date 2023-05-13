import React from "react";
import { useNavigate } from "react-router-dom";
import '../mapcss/home.css'
import tn from '../image/Tamilnadu image.png'

export default function Home(){
    const navigate = useNavigate()
    // const hanndleSubmit=()=>{
    //     window.location.replace('http"//localhost:3000/Map')
    // }


    const home = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        height: '550px',
        borderStyle: "solid",
        borderRadius: "50px",
        width: "460px",
        position:"fixed",    
        top:"110px",
        // bottom: "100px",
        left: "525px",
        // right: "20px",
        backgroundColor:"#ECF87F"

    }
    const main={
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        height: '100vh',
        backgroundColor:"#4CAF50"
        
    }

    const goButton = {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
    return(
        <div style={main}>
            <div className="home" style={home}>
            <h1 style={{textAlign:"center",color:"#4CAF50",fontWeight:"100px",marginTop:"100px"}}>Explore Tamil Nadu</h1>
                {/* <img src={tn} alt="Tamilnadu Emblem" /> */}
                <img src={tn} alt="Tamilnadu emblem" className="img" />
            <button onClick={e=>navigate('/map')} className="gobutton" style={goButton}>Let's Go</button>
            <button onClick={e=>navigate('/addPlace')} className="addbutton" style={goButton}>Add new Place</button>
            </div>
            
        </div>
    )
}