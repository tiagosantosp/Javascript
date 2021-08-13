import Cliente from "../core/Cliente";
import { IconeLixo, IconesEdicao } from "./Icones"

interface TabelaProps {
    cliente: Cliente[],
    clienteSelecionado?: (cliente: Cliente) => void,
    clienteExcluido?:  (cliente: Cliente) => void

}

export default function Tabela (props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>  
        )
    }

    function renderizarDados() {
        return props.cliente?.map((cliente, i) =>{
            return (
                <tr key={cliente.id} 
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-2">{cliente.id}</td>
                    <td className="text-left p-2">{cliente.nome}</td>
                    <td className="text-left p-2">{cliente.idade}</td>
                    {exibirAcoes? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes (cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center 
                      text-green-600 rounded-full p-2 
                      hover:bg-purple-50`}>
                        {IconesEdicao}
                    </button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)}  className={`
                    flex justify-center items-center 
                    text-red-600 rounded-full p-2 
                    hover:bg-purple-50`}>
                        {IconeLixo}
                    </button>
                ) : false}
                
                
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden ">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-200
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}