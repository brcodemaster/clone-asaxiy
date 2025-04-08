import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import { Header, NavbarButtons } from '@/components/shared'

const inter = Inter({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Интернет магазин Asaxiy',
	description: 'Online store Asaxiy',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body
				className={`${inter.className} antialiased min-h-screen bg-[#f4f7fd] text-[#212529] max-lg:pb-[70px]`}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Header />
					<main className='mt-[100px]'>
						{children}
						<NavbarButtons
							className='flex justify-between fixed bottom-0 left-0 right-0 py-4 px-8 border-t border-border bg-white lg:hidden'
							mobile
						/>
					</main>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
