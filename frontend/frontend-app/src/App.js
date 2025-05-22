import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // ⬅️ Certifique-se de importar o CSS aqui

function App() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [documento, setDocumento] = useState('');
    const [resultado, setResultado] = useState('');

    const API_URL = 'http://localhost:8080/user';

    const handleCadastrar = () => {
        const usuario = { nome, email, documento };
        axios.post(API_URL, usuario)
            .then(response => {
                setResultado('✅ Usuário cadastrado: ' + JSON.stringify(response.data));
            })
            .catch(error => {
                setResultado('❌ Erro ao cadastrar: ' + error.message);
            });
    };

    const handleBuscar = () => {
        axios.get(API_URL, { params: { email } })
            .then(response => {
                setResultado('🔍 Usuário encontrado: ' + JSON.stringify(response.data));
            })
            .catch(error => {
                setResultado('❌ Erro ao buscar: ' + error.message);
            });
    };

    const handleDeletar = () => {
        axios.delete(API_URL, { params: { email } })
            .then(() => {
                setResultado('🗑️ Usuário deletado com sucesso.');
            })
            .catch(error => {
                setResultado('❌ Erro ao deletar: ' + error.message);
            });
    };

    return (
        <div className="container">
            <h1>Gerenciamento de Usuários</h1>

            <div className="input-group">
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Documento"
                    value={documento}
                    onChange={e => setDocumento(e.target.value)}
                />
            </div>

            <div className="button-group">
                <button onClick={handleCadastrar}>Cadastrar</button>
                <button onClick={handleBuscar}>Buscar</button>
                <button onClick={handleDeletar}>Deletar</button>
            </div>

            <div className="resultado">
                <strong>Resultado:</strong>
                <p>{resultado}</p>
            </div>
        </div>
    );
}

export default App;
