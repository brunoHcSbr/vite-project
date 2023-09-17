import style from "./index.module.css"

interface Model {
    type: string
    placeholder: string
}

export default function InputAtv({type,placeholder}:Model){
    return(
        <>
            <input placeholder={placeholder} className={style.InputAtv} type={type} />
        </>
    )
}