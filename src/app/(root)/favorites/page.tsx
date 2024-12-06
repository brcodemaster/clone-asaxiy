import { FavoritesEmpty } from '@/components/shared'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Избранное - Asaxiy',
}

const page = () => {
	return (
		<>
			<FavoritesEmpty />
		</>
	)
}

export default page
