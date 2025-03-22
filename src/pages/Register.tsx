
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Check } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    qualification: '',
    dob: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulating API call for registration
    setTimeout(() => {
      console.log('Registration successful');
      // Redirect to login page in a real app
      navigate('/login');
      setIsLoading(false);
    }, 1500);
  };

  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return { strength: 0, label: '' };
    
    if (password.length < 8) return { strength: 1, label: 'Weak' };
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    
    return { strength, label: labels[strength] };
  };

  const passwordStrength = getPasswordStrength();

  const strengths = [
    { label: 'At least 8 characters', valid: formData.password.length >= 8 },
    { label: 'At least 1 uppercase letter', valid: /[A-Z]/.test(formData.password) },
    { label: 'At least 1 number', valid: /[0-9]/.test(formData.password) },
    { label: 'At least 1 special character', valid: /[^A-Za-z0-9]/.test(formData.password) }
  ];

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
            <h2 className="text-3xl font-bold mb-2">Create your account</h2>
            <p className="text-gray-600">Please enter your details to sign up</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
                  Qualification
                </label>
                <input
                  id="qualification"
                  name="qualification"
                  type="text"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your qualification"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
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

              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden mr-3">
                      <div 
                        className={`h-full ${
                          passwordStrength.strength === 1
                            ? 'bg-red-500'
                            : passwordStrength.strength === 2
                            ? 'bg-yellow-500'
                            : passwordStrength.strength === 3
                            ? 'bg-green-500'
                            : passwordStrength.strength === 4
                            ? 'bg-emerald-500'
                            : ''
                        }`}
                        style={{ width: `${passwordStrength.strength * 25}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600">{passwordStrength.label}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 mt-2">
                    {strengths.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className={`w-4 h-4 flex items-center justify-center rounded-full mr-2 ${
                          item.valid 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {item.valid && <Check className="w-3 h-3" />}
                        </span>
                        <span className="text-xs text-gray-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors ${
                  formData.confirmPassword && formData.password !== formData.confirmPassword
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-500'
                    : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
                }`}
                placeholder="••••••••"
                required
              />
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">Passwords do not match</p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 bg-primary text-white rounded-lg font-medium transition-all ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 active:scale-[0.98]'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
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
                  <div className="space-y-3 mb-6">
                    <div className="w-full h-10 bg-gray-50 rounded"></div>
                    <div className="w-full h-10 bg-gray-50 rounded"></div>
                    <div className="w-full h-10 bg-blue-50 rounded border border-blue-200"></div>
                    <div className="w-full h-10 bg-gray-50 rounded"></div>
                  </div>
                  <div className="w-full h-10 bg-primary/20 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
