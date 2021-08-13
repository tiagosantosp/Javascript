import React from "react";
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
    bg-gradient-to-r from-blue-500  to-purple-600 
    text-white `} >
      <Layout titulo="Cadastro Simples">
        <Tabela 
          cliente={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
