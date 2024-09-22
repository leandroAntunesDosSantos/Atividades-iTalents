import './App.css';

function App() {
  const nome = "Mariana";
  const idade = 20;
  const animalEstimação = "cachorro";
  const nomeAnimal = "Belinha";

 
  return (
    <div className='container'>
      <h1>Olá, {nome}</h1>
      {idade > 18 ? <h1>Você é maior de idade</h1> : <h1>Você é menor de idade</h1>}
      <h2>Seu animal de estimação é um {animalEstimação}</h2>
      <h2>O nome dela é {nomeAnimal}</h2>
    </div>
  );
}

export default App;
