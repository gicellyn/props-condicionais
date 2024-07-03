// 1. Crie um componente CardAluno que recebe as propriedades: nome, série, média. Você deve exibir estes dados dentro do componente e exibir o texto "Aprovado!" caso a média seja maior ou igual a 7 e "Reprovado!" caso a média seja menor. Tente aplicar classes diferentes dependendo da condição, verde e vermelho, para aprovado e reprovado.

import './CardAluno.css';


function CardAluno({ nome, serie, media }) {
    if (media >= 7) {
        return (
            <div>
                <h4>Aluno: {nome}</h4>
                <h4>Série: {serie}</h4>
                <h4>Média: {media}</h4>
                <p className="verde">Aprovado!</p>
            </div>
        )
    } else {
        return (
            <div>
                <h4>Aluno: {nome}</h4>
                <h4>Série: {serie}</h4>
                <h4>Média: {media}</h4>
                <p className="vermelho">Reprovado!</p>
            </div>)

    }

    // return (
    //     <>
    //         <h4>Aluno: {nome}</h4>
    //         <h4>Série: {serie}</h4>
    //         <h4>Média: {media}</h4>

    //         {/* {media >= 7 ? `Aprovado!` : `Reprovado!`} */}
    //     </>
    // )
}

export default CardAluno;