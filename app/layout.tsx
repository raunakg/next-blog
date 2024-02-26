import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Raunak's Blog",
    description: 'Created by Raunak',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className + ' dark:bg-slate-800'}>
                <Navbar />
                <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
                    {children}
                </main>
            </body>
        </html>
    )
}
