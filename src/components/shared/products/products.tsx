import { Product } from './product'
import { prisma } from '@/prisma/prisma-client'
import { Container } from '@/components/ui/container'
import { Title } from '@/components/ui/title'
import { cn } from '@/lib/utils'
import { Path } from '@/components/ui/path'

interface Props {
	title?: string
	type: string
	className?: string
	path?: boolean
}

export const Products: React.FC<Props> = async ({ title, type, className, path = false }) => {
	try {
		const productsItem = await prisma.product.findMany({
			where: {
				type: type,
			},
		})

		return (
			<Container className={cn('flex flex-col', className)}>
				{path && <Path />}
				<div>{title && <Title title={title} size='lg' />}</div>
				<div className='grid grid-cols-5 gap-y-5'>
					{productsItem.map(item => (
						<Product
							key={item.id}
							id={item.id}
							type={type}
							name={item.name}
							capacity={item.capacity}
							brand={item.brand}
							imageUrl={item.imageUrl}
							model={item.model}
							memory={item.memory}
							color={item.color}
							rating={item.rating}
							halfRating={item.halfRating}
							comments={item.comments}
							price={item.price}
							discountPrice={item.discountPrice}
							installment={item.installment}
							innovative={item.innovative}
						/>
					))}
				</div>
			</Container>
		)
	} catch (err) {
		console.log('Error: ' + err)
	} finally {
		await prisma.$disconnect()
	}
}
