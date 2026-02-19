'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Initialize theme with function to avoid hydration mismatch - default to dark
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as Theme;
            if (savedTheme) {
                return savedTheme;
            }
            // Default to dark mode
            return 'dark';
        }
        return 'dark';
    });

    // Define updateTheme before useEffect
    const updateTheme = useCallback((newTheme: Theme) => {
        if (typeof document !== 'undefined') {
            const root = document.documentElement;
            if (newTheme === 'dark') {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
        }
    }, []);

    // Apply theme on mount and when theme changes
    useEffect(() => {
        updateTheme(theme);
    }, [theme, updateTheme]);

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', newTheme);
            }
            updateTheme(newTheme);
            return newTheme;
        });
    }, [updateTheme]);

    // Always provide context value, even before mount
    const contextValue = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

