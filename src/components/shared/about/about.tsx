import { Container, Section } from '@/components/ui'
import { useTranslations } from 'next-intl'
import { Accordion } from './accordion'
import { advantages, contents } from '@/lib/db'

export const About: React.FC = () => {
	const t = useTranslations('about')

	return (
		<Section>
			<Container>
				<div className='bg-white rounded-2xl py-8 px-9 max-md:py-6 max-md:px-7 max-sm:px-4 max-sm:py-5'>
					<div className='flex flex-col justify-center items-center gap-3'>
						<h2 className='text-4xl font-semibold text-center first-letter:capitalize max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>
							{t('about')}
						</h2>
						<p className='text-center max-md:text-xs'>{t('description')}</p>
					</div>
					<div className='border-y border-border my-5'>
						<Accordion title={t('accordion.about')} contents={contents} />
						<Accordion title={t('accordion.advantages')} contents={advantages} />
					</div>
					<div className='pt-2 font-semibold text-lg max-md:text-base max-sm:text-sm capitalize'>
						{t('companyName')}
						<br />
						{t('register')}
						<br />
						{t('inn')}
						<br />
						{t('boss')}
					</div>
				</div>
			</Container>
		</Section>
	)
}
