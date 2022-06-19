import NavBar from './Components/NavBar/NavBar'
import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login'
import Loja from './Pages/Loja/Loja'
import Contato from './Pages/Contato/Contato'
import api from './Services/api'
import Perfil from './Pages/Perfil/Perfil'
import NovaEstufa from './Pages/NovaEstufa/NovaEstufa'
import Estufas from './Pages/Estufas/Estufas'
import Detalhes from './Pages/Detalhes/Detalhes'
import Editar from './Pages/Editar/Editar'
import Compra from './Pages/Compra/Compra'
//import Footer from './Components/Footer/Footer'
import Finalizado from './Pages/Finalizado/Finalizado'


function App() {
    const [logado, setLogado] = useState(0)
    const [usuario, setUsuario] = useState({})

    useEffect(()=>{
      if(localStorage.getItem('status') === 1){
        setLogado(1)
        setUsuario(localStorage.getItem('usuario'))
      }

    }, [])

    useEffect(()=>{
      if(localStorage.getItem('status') === 1){
        setLogado(1)
        setUsuario(localStorage.getItem('usuario'))
      }
    }, [logado])

    function login(user){
      api.post('/login', user)
      .then(({data})=>{
          if(data.usuario !== false){
            setUsuario(data.usuario)
            setLogado(1)

            localStorage.setItem('status', 1)
            localStorage.setItem('usuario', JSON.stringify(data.usuario))
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
      localStorage.clear()
      setUsuario({})
      setLogado(0)
    }
  
  return (

    <Router>
      
      <NavBar />

      <Routes>
        <Route exact path='/' element={<Login logado={logado} login={login} formCad={formCad} sair={sair} cadastrar={cadastrarUsuario} />}/>
        <Route path='/Perfil' element={<Perfil onClick={sair} />} />
        <Route path='/Loja' element={<Loja/>}/>
        <Route path='/Contato' element={<Contato />}/>
        <Route path='/Novaestufa' element={<NovaEstufa />}/>
        <Route path='/Estufas' element={<Estufas usuario={usuario}/>}/>
        <Route path='/Editar/:nome/:idUsuario' element={<Editar/>}/>
        <Route path='/Detalhes/:idUsuario/:idEstufa/:nomeEstufa' element={<Detalhes/>}/>
        <Route path='/Comprar' element={<Compra/>}/>
        <Route path='/Finalizado/:transacao_id' element={<Finalizado/>}/>
      </Routes>

    </Router>

  )
}

export default App;
