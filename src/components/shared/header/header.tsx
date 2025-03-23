import { Container, Logo, Button, Input } from '@/components/ui'
import { LucideMenu } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { NavbarButtons } from './navbar-buttons'
import { navbarMenus } from '@/lib/db'

export const Header: React.FC = () => {
	const t = useTranslations('header')

	return (
		<header className='bg-white shadow-2xl shadow-black/10'>
			<div className='w-full py-5 border-b border-b-border max-lg:py-4 max-sm:py-3'>
				<Container className='flex justify-between items-center gap-3'>
					<Link href='/'>
						<Logo className='max-sm:w-10/12 max-sm:h-auto' />
					</Link>

					<Button className='max-sm:text-sm capitalize'>
						<LucideMenu size={16} /> {t('categories')}
					</Button>

					<div className='w-full flex items-center max-sm:hidden'>
						<Input
							className='rounded-r-none grow placeholder:capitalize placeholder:text-sm'
							placeholder={t('searchPlaceholder')}
							name='search'
						/>
						<Button className='rounded-l-none capitalize'>{t('search')}</Button>
					</div>

					<NavbarButtons className='flex items-center pl-2 max-lg:hidden' />
				</Container>
			</div>
			<div className='w-full py-4 border-b border-b-border max-sm:py-3 max-lg:hidden'>
				<Container className='flex items-center'>
					<nav className='w-full flex items-center'>
						<ul className='w-full flex justify-between items-center text-sm font-medium'>
							{navbarMenus.map(menu => (
								<li key={menu.name} className='capitalize group'>
									<Link href={menu.link} className='group-hover:text-primary duration-200'>
										{t(menu.name)}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</Container>
			</div>
		</header>
	)
}
