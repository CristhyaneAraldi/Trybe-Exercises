import './App.css';
import Image from './Image';
import cuteCat from './cuteCat.webp';

function App() {
  return (
    <main>
      <Image source={cuteCat} alternativeText='Cute cat staring' />
    </main>
  );
}

export default App;
