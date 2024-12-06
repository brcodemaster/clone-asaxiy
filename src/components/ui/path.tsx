'use client'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Container } from './container'
import { usePathname } from 'next/navigation'

export enum Categories {
	discounts = 'Скидки',
	conditioners = 'Кондиционеры',
	smartphones = 'Смартфоны',
	'home-appliances' = 'Бытовая техника',
	books = 'Книги',
	televisions = 'Телевизоры',
	laptops = 'Ноутбуки',
	'order-pay' = 'Оплатить',
	'order-status' = 'Статус заказа',
	cart = 'Корзина',
	favorites = 'Избранные',
	profile = 'Личный кабинет',
}

interface Props {
	brand?: string
	model?: string
}

export const Path: React.FC<Props> = ({ brand, model }) => {
	const path = usePathname()

	const categoryLabel = path.split('/')[1]

	return (
		<Container className='px-4 pt-40 pb-[24px]'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'>Главная</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem className='cursor-pointer'>
						<BreadcrumbLink href={`/${categoryLabel}`}>
							{Categories[categoryLabel as keyof typeof Categories]}
						</BreadcrumbLink>
					</BreadcrumbItem>
					{brand && (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem className='cursor-pointer'>
								<BreadcrumbLink href={`${brand}`}>{brand}</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem className='cursor-pointer'>{model}</BreadcrumbItem>
						</>
					)}
				</BreadcrumbList>
			</Breadcrumb>
		</Container>
	)
}
