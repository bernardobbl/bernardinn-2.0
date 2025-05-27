import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [documento, setDocumento] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [resultado, setResultado] = useState('');

 const API_URL = 'http://localhost:8080/user';



  // 👉 Cadastrar usuário
  const handleCadastrar = () => {
    const usuario = {
      nome,
      email,
      documento,
      endereco: {
        rua,
        bairro,
        cep,
        cidade,
        numero,
        complemento
      }
    };

    axios.post(API_URL, usuario)
      .then(response => {
        setResultado('✅ Usuário cadastrado:\n' + JSON.stringify(response.data, null, 2));
      })
      .catch(error => {
        setResultado('❌ Erro ao cadastrar: ' + error.message);
      });
  };

  // 🔍 Buscar usuário por e-mail
  const handleBuscar = () => {
    axios.get(API_URL, { params: { email } })
      .then(response => {
        const usuario = response.data;
        setNome(usuario.nome);
        setDocumento(usuario.documento);

        // Caso venha endereço junto
        if (usuario.endereco) {
          setRua(usuario.endereco.rua || '');
          setBairro(usuario.endereco.bairro || '');
          setCep(usuario.endereco.cep || '');
          setCidade(usuario.endereco.cidade || '');
          setNumero(usuario.endereco.numero || '');
          setComplemento(usuario.endereco.complemento || '');
        }

        setResultado('🔍 Usuário encontrado:\n' + JSON.stringify(response.data, null, 2));
      })
      .catch(error => {
        setResultado('❌ Erro ao buscar: ' + error.message);
      });
  };

  // 🗑️ Deletar usuário por e-mail
  const handleDeletar = () => {
    axios.delete(API_URL, { params: { email } })
      .then(() => {
        setResultado('🗑️ Usuário deletado com sucesso.');
        setNome('');
        setDocumento('');
        setRua('');
        setBairro('');
        setCep('');
        setCidade('');
        setNumero('');
        setComplemento('');
      })
      .catch(error => {
        setResultado('❌ Erro ao deletar: ' + error.message);
      });
  };

  return (
    <div className="container">
      <h1>Gerenciamento de Usuários</h1>

      <div className="input-group">
        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder="Documento" value={documento} onChange={e => setDocumento(e.target.value)} />

        <input type="text" placeholder="Rua" value={rua} onChange={e => setRua(e.target.value)} />
        <input type="text" placeholder="Bairro" value={bairro} onChange={e => setBairro(e.target.value)} />
        <input type="text" placeholder="CEP" value={cep} onChange={e => setCep(e.target.value)} />
        <input type="text" placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
        <input type="text" placeholder="Número" value={numero} onChange={e => setNumero(e.target.value)} />
        <input type="text" placeholder="Complemento" value={complemento} onChange={e => setComplemento(e.target.value)} />
      </div>

      <div className="button-group">
        <button onClick={handleCadastrar}>Cadastrar</button>
        <button onClick={handleBuscar}>Buscar</button>
        <button onClick={handleDeletar}>Deletar</button>
      </div>

      <div className="resultado">
        <strong>Resultado:</strong>
        <pre>{resultado}</pre>
      </div>
    </div>
  );
}

export default App;
