import { useState } from "react"
import Button from "../Formulario/Button/Button"
import Input from "../Formulario/Input/Input"
import LinkButton from "../LinkButton/LinkButton"
import styles from './FormEditEst.module.css'

function FormEditEst({nomeAtual, handleSubmit}){
    
    const [body, setBody] = useState({})

    function handleChange(e){
        setBody({...body, [e.target.name]: e.target.value })
    }

    function submit(e){
        e.preventDefault()

        if (body.novo_nome !== nomeAtual){
            handleSubmit(body)
        }
        else{
            alert('O novo nome não pode ser igual ao nome atual.')
        }
    }

    return(
        <form className={styles.formulario} onSubmit={submit}>

            <Input type='text' text='Novo nome da estufa' name='novo_nome' placeholder='Digite o novo nome para a estufa...' handleOnChange={handleChange}/>
            <Button text='Alterar'/>
            <LinkButton to='/Estufas' text='Voltar'/>

        </form>
    )
}

export default FormEditEst