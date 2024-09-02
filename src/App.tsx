import './App.css'
import Button from './components/button/Button';

function App() {
  const handleOnClick = () => {
    alert('good bro')
  }
  return (<>
    <Button
    type="button"
    classes='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer'
    disabled
    autoFocus
    onClick={handleOnClick}
    >
      Subscribe web diary
    </Button>
  </>
  );
}

export default App
