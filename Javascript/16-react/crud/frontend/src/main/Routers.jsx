import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props => 
    <Switch>{/* SERVE PARA ESCOLHER A ROTA */}
        <Route exact path='/' component={Home}/ > {/* INFORMANDO QUAIS AS ROTAS */}
        <Route path='/users' component={UserCrud}/>
        <Redirect  from='*' to='/' /> {/* CASO A ROTA ESTEJA ERRADA VAO PARA HOME */}
    </Switch>