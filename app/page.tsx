import { Close } from "@/components/home/close"
import { Hero } from "@/components/home/hero"
import { PathRail } from "@/components/home/path-rail"
import { WhatYouGet } from "@/components/home/what-you-get"

export default function Home() {
  return (
    <div className="home-craft bg-craft-bg text-craft-fg">
      <Hero />
      <PathRail />
      <WhatYouGet />
      <Close />
    </div>
  )
}
