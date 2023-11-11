import { useState, useEffect } from "react";

const Formulario = () => {
        let[materiaA, setMateriaA] = useState(0)
        let[materiaB, setMateriaB] = useState(0)
        let[materiaC, setMateriaC] = useState(0)
        let[nome, setNome] = useState('')

        useEffect(() => {
            console.log("o estado mudou");
        }, [nome]);

        const alteraNome = (evento) => {
            // console.log(evento.target.value)
            setNome(estadoAnterior => {
                console.log(estadoAnterior)

                return evento.target.value;
            })
        }

        const renderizaResultado = () => {
            const soma = materiaA + materiaB + materiaC ;
            const media = soma / 3 ;

            if (media >= 7) {
                return(
                    <p> salve {nome} passa</p>
                )
            } else {
                return (
                <p> coe {nome} se é mo otario</p>
                )
            }
        }
    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item =>
            <li key={item}>
                {item}
            </li>)}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            <p>o aluno é um bosta</p>
        {renderizaResultado()};
        </form>
    )
}

export default Formulario;