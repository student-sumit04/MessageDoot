import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, Sparkles } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 pointer-events-none" />
      
      {/* Floating Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      
      {/* Decorative Geometric Shapes */}
      <div className="absolute top-10 right-20 w-20 h-20 border-2 border-primary/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 border-2 border-secondary/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rotate-12 animate-pulse"></div>
      
      {/* Small Dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      
      {/* Centered Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative z-10 w-full">
        <div className="w-full max-w-md space-y-8">
          {/* Logo with Animation */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative">
                {/* Glowing Ring Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
                <div
                  className="relative size-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center 
                  group-hover:scale-110 transition-all duration-300 shadow-2xl group-hover:shadow-primary/50"
                >
                  <MessageSquare className="size-8 text-primary-content" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mt-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Welcome Back
              </h1>
              <p className="text-base-content/70 flex items-center gap-1">
                <Sparkles className="size-4 animate-pulse" />
                Sign in to your account
              </p>
            </div>
          </div>

          {/* Form Card with Enhanced Styling */}
          <div className="relative">
            {/* Card Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            
            <div className="relative bg-base-100/90 backdrop-blur-md rounded-2xl shadow-2xl border border-base-300/50 p-8 space-y-6 hover:border-primary/30 transition-colors duration-300">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Input with Enhanced Styling */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base">Email</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none 
                      transition-colors duration-200 group-focus-within:text-primary">
                      <Mail className="size-5 text-base-content/40 group-focus-within:text-primary transition-all duration-200 group-focus-within:scale-110" />
                    </div>
                    <input
                      type="email"
                      className="input input-bordered w-full pl-12 pr-4 h-12 
                        focus:input-primary focus:shadow-lg focus:shadow-primary/20 
                        transition-all duration-200 bg-base-200/50 hover:bg-base-200/70
                        focus:scale-[1.01]"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Password Input with Enhanced Styling */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-base">Password</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                      transition-colors duration-200 group-focus-within:text-primary">
                      <Lock className="size-5 text-base-content/40 group-focus-within:text-primary transition-all duration-200 group-focus-within:scale-110" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input input-bordered w-full pl-12 pr-12 h-12 
                        focus:input-primary focus:shadow-lg focus:shadow-primary/20 
                        transition-all duration-200 bg-base-200/50 hover:bg-base-200/70
                        focus:scale-[1.01]"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center 
                        hover:text-primary transition-all duration-200 hover:scale-110"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-5 text-base-content/40 hover:text-primary" />
                      ) : (
                        <Eye className="size-5 text-base-content/40 hover:text-primary" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Enhanced Submit Button */}
                <button 
                  type="submit" 
                  className="relative btn btn-primary w-full h-12 text-base font-semibold
                    shadow-lg hover:shadow-2xl hover:shadow-primary/50 
                    hover:scale-[1.02] transition-all duration-200
                    bg-gradient-to-r from-primary via-primary to-secondary 
                    bg-[length:200%_auto] hover:bg-right
                    overflow-hidden group" 
                  disabled={isLoggingIn}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Sign in</span>
                      <Sparkles className="size-4 ml-1 relative z-10 group-hover:rotate-12 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sign Up Link with Enhanced Styling */}
          <div className="text-center pt-4">
            <p className="text-base-content/70">
              Don&apos;t have an account?{" "}
              <Link 
                to="/signup" 
                className="link link-primary font-semibold hover:text-primary 
                  transition-all duration-200 hover:underline decoration-2 underline-offset-4
                  hover:scale-105 inline-block"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
