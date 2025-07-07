import React, { useEffect, useState } from "react"
import './Cadastro.css'

function PaginaCadastro() {

    function TrataCadastro() {
        
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