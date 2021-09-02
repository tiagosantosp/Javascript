import { useState } from "react";

export default function useForm () {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        formularioVisivel: 'form',
        tabelaVisivel: 'tabela',
        exibirTabela,
        exibirFormulario
    }
}