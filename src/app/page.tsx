import React from "react"
import { FaGithub } from "react-icons/fa"

import { siteConfig } from "@/config/site"
import ThemeToggle from "@/components/theme-toggle"

const Page = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-8xl font-bold text-accent-foreground">
          {siteConfig.name}
        </h1>
        <p className="text-2xl text-primary/80">{siteConfig.description}</p>
        <div className="flex flex-row gap-5 items-center ">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            <FaGithub className="text-3xl" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </main>
  )
}

export default Page
