import React from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";


export default function Home() {
  
  const { novoCliente,
    salvarCliente,
    clienteExcluido,
    clienteSelecionado,
    cliente, clientes,
    tabelaVisivel, exibirTabela} = useClientes()

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500  to-purple-500 
    text-white `} >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="blue" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela 
              cliente={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>  
        ): (
          <Formulario  
            cliente={cliente}
            clienteMudou={salvarCliente }
            cancelado={() => exibirTabela()}/>
        )}
        
      </Layout>
    </div>
  )
}
