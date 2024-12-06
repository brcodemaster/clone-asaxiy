import { Button, Container, LikeButton, RenderHalfStar, Title } from '@/components/ui'
import { ProductRenderLabel } from './product-render-label'
import { ShoppingCart, Star, ThumbsUpIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
	productId: number
	brand: string
	name: string
	imageUrl: string
	capacity: string | null
	model: string
	quantity: number
	memory: string | null
	color: string | null
	rating: 'one' | 'two' | 'three' | 'four' | 'five'
	halfRating: boolean
	comments: number
	price: number
	discountPrice: number
	installment: number
	innovative: boolean
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

export const ProductAbout: React.FC<Props> = ({
	productId,
	brand,
	name,
	imageUrl,
	model,
	memory,
	capacity,
	color,
	rating,
	halfRating,
	quantity,
	comments,
	price,
	discountPrice,
	installment,
	innovative,
}) => {
	return (
		<Container className='flex items-center gap-5'>
			<div className='w-[423px] h-[423px] p-5 rounded-md shadow-lg shadow-gray-400/20 bg-white relative overflow-hidden flex justify-center items-center'>
				<div className='w-[380px] h-[380px]'>
					<img className='w-full h-full object-contain' src={imageUrl} alt={brand} />
				</div>
				{innovative && <ProductRenderLabel type='new' />}
				{installment > 0 && <ProductRenderLabel type='installment' installment={installment} />}
				{discountPrice > 0 && <ProductRenderLabel type='discount' />}
				<LikeButton id={productId} />
			</div>
			<div className='max-w-[423px]'>
				<Title
					title={`${name} ${brand} ${model} ${memory ? memory + 'GB' : ''}  
					${capacity ? capacity + 'BTU' : ''} ${color ? color : ''}`}
					size='xl'
					className='text-2xl font-bold truncated min-h-[40px]'
				/>
				<div className='flex gap-4 justify-between items-center w-full pt-1'>
					<div className='flex justify-between items-center w-[220px]'>
						<div className='flex'>
							{renderStars(rating)}
							{halfRating && <RenderHalfStar />}
						</div>
						<div className='text-gray-400/80'>{comments} отзывов</div>
					</div>
					<div className='flex items-center font-semibold text-primary hover:opacity-70 cursor-pointer text-lg gap-1 duration-200'>
						<i className='bx bx-share-alt text-primary bx-sm'></i>
						Поделится
					</div>
				</div>
				<div className={cn('flex flex-col pt-1', discountPrice ? '' : 'pt-3')}>
					{discountPrice > 0 && (
						<span className='text-[#af5679] font-semibold line-through'>
							{new Intl.NumberFormat('ru-RU').format(discountPrice)} сум
						</span>
					)}
					<span className='text-[#d9663b] text-2xl font-bold'>
						{new Intl.NumberFormat('ru-RU').format(price)} сум
					</span>
				</div>
				<div className='font-semibold text-lg pt-2'>
					<div>
						<span>Бренд:..........</span>
						<span className='text-primary'>{brand}</span>
					</div>
					<div>
						<span>Модель:..........</span>
						<span>{model}</span>
					</div>
					<div>
						<span>Наличии:.......... </span>
						<span className={cn(quantity > 0 ? 'text-green-600' : 'text-red-600')}>
							{quantity > 0 ? 'В наличии' : 'Нет в наличии'}
						</span>
					</div>
				</div>
				<div className='flex items-center gap-4 w-full pt-5'>
					<Button className='w-full flex items-center gap-2'>
						<ShoppingCart />
						Добавить в корзину
					</Button>
					<Button>Купить в один клик</Button>
				</div>
				<div className='pt-6 font-bold'>
					<div className='font-bold text-lg'>Проголосуйте:</div>
					<div className='flex justify-between items-center bg-white p-2 px-3 shadow-md shadow-gray-400/20 rounded-md cursor-pointer mt-2'>
						<div className='flex items-center gap-2 hover:text-primary duration-200 font-semibold'>
							<ThumbsUpIcon />Я рекомендую
						</div>
						<div className='p-2 bg-primary/20 rounded-md text-primary px-3'>{comments}</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
