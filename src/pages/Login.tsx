
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    // Simulating API call for login
    setTimeout(() => {
      // For demo, we'll consider admin login if email contains 'admin'
      if (email.includes('admin')) {
        console.log('Admin login successful');
        // Redirect to admin dashboard in a real app
        navigate('/');
      } else {
        console.log('User login successful');
        // Redirect to user dashboard in a real app
        navigate('/');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Column - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white w-10 h-10 rounded-md flex items-center justify-center text-xl mr-3">
                Q
              </div>
              <h1 className="text-2xl font-semibold">QuizMaster</h1>
            </div>
            <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
            <p className="text-gray-600">Please enter your details to sign in</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 bg-primary text-white rounded-lg font-medium transition-all ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 active:scale-[0.98]'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary font-medium hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50">
          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="glass w-full max-w-md h-auto aspect-[4/3] rounded-xl overflow-hidden p-1">
              <div className="w-full h-full rounded-lg bg-white overflow-hidden shadow-sm">
                <div className="h-12 bg-gray-50 border-b flex items-center px-4">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="p-4">
                  <div className="w-2/3 h-6 bg-gray-100 rounded mb-4"></div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="col-span-2 h-40 bg-blue-50 rounded flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-primary/40 rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-gray-50 rounded"></div>
                    <div className="h-24 bg-gray-50 rounded"></div>
                  </div>
                  <div className="w-full h-8 bg-blue-100 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
