import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Layout } from './components/layout/layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" element={<Home />} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
