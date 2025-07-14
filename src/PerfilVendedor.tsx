import React, { useEffect, useState } from "react"

import './PerfilVendedor.css'

//http://localhost:8000/pefilvendedor


//Atualizar iformações e Deletar
function PaginaVendedor() {

    return (
        <>
            <header>

            </header>
            <main>
                <div className="card">
                    <div className="avatar">
                        <img src="" alt="" />
                    </div>
                    <div className="dados">
                        <h1>Nome</h1>
                        <h2>ID</h2>
                        <h2>Email</h2>
                        <h2>Senha</h2>
                        <h2>Gênero</h2>
                        <input type="submit" value="Deletar Conta" />
                    </div>
                </div>
            </main>
        </>
    )
}
export default PaginaVendedor