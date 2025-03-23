import { Container, Section } from '@/components/ui'
import { cn } from '@/lib/utils'
import { BannerItem } from './banner-item'
import { banner } from '@/lib/db'

type Props = {
	className?: string
}

export const Banner: React.FC<Props> = ({ className }) => {
	return (
		<Section>
			<div className='bg-primary py-8 max-md:py-5 max-sm:py-3'>
				<Container className={cn('', className)}>
					<div className='flex justify-between items-center gap-5 px-10 py-8 bg-white shadow-xl shadow-white/15 rounded-3xl max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1 max-md:px-7 max-md:py-5'>
						{banner.map(item => (
							<BannerItem
								key={item.title}
								icon={item.icon}
								title={item.title}
								description={item.description}
								className={item.className}
							/>
						))}
					</div>
				</Container>
			</div>
		</Section>
	)
}
