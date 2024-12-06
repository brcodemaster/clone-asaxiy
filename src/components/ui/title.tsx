import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

interface Props {
	className?: string
	title: string
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const titleVariants = cva('', {
	variants: {
		size: {
			sm: 'text-sm font-medium py-2',
			md: 'font-semibold py-4',
			lg: 'text-xl font-bold py-5',
			xl: 'text-3xl font-semibold',
			'2xl': 'text-4xl font-semibold',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

export const Title: React.FC<Props> = ({ className, title, size = 'md' }) => {
	return <div className={cn(titleVariants({ size }), className)}>{title}</div>
}
