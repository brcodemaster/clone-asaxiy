import { Auth, Footer, Header } from '@/components/shared'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Интернет магазин Asaxiy',
	description: 'Online store ASAXIY',
}
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='text-[#212529]'>
			<Auth />
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
