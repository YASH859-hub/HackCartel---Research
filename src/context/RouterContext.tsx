import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string, options?: { replace?: boolean }) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path: string, options?: { replace?: boolean }) => {
    if (typeof window === 'undefined') return;

    if (options?.replace) {
      window.history.replaceState({}, '', path);
    } else {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, className = '', activeClassName = '', onClick, ...props }, ref) => {
    const { currentPath, navigate } = useRouter();
    const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e);
      }
      // If user modified click (Cmd/Ctrl/Shift/Alt) or right click, allow default browser behavior
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }
      e.preventDefault();
      if (currentPath !== to) {
        navigate(to);
      }
    };

    const combinedClassName = `${className} ${isActive ? activeClassName : ''}`.trim();

    return (
      <a
        ref={ref}
        href={to}
        onClick={handleClick}
        className={combinedClassName}
        aria-current={isActive ? 'page' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
