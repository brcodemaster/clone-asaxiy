import {
	Facebook,
	Humo,
	Instagram,
	Mastercard,
	Payme,
	Telegram,
	Uzcard,
	Uzum,
	Visa,
	Youtube,
} from '@/components/ui'
import { TelegramSquare } from '@/components/ui/svgs/telegram-square'
import { cn } from '@/lib/utils'
import { FooterMenuType } from '@/types/types'
import { ArrowRight, Mail, MapPin, MapPinned, Phone, Snail, Store } from 'lucide-react'
import Link from 'next/link'

interface Props {
	title: string
	menus: FooterMenuType[]
}

export const footerIconMap = {
	phone: <Phone />,
	mail: <Mail />,
	telegramSquare: <TelegramSquare />,
	mapPin: <MapPin />,
	store: <Store />,
	mapPinned: <MapPinned />,
	snail: <Snail />,
	facebook: <Facebook />,
	telegram: <Telegram />,
	instagram: <Instagram />,
	youtube: <Youtube />,
	uzum: <Uzum />,
	visa: <Visa />,
	humo: <Humo />,
	payme: <Payme />,
	mastercard: <Mastercard />,
	uzcard: <Uzcard />,
} as const

export const FooterMenus: React.FC<Props> = ({ title, menus }) => {
	return (
		<div className='flex'>
			<div className={cn('p-5 min-w-[318px] max-md:p-3', title === 'Для связи' && 'max-w-[100px]')}>
				<ol className='flex flex-col'>
					<h2 className='text-xl font-bold leading-16 max-md:text-lg max-sm:text-base max-md:leading-10'>
						{title}
					</h2>
					<div
						className={cn(
							'flex flex-col gap-2 max-md:text-sm max-md:gap-1',
							title === 'Мы в соц. сетях' && 'flex flex-row gap-6 justify-start',
							title === 'Виды оплаты' && 'grid grid-cols-2 gap-2'
						)}
					>
						{menus.map(item => {
							switch (title) {
								case 'Для связи':
									return (
										<a
											key={item.text}
											href={item.link}
											className='text-gray-500 font-semibold hover:text-primary duration-200'
											target='blank'
										>
											<li className='flex gap-2'>
												{footerIconMap[item.icon!]} {item.text}
											</li>
										</a>
									)

								case 'Виды оплаты':
									return (
										<li
											key={item.text}
											className='bg-[#e8e8f1] p-3 rounded-md flex justify-center items-center max-w-[150px]'
										>
											{footerIconMap[item.icon!]}
										</li>
									)

								case 'Доставка и магазины':
									if (item.text === 'Наши магазины') {
										return (
											<a
												key={item.text}
												href={item.link}
												className='text-gray-500 font-semibold hover:text-primary relative group duration-200'
												target='blank'
											>
												<li className='flex gap-2 bg-[#e8e8f1] p-3 rounded-md'>
													{footerIconMap[item.icon!]} {item.text}
													<ArrowRight className='absolute right-5 invisible opacity-0 duration-200 group-hover:right-3 group-hover:visible group-hover:opacity-100' />
												</li>
											</a>
										)
									}

									return (
										<Link
											key={item.text}
											href={item.link}
											className='text-gray-500 font-semibold hover:text-primary relative group duration-200'
										>
											<li className='flex gap-2 bg-[#e8e8f1] p-3 rounded-md'>
												{footerIconMap[item.icon!]} {item.text}
												<ArrowRight className='absolute right-5 invisible opacity-0 duration-200 group-hover:right-3 group-hover:visible group-hover:opacity-100' />
											</li>
										</Link>
									)

								case 'Мы в соц. сетях':
									return (
										<a key={item.text} href={item.link} target='blank'>
											<li className='rounded-md flex justify-center items-center hover:text-primary duration-200 text-gray-500'>
												{footerIconMap[item.icon!]}
											</li>
										</a>
									)

								default:
									return (
										<Link
											key={item.text}
											href={item.link}
											className='text-gray-500 font-semibold hover:text-primary duration-200'
										>
											<li>
												{footerIconMap[item.icon!]} {item.text}
											</li>
										</Link>
									)
							}
						})}
					</div>
				</ol>
			</div>
		</div>
	)
}
