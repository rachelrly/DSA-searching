import React, { useState } from 'react'

function LinearSearch(props) {
    const [result, setResult] = useState(null)
    const [input, setInput] = useState('');
    return (
        <div>
            <h3>Linear Search</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} name='linear-search' />
            {result
                ? <div className='result'>
                    <h3>The result is {result}</h3>
                </div>
                : null}
        </div>
    )
}

export default LinearSearch
