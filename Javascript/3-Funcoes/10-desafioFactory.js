function pessoa(nome){
        this.nome = nome,
        this.falar = function(){
            console.log(`meu nome é ${nome}`)
        }
}

const p1 = new pessoa('tiago')
p1.falar()