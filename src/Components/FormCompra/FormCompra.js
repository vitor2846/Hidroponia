import {useState} from 'react'
import Input from "../Formulario/Input/Input"
import styles from './FormCompra.module.css'

function FormCompra({usuario, handleSubmit}){
    
    const [informacoes, setInformacoes] = useState()

    function handleChange(e){
        setInformacoes({...informacoes, [e.target.name]: e.target.value })
    }

    function submit(e){
        e.preventDefault()
        handleSubmit(informacoes)
    }
    return(
        <>
            <h1>Formulario de compra</h1>
            <p>Nome: {usuario.NOME}</p>
            <p>E-mail: {usuario.EMAIL}</p>

            <h2>Informações para entrega:</h2>
            <form className={styles.formulario} onSubmit={submit}>
                <Input text="Telefone" placeholder="Ex: 51999999999" name="telefone" type="text" handleOnChange={handleChange}/>
                <Input text="Rua" placeholder="Digite o nome da sua rua..." name="rua" type="text" handleOnChange={handleChange}/>
                <Input text="Nº" placeholder="Digite o número do seu endereço..." name="num" type="number" handleOnChange={handleChange}/>
                <Input text="Complemento" placeholder="Digite o complemento..." name="complemento" type="text" handleOnChange={handleChange}/>
                <Input text="Bairro" placeholder="Digite o seu bairro..." name="bairro" type="text" handleOnChange={handleChange}/>
                <Input text="Cidade" placeholder="Digite a sua cidade..." name="cidade" type="text" handleOnChange={handleChange}/>
                <Input text="Estado" placeholder="Digite o seu estado..." name="estado" type="text" handleOnChange={handleChange}/>
                
                <a href="https://pag.ae/7Yo6qNdjp/button" target="_blank" title="Pagar com PagSeguro"><img src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></a>

                <a href="https://pag.ae/7Yo8d-tm3/button" target="_blank" title="Pagar com PagSeguro"><img src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></a>

            </form>
        </>
    )
}

export default FormCompra

//<a href="https://pag.ae/7Yo6qNdjp/button" target="_blank" title="Pagar com PagSeguro"><img src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></a>