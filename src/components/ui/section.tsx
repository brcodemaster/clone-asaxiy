import { cn } from '@/lib/utils'

type Props = {
	className?: string
}

export const Section: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
	return <section className={cn('pt-[70px]', className)}>{children}</section>
}
