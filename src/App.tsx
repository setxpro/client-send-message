import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/GlobalStyle';
import Form from './components/Form';

function App() {
  return (
    <>
        <ToastContainer />
        <GlobalStyle/>
        <Form/>
    </>
  )
}

export default App
