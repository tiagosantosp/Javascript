import Input from './Components/Input';
import Pill from './Components/Pill';
import Titulo from './Components/Titulo';


function App() {
  //{(data => <Pill key={data.word} word={data.word} amount={data.amount}/>}
  return (
    <>
      <Titulo title='Palavras Mais Usadas'/>
      <Input/>
      <div className='flex'>
        <Pill/>
      </div>
    </>
  );
}

export default App;
