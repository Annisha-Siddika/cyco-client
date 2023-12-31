import React, { useState } from 'react';
import { FaFulcrum } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/socialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import ResetModal from '../../modal/ResetModal';
import './Login.css';
import useTitle from '../../hooks/useTitle';


const Login = () => {
  // title
  useTitle('Login | CYCO')
  let [isOpen, setIsOpen] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const result = await signIn(email?.value, password?.value);
      const loggedUser = result?.user;
      Swal.fire({
        text: 'Login successful!',
        icon: 'success',
        background: '#222',
      });

      navigate('/');
    } catch (error) {
      console.log(error);
      setErrorMessage('Invalid email or password');
    }
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert('please provide your email address first');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Please check your email');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="py-12 2xl:py-16 h-full flex justify-center items-center">
      <ResetModal isOpen={isOpen} closeModal={closeModal} />
      <div id="loginAnimation">
        <div className="z-10 p-8">
          <div className="absolute top-0 left-0 animate-pulse">
            <FaFulcrum className="text-4xl text-cyred" />
          </div>
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
            Login
          </h2>

          <form onSubmit={handleLogin} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-sm"
                required
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
            )}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full text-white p-2 rounded-sm border bg-red-950 bg-opacity-20 border-red-800 hover:bg-gradient-to-r hover:from-cyred hover:to-red-900 focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
          <label className="flex justify-end">
            <p className="text-sm pt-2 ">
              {' '}
              <button onClick={() => setIsOpen(true)}>
                Forgot password?
              </button>{' '}
            </p>
          </label>
          <div className="flex flex-col justify-center items-center mx-auto gap-2">
            <h3 className="divider text-xs">Sign up with</h3>
            <div>
              <SocialLogin />
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-10 mb-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-500 hover:underline">
              Register
            </Link>
          </p>

          <div className="absolute bottom-0 right-0 animate-pulse">
            <FaFulcrum className="text-4xl text-cyred" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
