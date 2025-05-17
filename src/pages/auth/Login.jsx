import React from 'react'
// import useAppContext from '../../hooks/useAppContext';
// import { Link, useNavigate } from 'react-router';
// import { setStorage } from '../../utils/storage';
import { API_URL } from '../../config/env';

const Login = () => {
  // const { authInfo } = useAppContext();
  // const navigate = useNavigate();

  // const handleLogin = async () => {
  //   const dummyUser = { name: 'John Doe', email: 'john@example.com' };
  //   const dummyToken = '1234567890abcdef';

  //   setStorage('user', JSON.stringify(dummyUser));
  //   setStorage('token', dummyToken);

  //   setUser(dummyUser);
  //   setToken(dummyToken);

  //   navigate('dashboard', { replace: true });
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl mb-4">Login</h1>
      <div className="p-8 space-y-4">
            <a 
              href={`${API_URL}/auth/google`} 
              className="block"
            >
              <button
                className="group h-12 px-6 w-full border-2 border-gray-200 rounded-lg transition duration-300 
                hover:border-blue-400 hover:bg-blue-50 active:bg-blue-100 flex items-center justify-center"
              >
                <div className="relative flex items-center space-x-4">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="w-5 h-5"
                    alt="Google logo"
                  />
                  <span className="block font-medium tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Google
                  </span>
                </div>
              </button>
            </a>

            

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account? You'll be automatically registered.
              </p>
            </div>
          </div>
    </div>
  );
}

export default Login;