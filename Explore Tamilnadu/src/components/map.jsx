import { React} from "react";
import img1 from '../image/img1.jpg'
import '../mapcss/map.css'
import { useNavigate } from "react-router-dom";

export default function TNMap(){
    const navigate = useNavigate()
   
    return(
        <div className="Map" style={{backgroundColor:'skyblue'}}>
            <img src={img1} alt="tamilnadu image" />
            <button id="tuty" 
            style={{position: 'absolute', top: '620px', left: '690px', transform: 'translate(-50%, -50%)' ,margin: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            // backgroundColor: 'powderblue',
            color: '#ECF87F',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer' }} 
            onClick={e=>navigate('/tuty')} >Tuticorin</button>
            <button id="madurai" 
            style={{position: 'absolute', top: '500px', left: '685px', transform: 'translate(-50%, -50%)' ,margin: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            // backgroundColor: '#ECF87F',
            color: '#ECF87F',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer' 

        }} 
            onClick={e=>navigate('/madurai')} >Madurai</button>
            <button id="Tirunelveli" 
            style={{position: 'absolute', top: '673px', left: '640px', transform: 'translate(-50%, -50%)' ,margin: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            
            color: '#ECF87F',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer' }} 
            onClick={e=>navigate('/nellai')} >Tirunelveli</button>
            <button id="Coimbatore" style={{position: 'absolute', top: '350px', left: '550px', transform: 'translate(-50%, -50%)' ,margin: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            
            color: '#ECF87F',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer' }} onClick={e=>navigate('/kovai')}>Coimbatore</button>

        </div>
    )   
}