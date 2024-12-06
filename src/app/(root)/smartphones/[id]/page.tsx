import { ProductAbout } from '@/components/shared'
import { Path } from '@/components/ui'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

type Props = {
	params: { id: number }
}

const page = async ({ params: { id } }: Props) => {
	const product = await prisma.product.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!product) {
		return notFound()
	}

	return (
		<>
			<Path brand={product.brand} model={product.model} />
			<ProductAbout
				productId={product.id}
				name={product.name}
				brand={product.brand}
				capacity={product.capacity}
				imageUrl={product.imageUrl}
				model={product.model}
				memory={product.memory}
				color={product.color}
				quantity={product.quantity}
				rating={product.rating}
				halfRating={product.halfRating}
				comments={product.comments}
				price={product.price}
				discountPrice={product.discountPrice}
				installment={product.installment}
				innovative={product.innovative}
			/>
		</>
	)
}

export default page
