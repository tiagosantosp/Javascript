import React from 'react'

export default function Input(props) {

    function geraDados() {
        let dados = document.getElementById('teste')
        let arquivo = dados.files
    }

    return (
        <>
        <input id='teste' type='file'
            className='mt-4'
            multiple
            accept='.srt' />
            <button onClick={geraDados} className='m-4 border-2 p-2 font-bold bg-indigo-300 rounded-lg' >Calcular</button>
        </>
        
    )
}