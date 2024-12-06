import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { HeaderSearchInput } from './header-search-input'
import { HeaderMenuButtons } from './header-menus'
import { HeaderCategories } from './header-categories'

export const Header: React.FC = () => {
	return (
		<header className='shadow-2xl shadow-gray-400/20 fixed top-0 left-0 right-0 bg-white z-10'>
			<div className='border-b border-b-gray-400/20'>
				<Container className='p-4 flex justify-between items-center gap-2'>
					<Link href='/'>
						<Image src='/logo.svg' alt='Logo' width={130} height={32} priority />
					</Link>
					<Button className='text-[16px] font-normal flex items-center gap-1 relative pl-10 pr-5'>
						<span className='absolute top-[40%] left-[14px] w-[17px] h-[2px] bg-white/80 -translate-y-1/2 duration-200'></span>
						<span className='absolute top-[50%] left-[14px] w-[17px] h-[2px] bg-white/80 -translate-y-1/2 duration-200'></span>
						<span className='absolute top-[60%] left-[14px] w-[17px] h-[2px] bg-white/80 -translate-y-1/2 duration-200'></span>
						Категории
					</Button>
					<HeaderSearchInput />
					<HeaderMenuButtons className='pl-2' />
				</Container>
			</div>
			<div className='border-b border-b-gray-400/20'>
				<Container className='p-4'>
					<HeaderCategories />
				</Container>
			</div>
		</header>
	)
}
