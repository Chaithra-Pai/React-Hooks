import React, {useState,useEffect} from 'react'

function UseeffectHookTwo() {
    const [ x,setX ] = useState(0);
    const [ y,setY ] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('Use effect called');
        window.addEventListener('mousemove',logMousePosition);

        return () => {
            console.log('unmounting listener');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
        <div>
            X coordinate: {x}, Y coordinate: {y} 
        </div>
    )
}

export default UseeffectHookTwo