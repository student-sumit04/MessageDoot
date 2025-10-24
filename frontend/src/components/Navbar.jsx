import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/useThemeStore";
import { LogOut, MessageSquare, Settings, User, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    // If current theme is light, switch to dark, otherwise switch to light
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 fixed w-full top-0 z-40 backdrop-blur-xl bg-opacity-90 shadow-lg shadow-purple-500/10">
      <div className="container mx-auto px-6 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-all duration-300 group">
              <div className="size-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MessageDoot
              </h1>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="group relative p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 text-gray-300 hover:text-yellow-400"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <Sun className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              )}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
            </button>

            <Link
              to={"/settings"}
              className="group relative px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <Settings className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden sm:inline font-medium">Settings</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
            </Link>

            {authUser && (
              <>
                <Link 
                  to={"/profile"} 
                  className="group relative px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="hidden sm:inline font-medium">Profile</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                </Link>

                <button 
                  className="group relative px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-400/50 transition-all duration-300 flex items-center gap-2 text-red-300 hover:text-red-200"
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/10 transition-all duration-300"></div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </header>
  );
};
export default Navbar;
