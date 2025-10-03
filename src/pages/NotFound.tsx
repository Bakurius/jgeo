import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-bold bg-[var(--gradient-health)] bg-clip-text text-transparent">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">გვერდი ვერ მოიძებნა</p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          დაბრუნება მთავარ გვერდზე
        </a>
      </div>
    </div>
  );
};

export default NotFound;
