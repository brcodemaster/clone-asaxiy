import { cn } from '@/lib/utils'

type Props = {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
	return (
		<div className={cn('max-w-[1410px] mx-auto max-sm:px-2 max-lg:px-4 lg:px-5', className)}>
			{children}
		</div>
	)
}
