import React from 'react'
import { ipcRenderer } from 'electron';

export default function Input(props) {

    function geraDados() {
        let dados = document.getElementById('teste')
        let arquivo = dados.files
        ipcRenderer.send('canal' , 'ping')
        ipcRenderer.on('canal', (event, resp) => {
            console.log(resp)
        })
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