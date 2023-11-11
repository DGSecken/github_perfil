import { useEffect, useState } from "react"

import styles from "./ReposList.module.css"


const ReposList = ({nomeUsuario}) => {
    const [repos, SetRepos] = useState([]);
    const [estaCarregando, SetEstaCarregando] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                SetEstaCarregando(false);
                SetRepos(resJson);
            }, 3000);
            console.log(resJson);
        })
    }, [nomeUsuario]);

    return( 
        <div className="container">
    {estaCarregando ?(
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url}) => (
                    <li key={id} className={styles.listItem}>
                        <div className={styles.itemName}>
                        <b>Nome:</b> {name}
                        </div>
    
                        <div className={styles.itemLanguage}>
                        <b>Linguagem:</b> {language}
                        </div>
    
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar o Github</a>
    
                    </li>
                ))}
            </ul>
            ) }

        </div>

    )
}

export default ReposList