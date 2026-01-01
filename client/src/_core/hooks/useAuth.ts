import { useEffect, useState } from "react";
import type { User } from "../../../drizzle/schema";

/**
 * useAuth Hook
 * Manages user authentication state for the Project Joinity dashboard
 */

interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    isAuthenticated: false,
    error: null,
  });

  useEffect(() => {
    // Check if user is authenticated via Manus OAuth
    const checkAuth = async () => {
      try {
        // In a real implementation, this would call the backend to verify the session
        // For now, we'll simulate the auth check
        const response = await fetch("/api/auth/me", {
          credentials: "include",
        });

        if (response.ok) {
          const user = await response.json();
          setState({
            user,
            loading: false,
            isAuthenticated: true,
            error: null,
          });
        } else {
          setState({
            user: null,
            loading: false,
            isAuthenticated: false,
            error: null,
          });
        }
      } catch (err) {
        setState({
          user: null,
          loading: false,
          isAuthenticated: false,
          error: err instanceof Error ? err.message : "Auth check failed",
        });
      }
    };

    checkAuth();
  }, []);

  return state;
}
