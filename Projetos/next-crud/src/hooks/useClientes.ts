import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useForm from "./useForm"

export default function useClientes () {
    const repo: ClienteRepositorio = new ColecaoCliente()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    const {exibirFormulario, exibirTabela, tabelaVisivel, formularioVisivel} = useForm()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.Obter().then(clientes => {
        setClientes(clientes)
        exibirTabela()
        })
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
    async function clienteExcluido(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente (cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }
    function novoCliente () {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }
    

    return {
        novoCliente,
        salvarCliente,
        clienteExcluido,
        clienteSelecionado,
        obterTodos,
        cliente,
        clientes,
        formularioVisivel,
        tabelaVisivel, 
        exibirTabela
    }
}