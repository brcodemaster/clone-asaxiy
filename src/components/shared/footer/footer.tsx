import { Container } from '@/components/ui/container'
import { FooterMenus } from './footer-menus'
import { footerMenus } from '@/lib/db'

export const Footer: React.FC = () => {
	return (
		<footer className='flex flex-col justify-center items-center mt-10 max-md:mt-0'>
			<Container>
				<div className='grid grid-cols-4 w-full border-b border-gray-400/20 max-xl:grid-cols-2 max-sm:grid-cols-1'>
					<FooterMenus title='Информация' menus={footerMenus.sections} />
					<div className='flex flex-col'>
						<FooterMenus title='Для связи' menus={footerMenus.contactInfo} />
						<FooterMenus title='Программы лояльности' menus={footerMenus.loyaltyProgram} />
					</div>
					<FooterMenus title='Доставка и магазины' menus={footerMenus.delivery} />
					<div className='flex flex-col'>
						<FooterMenus title='Виды оплаты' menus={footerMenus.pays} />
						<FooterMenus title='Мы в соц. сетях' menus={footerMenus.socialMedia} />
					</div>
				</div>
				<div className='text-gray-500 font-medium py-5 text-center max-md:text-sm max-sm:text-xs'>
					2015 - 2024 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров
					осуществляется во все регионы. Все права защищены.
				</div>
			</Container>
		</footer>
	)
}
