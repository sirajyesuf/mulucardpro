'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

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

                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>

        </header>
    );
}
