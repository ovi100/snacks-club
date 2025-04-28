import React from 'react'
import useAppContext from '../../hooks/useAppContext';
import { Link, useNavigate } from 'react-router';
import { setStorage } from '../../utils/storage';

const Login = () => {
  const { authInfo } = useAppContext();
  const { setUser, setToken } = authInfo;
  const navigate = useNavigate();

  const handleLogin = async () => {
    const dummyUser = { name: 'John Doe', email: 'john@example.com' };
    const dummyToken = '1234567890abcdef';

    setStorage('user', JSON.stringify(dummyUser));
    setStorage('token', dummyToken);

    setUser(dummyUser);
    setToken(dummyToken);

    navigate('dashboard', { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
      >
        Login
      </button>
      <Link to="/register" className="text-blue-500 hover:underline">
        Don't have an account? Register
      </Link>
    </div>
  );
}

export default Login;