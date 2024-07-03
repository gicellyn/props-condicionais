//2. Crie um card que representa um Produto, ele recebe as propriedades: nome, preço unitário, desconto (0 a 100). Mostre as informações no componente e caso o produto tenha desconto exiba o valor descontado e o valor original grifado, como nos cards de lojas online. Segue imagem em anexo como referência.
 
import './CardProduto.css'

function CardProduto(props) {
    return(
        <div className='corpo'>
            <h3>{props.nome}</h3>
            <p className="produtoU">{props.precoUnit}</p>
            <h4 id='desconto'>{props.desconto} de desconto</h4>
            <h2>{429-85.8}</h2>
        </div>

    )
    
}

export default CardProduto;