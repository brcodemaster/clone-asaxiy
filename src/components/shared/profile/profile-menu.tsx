import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import {
	Archive,
	BadgeCheck,
	CreditCard,
	LogOut,
	MapPin,
	MessageSquareMore,
	Package,
	User,
} from 'lucide-react'
import Link from 'next/link'

interface Props {
	className?: string
}

const profileMenuButtons: FooterMenu[] = [
	{
		icon: <User />,
		text: 'Личные данные',
		link: '/profile',
	},
	{
		icon: <BadgeCheck fill='#2563eb' stroke='white' />,
		text: '"El-Yurt ishonchi"',
		link: '/loyalty-program',
	},
	{
		icon: <CreditCard />,
		text: 'Транзакции',
		link: '/transactions',
	},
	{
		icon: <Archive />,
		text: 'Заказы',
		link: '/orders',
	},
	{
		icon: <Package />,
		text: 'Рассрочки',
		link: '/installments',
	},
	{
		icon: <MessageSquareMore />,
		text: 'Чаты',
		link: '/profile/chat',
	},
	{
		icon: <MapPin />,
		text: 'Мои адреса',
		link: '/my-address',
	},
]

export const ProfileMenu: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('bg-white rounded-md px-6 shadow-lg shadow-gray-400/20', className)}>
			<div className='flex gap-3 items-center py-6 border-b border-b-gray-400/20'>
				<img
					className=''
					src='https://assets.asaxiy.uz/users/no-image.jpg'
					alt='Profile image'
					width={72}
					height={72}
				/>
				<div className='flex flex-col font-semibold text-lg'>
					Ravshanbekov Bekzod
					<div className='text-gray-400 font-medium'>ID: A426880</div>
				</div>
			</div>
			<div className='py-6 flex gap-4 border-b border-b-gray-400/20'>
				<div className='flex flex-col flex-1 gap-2'>
					<div className='flex flex-col'>
						Баланс
						<span className='text-lg font-medium'>0 сум</span>
					</div>
					<Button>Пополнить лицевой счет</Button>
				</div>
				<div className='flex flex-col flex-1 gap-2'>
					<div className='flex flex-col'>
						Балл
						<span className='text-lg font-medium'>0 сум</span>
					</div>
					<Button>Активация купона</Button>
				</div>
			</div>
			<nav>
				<ul className='py-4 border-b border-b-gray-400/20'>
					{profileMenuButtons.map(item => (
						<li
							key={item.text}
							className='py-4 text-lg font-semibold duration-200 hover:opacity-50'
						>
							<Link href={item.link} className='flex gap-2 items-center'>
								{item.icon} {item.text}
							</Link>
						</li>
					))}
				</ul>
				<ul className='py-4'>
					<li className='py-4 text-lg font-semibold text-red-600 duration-200 hover:opacity-50'>
						<Link href='/' className='flex gap-2 items-center'>
							<LogOut /> Выход
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
