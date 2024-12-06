import { Button } from '@/components/ui/button'
import { LikeButton } from '@/components/ui/like-button'
import { cn } from '@/lib/utils'
import { ShoppingCart, Star } from 'lucide-react'
import Link from 'next/link'
import { ProductRenderLabel } from './product-render-label'
import { RenderHalfStar } from '@/components/ui/render-half-star'

interface Props {
	id: number
	brand: string
	type: string
	imageUrl: string
	model: string
	name: string
	capacity: string | null
	memory: string | null
	color: string | null
	rating: 'one' | 'two' | 'three' | 'four' | 'five'
	halfRating: boolean
	comments: number
	price: number
	discountPrice: number
	installment: number
	innovative: boolean
	className?: string
}

const renderStars = (rating: string) => {
	let ratingNum = 0

	switch (rating) {
		case 'one':
			ratingNum = 1
			break
		case 'two':
			ratingNum = 2
			break
		case 'three':
			ratingNum = 3
			break
		case 'four':
			ratingNum = 4
			break
		case 'five':
			ratingNum = 5
			break

		default:
			return ratingNum
	}

	return Array.from({ length: ratingNum }, (_, index) => (
		<span key={index}>
			<Star size={18} fill='#fe7300' stroke='#fe7300' />
		</span>
	))
}

const formatPrice = (price: number) => {
	const flooredNumber = Math.floor(price / 12)
	const localeNumber =
		new Intl.NumberFormat('ru-RU').format(flooredNumber).split('').slice(0, -2).join('') + '00'

	return `${localeNumber} сум х 12 мес.`
}

export const Product: React.FC<Props> = ({
	id,
	brand,
	type,
	imageUrl,
	model,
	memory,
	color,
	name,
	capacity,
	rating,
	halfRating,
	comments,
	price,
	discountPrice,
	installment,
	innovative,
	className,
}) => {
	return (
		<div
			className={cn(
				'w-[257px] h-[480px] bg-white rounded-md p-4 duration-200 hover:scale-105 cursor-pointer hover:shadow shadow-lg shadow-gray-500/20 group relative overflow-hidden ml-2 select-none flex justify-between',
				className
			)}
		>
			<LikeButton id={id} />
			<Link href={`/${type}/${id}`} className='flex flex-col justify-between gap-2 w-full'>
				<div className='w-[180px] h-[180px] self-center'>
					<img className='w-full h-full object-contain' src={imageUrl} alt={model} />
				</div>
				<div className='font-medium pt-4 group-hover:text-primary truncated duration-200 min-h-[64px]'>
					{name} {brand} {model} {memory ? memory + 'GB' : ''}
					{capacity ? capacity + 'BTU' : ''} {color ? color.toUpperCase() : ''}
				</div>
				<div className='flex justify-between items-center'>
					<div className='flex'>
						{renderStars(rating)}
						{halfRating && <RenderHalfStar />}
					</div>
					<div className='text-gray-400/80'>{comments} отзывов</div>
				</div>
				<div className={cn('flex flex-col', !discountPrice && 'pt-6')}>
					{discountPrice > 0 && (
						<span className='text-gray-400/90 font-semibold line-through'>
							{new Intl.NumberFormat('ru-RU').format(discountPrice)} сум
						</span>
					)}
					<span className='text-primary text-xl font-bold'>
						{new Intl.NumberFormat('ru-RU').format(price)} сум
					</span>
				</div>
				<div className='p-1 pl-2 border border-[#fe7300] rounded-md text-[#fe7300]'>
					{formatPrice(price)}
				</div>
				<div className='flex justify-between items-center pt-2'>
					<Button>Купить в один клик</Button>
					<Button>
						<ShoppingCart size={24} />
					</Button>
				</div>
				{innovative && <ProductRenderLabel type='new' />}
				{installment > 0 && <ProductRenderLabel type='installment' installment={installment} />}
				{discountPrice > 0 && <ProductRenderLabel type='discount' />}
			</Link>
		</div>
	)
	return true
}
