class controleRemoto {
    
    ligar(obj){
        return obj.ligado = true
    }
    desligar(obj){
        return obj.ligado = false
    }
   

}

class televisao {
    constructor(controleRemoto){
        this.ligado = false
        this.controlador = controleRemoto
    }
    
    status(){
        console.log(this.ligado)
    }

}

const controle = new controleRemoto()
const tv = new televisao(controle)

tv.controlador.ligar(tv)

tv.status()