import React from 'react'//devemos importar o react pois ele que faz tudo por traz dos métodos 
import ReactDOM from 'react-dom'//ReactDom que interage com a DOM

import Primeiro from './componentes/primeiro'//importando um componente de arquivo externo
import BomDia from './componentes/BomDia'
import {BoaTarde, BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//Todo componente deve iniciar com letra maiúscula


ReactDOM.render(//ReactDom possui a funçao Render para renderizar os componentes na tela

    //O primeiro parametro do render são os componentes
    <>
    <Primeiro/> 
    <BomDia nome="Tiago"/>
    <BoaTarde nome="Tiago"/>
    <BoaNoite nome="Tiago"/>
    <Saudacao tipo="BOM DIA" nome="TESTE"/>
    <Pai nome="Tiago" sobrenome="Santos">
        <Filho nome="Maria" sobrenome='Santos'></Filho>
    </Pai>
    </>,
    document.getElementById('root')//o segundo parametro do render é qual elemento será alterado no HTML
)