import { Product } from '@/components/shared'
import { Container } from '@/components/ui'
import { cn } from '@/lib/utils'
import { prisma } from '@/prisma/prisma-client'
import { Metadata } from 'next'

import { Path } from '@/components/ui/path'

export const metadata: Metadata = {
	title: 'Интернет магазин Asaxiy | Скидки',
}

const page = async () => {
	try {
		const productsItem = await prisma.product.findMany({
			where: {
				discountPrice: {
					gt: 0,
				},
			},
		})

		return (
			<Container className={cn('flex flex-col')}>
				<Path />
				<div className='grid grid-cols-5 gap-y-5'>
					{productsItem.map(item => (
						<Product
							key={item.id}
							id={item.id}
							type={item.type}
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
		console.log('Error' + err)
	} finally {
		await prisma.$disconnect()
	}
}
export default page
