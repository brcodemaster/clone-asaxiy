import { Container, Path, Title } from '@/components/ui'

export const Cart: React.FC = () => {
	return (
		<>
			<Path />
			<Container className='flex justify-center items-center w-full flex-col'>
				<img src='https://asaxiy.uz/custom-assets/images/cabinet/basket_no_page.png' alt='Cart' />
				<Title title='В вашей корзине пока нет товаров' className='pt-4 text-2xl pb-0' />
				<div className='font-medium'>
					Начните с основ или найдите продукт с помощью функции поиска.
				</div>
			</Container>
		</>
	)
}
