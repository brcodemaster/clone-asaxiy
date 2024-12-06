import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['cyrillic'],
	variable: '--inter-f',
	weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='shortcut icon' type='image/x-icon' href='/logo-icon.png' />
				<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
			</head>
			<body className={`${inter.className} bg-background-alt antialiased`}>{children}</body>
		</html>
	)
}
