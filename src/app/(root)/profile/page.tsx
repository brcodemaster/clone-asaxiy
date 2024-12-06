import { ProfileMenu, ProfileOrders } from '@/components/shared'
import { Container, Path } from '@/components/ui'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Личный кабинет - Asaxiy',
}

const page = () => {
	return (
		<>
			<Path />
			<div className='w-full'>
				<Container className='flex gap-12 w-full mt-5 px-4'>
					<ProfileMenu className='w-4/12' />
					<ProfileOrders className='w-8/12' />
				</Container>
			</div>
		</>
	)
}

export default page
