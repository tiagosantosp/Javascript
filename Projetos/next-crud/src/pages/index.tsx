import React from "react";
import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Tiago', 26, '2'),
    new Cliente('Dani', 27, '3'),
    new Cliente('Maju', 3, '4')
  ]
  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome )
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome )
  }
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500  to-purple-500 
    text-white `} >
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="blue" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela 
          cliente={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
