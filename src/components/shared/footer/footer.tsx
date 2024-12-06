import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { FooterBanner } from './footer-banner'
import { FooterMenus } from './footer-menus'
import { Mail, MapPin, MapPinned, Phone, Snail, Store } from 'lucide-react'

const sections: FooterMenu[] = [
	{
		text: 'Часто задаваемые вопросы',
		link: '/faq',
	},
	{
		text: 'Новости',
		link: '/news',
	},
	{
		text: 'Блог',
		link: '/blog',
	},
	{
		text: 'Наши бренды',
		link: '/our-brands',
	},
	{
		text: 'Карьера в Asaxiy',
		link: '/career-asaxiy',
	},
	{
		text: 'Оферта для рассрочку',
		link: '/installment-offer',
	},
	{
		text: 'Публичная оферта',
		link: '/public-offer',
	},
	{
		text: 'О нас',
		link: '/about-us',
	},
	{
		text: 'Карта сайта',
		link: '/site-map',
	},
]

const contactInfo: FooterMenu[] = [
	{
		text: '+998 71 200 01 05',
		link: 'tel:+998712000105',
		icon: <Phone />,
	},
	{
		text: 'info@asaxiy.uz',
		link: 'mailto:info@asaxiy.uz',
		icon: <Mail />,
	},
	{
		text: 'Telegram bot',
		link: 'https://t.me/asaxiyuz',
		icon: (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M21 5L18.5 20ZM21 5L9 13.5Z' fill='#D9D9D9' />
				<path
					d='M18.5 20L21 5L9 13.5'
					stroke='#64758B'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M21 5L2 12.5'
					stroke='#64758B'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M18.5 20L9 13.5'
					stroke='#64758B'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M2 12.5L9 13.5'
					stroke='#64758B'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12 16L9 19V13.5'
					stroke='#64758B'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	},
	{
		text: 'улица Ислама Каримова, 49, Ташкент',
		link: 'https://www.google.com/maps/place/Tashkent+State+University+of+Economics/@41.3108037,69.2304245,15z/data=!4m7!3m6!1s0x38ae8b05774c5969:0xd6f6eef4c05c280!8m2!3d41.3108047!4d69.2494792!15sCgZuYXJ4b3paCCIGbmFyeG96kgEKdW5pdmVyc2l0eZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VONWIwdElTalIzUlJBQuABAA!16s%2Fm%2F0415l82?entry=tts&g_ep=EgoyMDI0MDUyNy4yKgBIAVAD',
		icon: <MapPin />,
	},
]

const loyaltyProgram: FooterMenu[] = [
	{
		text: 'Статус "El yurt ishonchi"',
		link: '/loyalty-program',
	},
]

const delivery: FooterMenu[] = [
	{
		text: 'Наши магазины',
		link: 'https://www.google.com/maps/d/u/0/viewer?mid=1R5cL_79kiW9_CaeJVvCfswbKeU-hetc&ll=40.55956848590127%2C66.86261269999999&z=8',
		icon: <Store />,
	},
	{
		text: 'Пункты выдачи',
		link: '/delivery-points',
		icon: <MapPinned />,
	},
	{
		text: 'Доставка',
		link: '/delivery',
		icon: <Snail />,
	},
]

const pays: FooterMenu[] = [
	{
		text: 'uzum.svg',
		link: '/',
	},
	{
		text: 'payme.svg',
		link: '/',
	},
	{
		text: 'visa.svg',
		link: '/',
	},
	{
		text: 'mastercard.svg',
		link: '/',
	},
	{
		text: 'humo.svg',
		link: '/',
	},
	{
		text: 'uzcard.svg',
		link: '/',
	},
]

const socialMedia: FooterMenu[] = [
	{
		text: 'Facebook',
		link: 'https://www.facebook.com/asaxiyshop/',
		icon: <i className='bx bxl-facebook-circle bx-md'></i>,
	},
	{
		text: 'Telegram',
		link: 'https://t.me/asaxiyuz',
		icon: <i className='bx bxl-telegram bx-md'></i>,
	},
	{
		text: 'Instagram',
		link: 'https://www.instagram.com/asaxiyshop/',
		icon: <i className='bx bxl-instagram-alt bx-md'></i>,
	},
	{
		text: 'You tube',
		link: 'https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ',
		icon: <i className='bx bxl-youtube bx-md'></i>,
	},
]

export const Footer: React.FC = () => {
	return (
		<footer className='flex flex-col justify-center items-center mt-10'>
			<div className={cn('py-12 px-5 bg-primary w-full flex justify-center items-center')}>
				<Container className='shadow-xl shadow-white/20 py-8 px-12 w-full bg-white rounded-[30px] flex gap-8 justify-between'>
					<FooterBanner />
				</Container>
			</div>
			<Container>
				<div className='flex justify-between w-full border-b border-gray-400/20'>
					<FooterMenus title='Информация' menus={sections} />
					<div className='flex flex-col'>
						<FooterMenus title='Для связи' menus={contactInfo} />
						<FooterMenus title='Программы лояльности' menus={loyaltyProgram} />
					</div>
					<FooterMenus title='Доставка и магазины' menus={delivery} />
					<div className='flex flex-col'>
						<FooterMenus title='Виды оплаты' menus={pays} />
						<FooterMenus title='Мы в соц. сетях' menus={socialMedia} />
					</div>
				</div>
				<div className='text-gray-500 font-medium py-5 flex items-center justify-center'>
					2015 - 2024 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров
					осуществляется во все регионы. Все права защищены.
				</div>
			</Container>
		</footer>
	)
}
