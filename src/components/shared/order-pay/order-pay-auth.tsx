import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { Path } from '@/components/ui/path'
import { Title } from '@/components/ui/title'

export const OrderPayAuth: React.FC = () => {
	return (
		<Container>
			<Path />
			<div className='bg-white rounded-md w-full flex justify-between items-center gap-5 p-5 py-24 px-28 shadow-2xl shadow-gray-500/20'>
				<div className='flex flex-col justify-center items-center gap-5'>
					<Title title='Оплатить' size='xl' />
					<div className='w-400px text-center'>
						<p>Внимательно введите номер вашего заказа или Ваш ID в системе</p>
					</div>
					<Input placeholder='Например: А777 или B999' name='order' />
					<span className='text-sm flex flex-col text-center text-gray-400/90'>
						<span>В - для оплаты заказа</span>
						<span>A - для пополнения личного счета</span>
						<span>M - для погашения рассрочки</span>
					</span>
					<Button className='w-[400px]'>Подтвердить</Button>
				</div>
				<div className='flex-shrink-0'>
					<img
						src='https://asaxiy.uz/custom-assets/images/track-icons/order-pay.svg'
						alt='No-order'
					/>
				</div>
			</div>
		</Container>
	)
}
