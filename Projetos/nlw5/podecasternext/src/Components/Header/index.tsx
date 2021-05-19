import format from 'date-fns/format'
import { ptBR } from 'date-fns/locale'

import styles from  './styles.module.scss'

export function Header() {
    const CurrtentDate = format(new Date(), 'EEEEEE, d, MMM', {
        locale: ptBR
    })
    
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Logo Podecaster"/>

            <p>O melhor para você ouvir sempre!</p>

            <span>{CurrtentDate} </span>
        </header>
    )
}