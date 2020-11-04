import React, { useState } from 'react'
import ls from './ls';

function LinearSearch(props) {
    const [result, setResult] = useState(null)
    const [input, setInput] = useState('');
    const [timer, setTimer] = useState(null)

    if (input) {
        if (ls(props.arr, input) !== result) {
            const d = new Date()
            console.log(d)
            setResult(ls(props.arr, input))
            const diff = new Date() - d;
            console.log(diff)
            setTimer(diff)

        }
    }


    return (
        <div>
            <h3>Linear Search</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} name='linear-search' />
            {result && input.trim() > 0
                ? <div className='result'>
                    <p>{result} in {timer} milliseconds</p>
                </div>
                : null}
        </div>
    )
}

export default LinearSearch
