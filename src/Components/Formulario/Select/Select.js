import styles from './Select.module.css'

function Select({text, name, handleOnChange}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select onChange={handleOnChange}>
                <option value="1">Dinheiro</option>
                <option value="2">Pix</option>
                <option value="3">Cartão de crédito</option>
            </select>
        </div>
    )
}

export default Select