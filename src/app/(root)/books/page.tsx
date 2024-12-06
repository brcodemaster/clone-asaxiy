import { Products } from '@/components/shared'

export const metadata = {
	title: 'Интернет магазин Asaxiy | Книги',
}

const page = () => {
	return (
		<>
			<Products type='books' path />
		</>
	)
}

export default page
