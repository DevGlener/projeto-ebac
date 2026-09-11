import { RouterProvider } from 'react-router-dom';
import Router from './routes';
import GlobalStyle from './styles/Globals';

function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </>
  );
}

export default App;
