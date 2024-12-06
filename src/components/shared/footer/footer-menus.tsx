import { Title } from '@/components/ui/title'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Props {
	title: string
	menus: FooterMenu[]
}

export const FooterMenus: React.FC<Props> = ({ title, menus }) => {
	return (
		<div className='flex'>
			<div className={cn('p-5 min-w-[318px]', title === 'Для связи' && 'max-w-[100px]')}>
				<ol className='flex flex-col'>
					<Title title={title} size='lg' />
					<div
						className={cn(
							'flex flex-col gap-2',
							title === 'Мы в соц. сетях' && 'flex flex-row gap-5 justify-start',
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
												{item.icon} {item.text}
											</li>
										</a>
									)

								case 'Виды оплаты':
									return (
										<li
											key={item.text}
											className='bg-[#e8e8f1] p-3 rounded-md flex justify-center items-center max-w-[150px]'
										>
											<img src={`/${item.text}`} alt='Payment system' />
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
													{item.icon} {item.text}
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
												{item.icon} {item.text}
												<ArrowRight className='absolute right-5 invisible opacity-0 duration-200 group-hover:right-3 group-hover:visible group-hover:opacity-100' />
											</li>
										</Link>
									)

								case 'Мы в соц. сетях':
									return (
										<a key={item.text} href={item.link} target='blank'>
											<li className='rounded-md flex justify-center items-center hover:text-primary duration-200 text-gray-500'>
												{item.icon}
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
												{item.icon} {item.text}
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
