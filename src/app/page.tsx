import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { siteConfig } from '@/config/site';
import ThemeToggle from '@/components/theme-toggle';

const Page = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-slate-400 opacity-50 blur-[80px]" />
      </div>

      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-8xl font-bold text-accent-foreground">
          {siteConfig.name}
        </h1>
        <p className="text-2xl text-primary/80">{siteConfig.description}</p>
        <div className="flex flex-row items-center gap-5">
          <a
            className="text-primary underline"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="text-3xl" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
};

export default Page;
