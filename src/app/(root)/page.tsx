import { AboutUs, Products } from '@/components/shared'

const page = () => {
	return (
		<div className='pt-[136px]'>
			<Products title='Телефоны и гаджеты' type='smartphones' />
			<Products title='Кондиционеры' type='conditioners' />
			<Products title='Бытовая техника' type='home-appliances' />
			<Products title='Книги' type='books' />
			<Products title='Телевизоры' type='televisions' />
			<Products title='Ноутбуки' type='laptops' />
			<AboutUs />
		</div>
	)
}

export default page
