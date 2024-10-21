import pause from './icons/pause.svg'
import play from './icons/play.svg'
import previous from './icons/previous.svg'
import right from './icons/right-arrow.svg'
import './Pla.css'
import {useState} from 'react'
import React from 'react'

export default function Player(){

    const [paused,change] = useState(pause);
    function next(){
        (paused===pause)? change(play):change(pause);
    }
    return(
        <>
        <div className='player' >
            
            <div className='play'>
                <button className='ton'  onClick={null}> <img src={previous} draggable='false' className='size' alt='123'/></button>
                <button className='ton' onClick={next}> <img src={paused} draggable='false' className='size' alt='123'/></button>
                <button className='ton' onClick={null}> <img src={right} draggable='false' className='size' alt='123'/></button>
            </div>
        </div>
        </>
    )
}