import { cn } from '@/lib/utils'

const bannerItems: FooterItem[] = [
	{
		title: 'Не нужно ходить на базар',
		description: 'У нас выгодные цены и доставка до дома',
		imageUrl: '/market.svg',
	},
	{
		title: 'Быстрая доставка',
		description: 'Наш сервис удивит вас',
		imageUrl: '/fast-delivery.svg',
	},
	{
		title: 'Удобства для вас',
		description: 'Быстрое оформление и гарантия на возврат в случае неисправности',
		imageUrl: '/return.svg',
	},
	{
		title: 'Рассрочка',
		description: 'Без предоплаты на 3, 6 или 12 месяцев',
		imageUrl: '/card.svg',
	},
]

interface Props {
	className?: string
}

export const FooterBanner: React.FC<Props> = ({ className }) => {
	return (
		<>
			{bannerItems.map(item => (
				<div key={item.title} className='flex gap-6 justify-center items-center flex-shrink'>
					<div
						className={cn(
							'w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center',
							className
						)}
					>
						<img className='w-full h-full object-contain' src={item.imageUrl} alt={item.title} />
					</div>
					<div className='flex max-w-[250px] flex-col shrink-0'>
						<p className='font-semibold text-[16px]'>{item.title}</p>
						<p className='text-gray-500/70 text-sm pt-1'>{item.description}</p>
					</div>
				</div>
			))}
		</>
	)
}
