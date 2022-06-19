import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Finalizado(){
    
    const navigate = useNavigate()

    useEffect(()=>{
        if(parseInt(localStorage.getItem('pedido')) === 0){
            console.log(JSON.parse(localStorage.getItem('pedido')))
        }
        else{
            navigate('/Loja')
        }
    })
    
    return(
        <p>Transação finalizada</p>
    )
}

export default Finalizado