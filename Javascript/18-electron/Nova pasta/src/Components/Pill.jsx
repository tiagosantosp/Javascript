import React from 'react'

export default function Pill (props) {
    const word = 'bad'
    const amount = 1000

    return (
        <>
        <div className='m-2 bg-purple-300 rounded-full font-bold p-2'>
            <p>{word} <span className='bg-blue-300 text-gray-700 rounded-full p-1'>{amount}</span></p>
        </div>

        </>
    )
}