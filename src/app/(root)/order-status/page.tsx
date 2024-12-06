import { OrderStatusAuth } from '@/components/shared'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Статус заказа - Asaxiy',
}

const page = () => {
	return (
		<>
			<OrderStatusAuth />
		</>
	)
}

export default page
