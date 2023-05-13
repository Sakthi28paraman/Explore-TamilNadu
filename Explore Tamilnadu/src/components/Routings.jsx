import React from 'react'
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Home from './home'
import AddPlace from './addplace'
import ShowResult from './show'
import TNMap from './map'
import Tuty from './tuty'
import Madurai from './madurai'
import Nellai from './nellai'
import Coimbatore from './coimbatore'

export default function Routing (){
    return(
        <Router>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addPlace' element={<AddPlace/>} />
            <Route path='/showdetail' element={<ShowResult/>} />
            <Route path='/map' element={<TNMap />} />
            <Route path='/tuty' element={<Tuty/>} />
            <Route path='/madurai' element={<Madurai />} />
            <Route path='/nellai' element={<Nellai/>} />
            <Route path='/kovai' element={<Coimbatore />}></Route>
            </Routes>
        </Router>
    )
} 