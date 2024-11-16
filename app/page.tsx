import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-primary text-4xl font-bold mb-4 sm:text-5xl md:text-6xl">
          Create Your Email Signature
        </h1>
        <h2 className="text-xl mb-8 sm:text-2xl">
          Stand out with a professional email signature in just a few clicks
        </h2>
        <Link href="/sign">
          <Button size="lg" className="text-lg px-8 py-6">
            Make Your Signature
          </Button>
        </Link>
      </main>
    </div>
  )
}