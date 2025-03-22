
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md bg-white p-10 rounded-xl shadow-lg border border-gray-100">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-primary">4</span>
          <div className="w-10 h-10 bg-primary/20 rounded-full mx-1"></div>
          <span className="text-4xl font-bold text-primary">4</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary/90 active:scale-95"
        >
          <Home className="w-5 h-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
