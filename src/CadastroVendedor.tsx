import React, { useEffect, useState } from "react"
import './Cadastro.css'

interface VendedorState {
    id: number,
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    genero: string,
}

function PaginaCadastro() {
    const [nome, setNome] = useState("")
    const [cpf, setCPF] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [genero, setGenero] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [vendedor, setProdutos] = useState<VendedorState[]>([])
    useEffect(() => {

    }, [])
    async function TrataCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //Criar um novo produto
        const novoVendedor: VendedorState = {
            nome: nome,
            cpf: cpf,
            email: email,
            senha: senha,
            genero: genero
        }
    }
    function trataNome(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function trataCPF(event: React.ChangeEvent<HTMLInputElement>) {
        setCPF(event.target.value)
    }
    function trataEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }
    function trataSenha(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value)
    }
    function trataGenero(event: React.ChangeEvent<HTMLSelectElement>) {
        setGenero(event.target.value)
    }
    return (
        <>
            <header>

            </header>
            <main>
                <div className="container-cadastro">
                    <form onSubmit={TrataCadastro}>
                        <input type="text" name="nome" id="nome" onChange={trataNome} placeholder="Nome" />
                        <input type="text" name="cpf" id="cpf" onChange={trataCPF} placeholder="CPF" />
                        <input type="email" name="email" id="email" onChange={trataEmail} placeholder="Email" />
                        <input type="password" name="senha" id="senha" onChange={trataSenha}placeholder="Senha" />
                        <select name="genero" id="genero" onChange={trataGenero}>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>
            </main>
            <footer></footer>
        </>
    )
}
export default PaginaCadastro