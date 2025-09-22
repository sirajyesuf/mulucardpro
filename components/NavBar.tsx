'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 right-0 left-0 z-50 px-4 py-4 transition-all duration-300 md:px-8',
                isScrolled ? 'glass shadow-sm backdrop-blur-lg' : 'bg-transparent',
            )}
        >
            <div className="container mx-auto max-w-7xl">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-[1px] text-xl font-semibold">
                        <span className="text-brand-purple">MuluCard</span>
                        <span className="text-white px-2 py-1 rounded" style={{ backgroundColor: '#9b87f5' }}>Pro</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-4 md:flex">
                        <Button asChild className="text-white transition-colors hover:opacity-90" style={{ backgroundColor: 'var(--brand-purple)' }}>
                            <Link href="https://mulucardpro-demo.vercel.app">MuluCard Pro Demo</Link>
                        </Button>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="glass animate-fade-in absolute top-full right-0 left-0 bg-gray-50 dark:bg-gray-900 p-4 shadow-md md:hidden">
                    <div className="flex flex-col items-start gap-4 border-none">
                        <Button asChild className="text-white transition-colors w-full justify-start hover:opacity-90" style={{ backgroundColor: 'var(--brand-purple)' }}>
                            <Link href="https://mulucardpro-demo.vercel.app" onClick={() => setIsMenuOpen(false)}>
                                MuluCard Pro Demo
                            </Link>
                        </Button>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Theme:</span>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}

        </header>
    );
}
