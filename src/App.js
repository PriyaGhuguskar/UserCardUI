import './App.css';
import Card from './Component/Card';
import pageBackground from './assets/bg.webp'

function App() {
  return (
    <div className=" bg-cover h-screen w-full flex items-center justify-center flex-col" style={{ backgroundImage: `url(${pageBackground})` }}>
      <Card />
      {/*  */}
    </div>
  );
}

export default App;
