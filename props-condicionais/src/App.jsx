// import './App.css'
import CardAluno from './components/CardAluno';
import CardProduto from './components/CardProduto';

function App() {

  return (
    <>
      <h3>Exercicio 1</h3>
      <CardAluno nome={"João"} serie={"9°"} media={6.5} />
      <hr />
      <CardProduto nome="Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado | Cor Preta" precoUnit={429.00} desconto={"20%"} />
    </>
  );
}

export default App
