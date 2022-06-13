import NavBar from './Components/NavBar/NavBar'
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login'
import Empresa from './Pages/Empresa'
import Contatos from './Pages/Contatos'
import api from './Services/api'
import Perfil from './Pages/Perfil/Perfil'
import NovaEstufa from './Pages/NovaEstufa/NovaEstufa'
import Estufas from './Pages/Estufas/Estufas'
import Detalhes from './Pages/Detalhes/Detalhes'
import Editar from './Pages/Editar/Editar'


function App() {
    const [logado, setLogado] = useState(0)
    const [usuario, setUsuario] = useState({})

    function login(user){
      api.post('/login', user)
      .then(({data})=>{
          if(data.usuario !== false){
            setUsuario(data.usuario)
            setLogado(1)
          }
          else{
            alert(data.mensagem)
          }
      })
      .catch((err)=>{console.log(err)})
    }

    function cadastrarUsuario(user){
        api.post('/cadastrar_usuario', user)
        .then(({data})=>{ 
          alert(data.mensagem)
          
          if(data.cadastro){
            login({'email': user.email, 'senha': user.senha1})
          }
          
        })
        .catch((err)=>{console.log(err)})
    }

    function formCad(){
        setLogado(2)
    }

    function sair(){
        setUsuario({})
        setLogado(0)
    }
  
  return (

    <Router>
      
      <NavBar logado={logado} nome={usuario} onClick={sair}/>

      <Routes>
        <Route exact path='/' element={<Login logado={logado} login={login} formCad={formCad} sair={sair} cadastrar={cadastrarUsuario} />}/>
        <Route path='/Perfil' element={<Perfil usuario={usuario} onClick={sair} />}/>
        <Route path='/Empresa' element={<Empresa/>}/>
        <Route path='/Contatos' element={<Contatos/>}/>
        <Route path='/Novaestufa' element={<NovaEstufa usuario={usuario}/>}/>
        <Route path='/Estufas' element={<Estufas ID={usuario.ID}/>}/>
        <Route path='/Editar/:nome/:idUsuario' element={<Editar/>}/>
        <Route path='/Detalhes/:idUsuario/:idEstufa/:nomeEstufa' element={<Detalhes/>}/>
      </Routes>

    </Router>

  )
}

export default App;
