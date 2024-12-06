import { OrderPayAuth } from '@/components/shared'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Оплатить - Asaxiy',
}

const page = () => {
	return (
		<>
			<OrderPayAuth />
		</>
	)
}

export default page
