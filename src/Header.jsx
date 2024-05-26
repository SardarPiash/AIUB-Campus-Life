import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="bg-blue-800 text-white py-4">
        <div className="container mx-auto flex items-center justify-center">
            <div className="flex items-center">
                <img className="h-12 w-12" src="../src/assets/Aiub_logo.png" alt="AIUB Logo" />
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">AIUB Campus Life</h1>
                    <h2 className="text-sm">American International University-Bangladesh</h2>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}
