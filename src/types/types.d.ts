import { bannerIconMap } from '@/components/shared/banner/banner-item'
import { footerIconMap } from '@/components/shared/footer/footer-menus'
import { iconMap } from '@/components/shared/header/navbar-buttons'

type NavbarButtonsType = {
	name: string
	link?: string
	className?: string
	icon: keyof typeof iconMap
}

type ContentsType = {
	beforeText?: string
	title?: string
	link: {
		text: string
		href: string
	}
	description: string
}

type BannerItemType = {
	icon: keyof typeof bannerIconMap
	title: string
	description: string
	className?: string
}

type FooterMenusType = Record<string, FooterMenuType[]>

type FooterMenuType = {
	text: string
	link: string
	icon?: keyof typeof footerIconMap
}
