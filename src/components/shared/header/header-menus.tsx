'use client'

import { cn } from '@/lib/utils'
import { Box, Earth, HandCoins, Heart, MapPinned, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const buttons: HeaderButtons[] = [
	{
		text: 'Товары',
		icon: <Box />,
		link: '/',
	},
	{
		text: 'Оплатить',
		icon: <HandCoins />,
		link: '/order-pay',
	},
	{
		text: 'Отследить',
		icon: <MapPinned />,
		link: '/order-status',
	},
	{
		text: 'Корзина',
		icon: <ShoppingCart />,
		link: '/cart',
	},
	{
		text: 'Избранное',
		icon: <Heart />,
		link: '/favorites',
	},
	{
		text: 'Русский',
		icon: <Earth />,
	},
	{
		text: 'Гость',
		icon: <User />,
		link: '/profile',
	},
]

interface Props {
	className?: string
}

export const HeaderMenuButtons: React.FC<Props> = ({ className }) => {
	const [headerMenuActive, setHeaderMenuActive] = useState(0)

	return (
		<div className={cn('flex items-center gap-4', className)}>
			{buttons.map((button, index) => {
				const fullButton = (
					<span
						key={index}
						className={cn(
							'flex flex-col justify-center items-center cursor-pointer hover:text-primary duration-200 text-[15px]',
							headerMenuActive === index && 'text-primary'
						)}
						onClick={() => {
							if (index === 5) {
								return
							}
							setHeaderMenuActive(index)
						}}
					>
						{button.icon} {button.text}
					</span>
				)

				return button.link ? (
					<Link key={index} href={button.link}>
						{fullButton}
					</Link>
				) : (
					fullButton
				)
			})}
		</div>
	)
}
