import { useState } from 'react';
import './App.css'
import Button from './components/button/Button';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const handleOnClick = () => {
    setIsLoading(true)
  }
  return (<>
    <Button
    variant='secondary'
    variantType='filled'
    type="button"
    classes='shuhaib'
    autoFocus
    onClick={handleOnClick}
    >
      Subscribe web diary
    </Button>

    <hr className='mt-10 mb-5'/>
    <Button
    type='submit'
    variant='tertiary'
    variantType='filled'
    onClick={handleOnClick}
    isLoading={isLoading}
    >
      Make Payment
    </Button>
  </>
  );
}

export default App
