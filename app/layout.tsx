import "./globals.css"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body className="h-full bg-blue-300">
                <div className="flex items-center justify-center">
                    <h1 className="text-3xl text-white">
                        Clouds Treasure Hunt
                    </h1>
                </div>
                {children}
            </body>
        </html>
    )
}
