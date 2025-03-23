import { Card, FastDelivery, Market, Return } from '@/components/ui'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

type Props = {
	icon: keyof typeof bannerIconMap
	title: string
	description: string
	className?: string
}

export const bannerIconMap = {
	box: <Market className='w-[44px] h-auto' />,
	delivery: <FastDelivery className='w-[44px] h-auto' />,
	return: <Return className='w-[44px] h-auto' />,
	card: <Card className='w-[44px] h-auto' />,
} as const

export const BannerItem: React.FC<Props> = ({ icon, description, title, className }) => {
	const t = useTranslations('banner')

	return (
		<div className={cn('flex items-center gap-5', className)}>
			{bannerIconMap[icon]}
			<div className='flex flex-col justify-center items-start'>
				<h4 className='text-base font-medium flex-nowrap max-sm:text-sm'>{t(title)}</h4>
				<p className='text-sm text-gray-400 max-sm:text-xs'>{t(description)}</p>
			</div>
		</div>
	)
}
