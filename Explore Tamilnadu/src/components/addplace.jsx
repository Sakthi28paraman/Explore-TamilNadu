import React,{useState} from 'react';
import axios from 'axios'
import '../mapcss/addplace.css'

export default function AddPlace(){
    const [city,setCity] = useState('');
    const [description,setDescription] = useState('')
    const [image,setImage] = useState(null)
    const [name,setName] = useState('');
    // let name,value
    const handlePlace = (e) =>{
        setName(e.target.value)
    }
    const handleCity = (e) =>{
        setCity(e.target.value)
    }
    const handleDesc=(e)=>{
        setDescription(e.target.value)
    }

    const handleImage = (e) =>{
        setImage(e.target.files[0])
    }
    
    const handlesubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('city',city);
        formData.append('description',description);
        formData.append('image',image);
        await axios.post('/api/adddetails',formData,{
            header:{
                'Content-Type' : 'multipart/form-data'
            }
        })

    }

    return(
        <div className='div1'>
            <div className='div2'>
            <h2>Adding Details to the Database</h2>
            <form action="">
                Place Name : <input type="text" name="name" id="name" value={name} onChange={handlePlace} /><br />
                City: <input type="text" name="city" id="city" value={city} onChange={handleCity} /><br />
                Description: <textarea name="description" id="desc" value={description} cols="30" rows="10" onChange={handleDesc}></textarea><br />
                image : <input type="file" onChange={handleImage} name='file'/><br />
                <button onClick={handlesubmit}>Add to database</button>
            </form>
            </div>
        </div>
        
    
    )

}



