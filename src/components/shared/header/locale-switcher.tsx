'use client'

import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { iconMap } from './navbar-buttons'

type Props = {
	name: string
	icon: keyof typeof iconMap
	className?: string
}

export const LocaleSwitcher: React.FC<Props> = ({ name, icon, className }) => {
	const t = useTranslations('header')
	const router = useRouter()

	const switchLocale = () => {
		const currentLocale = document.cookie
			.split('; ')
			.find(row => row.startsWith('NEXT_LOCALE='))
			?.split('=')[1]
		const newLocale = currentLocale === 'uz' ? 'ru' : 'uz'
		document.cookie = `NEXT_LOCALE=${newLocale}`
		router.refresh()
	}

	return (
		<li className={cn('text-xs cursor-pointer group', className)} onClick={switchLocale}>
			<span className='group-hover:fill-primary group-hover:text-primary flex flex-col justify-center items-center gap-1 duration-200 capitalize'>
				{iconMap[icon]}
				{t(name)}
			</span>
		</li>
	)
}
