interface HeaderButtons {
	text: string
	icon: React.ReactNode
	link?: string
}

interface Categories {
	text: string
	link: string
}

interface FooterItem {
	title: string
	description: string
	imageUrl: string
}

interface FooterMenu {
	text: string
	link: string
	icon?: React.ReactNode
}

interface Contents {
	beforeText?: string
	title?: string
	link: {
		text: string
		href: string
	}
	description: string
}

interface ProductItem {
	id: number
	brand: string
	imageUrl: string
	title: string
	memory: string
	color: string
	rating: number
	halfRating: boolean
	comments: number
	price: number
	discountPrice: number
	installment: string
	newless: boolean
	installmentPlan: boolean
}
