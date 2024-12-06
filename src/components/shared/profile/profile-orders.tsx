import { Title } from '@/components/ui'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const ProfileOrders: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('bg-white shadow-lg shadow-gray-400/20 p-8 rounded-md', className)}>
			<Title title='Мои Заказы' size='xl' />
		</div>
	)
}
