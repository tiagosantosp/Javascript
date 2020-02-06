function Pessoa(){
    this.idade = 0

    //Outra maneira de travar a referencia do this é colocando ele em uma constante
    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa