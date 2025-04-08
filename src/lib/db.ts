import { BannerItemType, ContentsType, FooterMenusType, NavbarButtonsType } from '@/types/types'

export const navbarButtons: NavbarButtonsType[] = [
	{
		name: 'products',
		icon: 'box',
		link: '/',
	},
	{
		name: 'payment',
		icon: 'handCoins',
		link: '/order-pay',
	},
	{
		name: 'track',
		icon: 'mapPinned',
		link: '/order-status',
	},
	{
		name: 'cart',
		icon: 'shoppingCart',
		link: '/cart',
	},
	{
		name: 'favorites',
		icon: 'heart',
		link: '/favorites',
	},
	{
		name: 'language',
		icon: 'earth',
	},
	{
		name: 'user',
		icon: 'user',
		link: '/profile',
		className: 'pl-2',
	},
]

export const navbarMenus = [
	{
		name: 'ramadan',
		link: 'discount',
	},
	{
		name: '0-0-3',
		link: '0-0-3',
	},
	{
		name: 'smartphones',
		link: 'smartphones',
	},
	{
		name: 'householdAppliances',
		link: 'home-appliances',
	},
	{
		name: 'books',
		link: 'books',
	},
	{
		name: 'notebooks',
		link: 'notebooks',
	},
	{
		name: 'bestseller',
		link: 'bestseller',
	},
]

export const contents: ContentsType[] = [
	{
		beforeText: 'Каждый покупатель должен в комфортных условиях выбрать ',
		link: {
			text: 'телефоны и гаджеты',
			href: '/smartphones',
		},
		description:
			' максимально быстро, поэтому мы создали интуитивно понятное меню, которое легко освоить новым пользователям сети. Для большего удобства мы раздели меню на соответствующие разделы, в которых вы найдете более 15 тысяч разновидностей оргтехники и сопутствующих товаров. Выглядят они следующим образом:',
	},
	{
		title: 'Посуда',
		link: {
			text: 'Посуда',
			href: '/home-appliances',
		},
		description:
			'здесь вы найдете самые необходимые атрибуты домашнего обихода, без которого не обходится наша повседневная жизнь. Товары, представленные на сайте нашего магазина, обладают высоким качеством и прочностью.',
	},
	{
		title: 'Кондиционеры и климатическая техника',
		link: {
			text: 'Кондиционеры',
			href: '/conditioners',
		},
		description:
			'раздел позволяет сделать полезные покупки в соответствии с вашими потребностями. К каждому товару имеется описание, которое позволит сделать правильный выбор.',
	},
	{
		title: 'Телевизоры, видео и аудио',
		link: {
			text: 'Телевизоры, видео и аудио',
			href: '/televisions',
		},
		description:
			'находятся в следующем разделе, который достойно позиционируется как бытовая техника. Здесь представлены самые последние новинки и разработки, имеющие полномасштабный перечень функций, идущий в ногу со временем.',
	},
	{
		title: 'Техника для красоты и здоровья',
		link: {
			text: 'Техника для красоты и здоровья',
			href: '/home-appliances',
		},
		description:
			'один из любимых отделов наших постоянных покупательниц, которые знают цену здоровья и стремятся к естественной красоте путем правильного питания.',
	},
	{
		title: 'Компьютеры и оргтехника',
		link: {
			text: 'Компьютеры и оргтехника',
			href: '/home-appliances',
		},
		description:
			'являются самым большим разделом, так как здесь включены всевозможные аксессуары и вспомогательные комплектующие, призванные облегчить процесс компьютеризации и уменьшить трату рабочего времени. Также наша компания Asaxiy.uz позаботилась про любителей игровых сервисов, о чем может сказать раздел для геймеров. Здесь предоставлено мощное компьютерное обеспечение, игровые мыши и клавиатуры, которые позволят осуществлять игровой процесс с максимальной точностью и меткостью. А для любителей чтения мы предоставили усовершенствованную литературу в виде аудио книг, тематика жанра которых достаточно широка.',
	},
	{
		beforeText:
			'Также наша компания Asaxiy.uz позаботилась про любителей игровых сервисов, о чем может сказать раздел ',
		link: {
			text: 'для геймеров.',
			href: '/smartphones',
		},
		description:
			'Здесь предоставлено мощное компьютерное обеспечение, игровые мыши и клавиатуры, которые позволят осуществлять игровой процесс с максимальной точностью и меткостью. А для любителей чтения мы предоставили усовершенствованную литературу в виде аудио книг, тематика жанра которых достаточно широка.',
	},
]

export const advantages: ContentsType[] = [
	{
		beforeText:
			'Компания Asaxiy.uz стремительно прорабатывает все свои возможности, и сегодня мы предлагаем своим клиентам значительные ',
		link: {
			text: 'скидки',
			href: '/discounts',
		},
		description:
			' и быструю доставку в ряды городов. В зону нашего обслуживания входят такие города как Андижане, Бухаре, Фергане, Джизак, Хорезм, Наманган, Навои, Кашкадарью, Самарканде, Сырдарье, Сурхандарье и всей Ташкентской области, а также Республика Каракалпакстан. И это неполная карта поставок. Уточнить все наши зоны обслуживания вы можете, позвонив специалисту интернет-магазина, который предоставит всю интересующую вас информацию.',
	},
	{
		beforeText: 'Каждый покупатель нашего ',
		link: {
			text: 'магазина',
			href: '/asaxiy.uz',
		},
		description:
			' – достойный гость, которому мы предложим приятные скидки и бонусные программы. Мы полностью сопроводим весь процесс подбора товаров согласно требованиям клиентам и произведем доставку любым удобным способом.',
	},
]

export const banner: BannerItemType[] = [
	{
		icon: 'box',
		description: 'dontNeedDescription',
		title: 'dontNeed',
	},
	{
		icon: 'delivery',
		description: 'fastDeliveryDescription',
		title: 'fastDelivery',
	},
	{
		icon: 'return',
		description: 'forYouDescription',
		title: 'forYou',
		className: 'max-w-[350px]',
	},
	{
		icon: 'card',
		description: 'monthsDescription',
		title: 'months',
	},
]

export const footerMenus: FooterMenusType = {
	sections: [
		{
			text: 'faq',
			link: '/faq',
		},
		{
			text: 'news',
			link: '/news',
		},
		{
			text: 'blog',
			link: '/blog',
		},
		{
			text: 'brands',
			link: '/our-brands',
		},
		{
			text: 'career',
			link: '/career-asaxiy',
		},
		{
			text: 'offer',
			link: '/installment-offer',
		},
		{
			text: 'publicOffer',
			link: '/public-offer',
		},
		{
			text: 'aboutUs',
			link: '/about-us',
		},
		{
			text: 'map',
			link: '/site-map',
		},
	],
	contactInfo: [
		{
			text: '+998 71 200 01 05',
			link: 'tel:+998712000105',
			icon: 'phone',
		},
		{
			text: 'info@asaxiy.uz',
			link: 'mailto:info@asaxiy.uz',
			icon: 'mail',
		},
		{
			text: 'Telegram bot',
			link: 'https://t.me/asaxiyuz',
			icon: 'telegramSquare',
		},
		{
			text: 'street',
			link: 'https://www.google.com/maps/place/Tashkent+State+University+of+Economics/@41.3108037,69.2304245,15z/data=!4m7!3m6!1s0x38ae8b05774c5969:0xd6f6eef4c05c280!8m2!3d41.3108047!4d69.2494792!15sCgZuYXJ4b3paCCIGbmFyeG96kgEKdW5pdmVyc2l0eZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VONWIwdElTalIzUlJBQuABAA!16s%2Fm%2F0415l82?entry=tts&g_ep=EgoyMDI0MDUyNy4yKgBIAVAD',
			icon: 'mapPin',
		},
	],
	loyaltyProgram: [
		{
			text: 'status',
			link: '/loyalty-program',
		},
	],
	delivery: [
		{
			text: 'ourStores',
			link: 'https://www.google.com/maps/d/u/0/viewer?mid=1R5cL_79kiW9_CaeJVvCfswbKeU-hetc&ll=40.55956848590127%2C66.86261269999999&z=8',
			icon: 'store',
		},
		{
			text: 'pickUpPoint',
			link: '/delivery-points',
			icon: 'mapPinned',
		},
		{
			text: 'delivery',
			link: '/delivery',
			icon: 'snail',
		},
	],
	pays: [
		{
			text: 'uzum',
			link: '/',
			icon: 'uzum',
		},
		{
			text: 'payme',
			link: '/',
			icon: 'payme',
		},
		{
			text: 'visa',
			link: '/',
			icon: 'visa',
		},
		{
			text: 'mastercard',
			link: '/',
			icon: 'mastercard',
		},
		{
			text: 'humo',
			link: '/',
			icon: 'humo',
		},
		{
			text: 'uzcard',
			link: '/',
			icon: 'uzcard',
		},
	],
	socialMedia: [
		{
			text: 'Facebook',
			link: 'https://www.facebook.com/asaxiyshop/',
			icon: 'facebook',
		},
		{
			text: 'Telegram',
			link: 'https://t.me/asaxiyuz',
			icon: 'telegram',
		},
		{
			text: 'Instagram',
			link: 'https://www.instagram.com/asaxiyshop/',
			icon: 'instagram',
		},
		{
			text: 'You tube',
			link: 'https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ',
			icon: 'youtube',
		},
	],
}
