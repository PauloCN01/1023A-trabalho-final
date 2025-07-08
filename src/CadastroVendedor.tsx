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
    const [vendedor, setProdutos] = useState<VendedorState[]>([])
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
    return (
        <>
            <header>

            </header>
            <main>
                <div className="container-cadastro">
                    <form onSubmit={TrataCadastro}>
                        <input type="text" name="nome" id="nome" placeholder="Nome" />
                        <input type="text" name="cpf" id="cpf" placeholder="CPF" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="password" name="senha" id="senha" placeholder="Senha" />
                        <select name="genero" id="genero">
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