/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter, Link } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalBackgroundVideo } from './components/GlobalBackgroundVideo';
import { HomePage } from './pages/HomePage';
import { FellowshipPage } from './pages/FellowshipPage';
import { ResearchPage } from './pages/ResearchPage';
import { ResearchDetailPage } from './pages/ResearchDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ArrowLeft } from 'lucide-react';

function AppRoutes() {
  const { currentPath } = useRouter();

  // Normalize path by stripping query params and hash and trailing slash (except root)
  const cleanPath = currentPath.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

  // Route matching
  if (cleanPath === '/') {
    return <HomePage />;
  }

  if (cleanPath === '/fellowship') {
    return <FellowshipPage />;
  }

  if (cleanPath === '/research') {
    return <ResearchPage />;
  }

  if (cleanPath.startsWith('/research/')) {
    const slug = cleanPath.replace('/research/', '');
    return <ResearchDetailPage slug={slug} />;
  }

  if (cleanPath === '/about') {
    return <AboutPage />;
  }

  // 404 Not Found Page
  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-32 text-center text-[#E0E4EA]">
      <div className="inline-block font-mono text-[12px] uppercase tracking-widest text-[#67D8E7] bg-black/40 border border-white/15 px-3 py-1 rounded-full mb-5">
        Error 404 · Page Not Found
      </div>
      <h1 className="text-3xl sm:text-5xl font-semibold text-[#F5F5F3] mb-4 text-shadow-subtle">
        The requested page does not exist.
      </h1>
      <p className="text-[16px] text-[#BCC5D0] max-w-md mx-auto mb-8 leading-relaxed text-shadow-sm">
        We could not locate this route. Check our research directions or fellowship overview.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#F5F5F3] text-[#0A0D12] font-medium text-[14px] hover:bg-white transition-all shadow-md"
      >
        <ArrowLeft size={16} />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#F5F5F3] text-[#0A0D12] font-medium rounded-md text-sm shadow-xl"
      >
        Skip to main content
      </a>

      {/* Persistent fixed background video & uniform 15% dark overlay */}
      <GlobalBackgroundVideo />

      {/* Page content wrapper with relative isolate positioning above video (z-index 2) */}
      <div
        className="relative isolate min-h-screen flex flex-col text-[#E0E4EA]"
        style={{ zIndex: 2 }}
      >
        <Header />
        <main id="main-content" className="relative z-[2] flex-1" style={{ zIndex: 2 }}>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
