import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Router from './routes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import DefaultLayout from 'Layout/DefaultLayout';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-mono h-screen flex flex-col">
        <Header />
        <DefaultLayout>
          <div className="flex-1 flex  items-center justify-center">
            <Router />
          </div>
        </DefaultLayout>
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
