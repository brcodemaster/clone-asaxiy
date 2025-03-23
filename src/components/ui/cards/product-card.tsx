import { cn } from '@/lib/utils'

type Props = {
	className?: string
}

export const ProductCard: React.FC<Props> = ({ className }) => {
	return <div className={cn('max-w-[257px] bg-white', className)}></div>
}
