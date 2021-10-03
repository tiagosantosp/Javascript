import React from 'react'

export default function Titulo (props) {
    return (
        <div className="
          bg-indigo-400
            ">
            <h1 className='py-4 text-2xl ml-2 font-bold '>{props.title}</h1>
        </div>
    )
}