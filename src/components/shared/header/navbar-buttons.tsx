import { navbarButtons } from '@/lib/db'
import { cn } from '@/lib/utils'
import { Box, Earth, HandCoins, Heart, MapPinned, ShoppingCart, User } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Props = {
	mobile?: boolean
	className?: string
}

export const iconMap = {
	box: <Box />,
	handCoins: <HandCoins />,
	mapPinned: <MapPinned />,
	shoppingCart: <ShoppingCart />,
	heart: <Heart />,
	earth: <Earth />,
	user: <User />,
} as const

export const NavbarButtons: React.FC<Props> = ({ mobile = false, className }) => {
	const t = useTranslations('header')

	return (
		<nav className={cn('', className)}>
			<ul className='w-full flex justify-between items-center gap-6'>
				{navbarButtons.map(button => {
					if (mobile && ['products', 'user', 'language'].includes(button.name)) {
						return
					}

					return (
						<li key={button.name} className={cn('text-xs cursor-pointer group', button.className)}>
							<span className='group-hover:fill-primary group-hover:text-primary flex flex-col justify-center items-center gap-1 duration-200 capitalize'>
								{iconMap[button.icon]}
								{t(button.name)}
							</span>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
