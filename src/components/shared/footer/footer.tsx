import { Container } from '@/components/ui/container'
import { footerMenus } from '@/lib/db'
import { useTranslations } from 'next-intl'
import { FooterMenus } from './footer-menus'

export const Footer: React.FC = () => {
	const t = useTranslations('footer')

	return (
		<footer className='flex flex-col justify-center items-center mt-10 max-md:mt-0'>
			<Container>
				<div className='grid grid-cols-4 w-full border-b border-gray-400/20 max-xl:grid-cols-2 max-sm:grid-cols-1'>
					<FooterMenus title='information' menus={footerMenus.sections} />
					<div className='flex flex-col'>
						<FooterMenus title='contact' menus={footerMenus.contactInfo} />
						<FooterMenus title='loyalty' menus={footerMenus.loyaltyProgram} />
					</div>
					<FooterMenus title='deliveryAndStores' menus={footerMenus.delivery} />
					<div className='flex flex-col'>
						<FooterMenus title='payments' menus={footerMenus.pays} />
						<FooterMenus title='social' menus={footerMenus.socialMedia} />
					</div>
				</div>
				<div className='text-gray-500 font-medium py-5 text-center max-md:text-sm max-sm:text-xs'>
					{t('footerInfo')}
				</div>
			</Container>
		</footer>
	)
}
