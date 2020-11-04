import React, { useState } from 'react'
import bs from './bs';

function BinarySearch(props) {
    const [result, setResult] = useState(null);
    const [input, setInput] = useState('');


    if (input) {
        if (bs(props.arr, input) !== result) {
            setResult(bs(props.arr, input))
        }
    }


    return (
        <div>
            <h3>Binary Search</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} name='binary-search' />
            {result && input.trim() > 0
                ? <div className='result'>
                    <p>{result}</p>
                </div>
                : null}
        </div>
    )
}

export default BinarySearch
