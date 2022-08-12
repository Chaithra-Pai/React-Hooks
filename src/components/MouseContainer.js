import React, {useState} from 'react'
import UseeffectHookTwo from './UseeffectHookTwo';

function MouseContainer() {
    const [display,setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <UseeffectHookTwo/>}
        </div>
    )
}

export default MouseContainer