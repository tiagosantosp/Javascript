interface BotaoProps {
    children: any
    cor?: 'green'|'blue'|'grey'
    className?: string
    onClick?: () => void
}

export default function Botao (props) {
    const cor = props.cor ? props.cor : 'grey'

    return(
    <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700
            text-white  px-4 py-2 rounded-md 
            ${props.className}`}>
            {props.children}
        </button>
    )
}