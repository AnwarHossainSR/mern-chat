import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth/Auth';
import Chat from './pages/Chat/Chat';

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div
      className='App'
      style={{
        height: 'calc(100vh - 2rem)',
      }}
    >
      <div className='blur' style={{ top: '-18%', right: '0' }}></div>
      <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route path='/' element={user ? <Navigate to='/chat' /> : <Auth />} />
        <Route path='/chat' element={user ? <Chat /> : <Navigate to='/' />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
