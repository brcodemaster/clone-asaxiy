import { hashSync } from 'bcrypt'
import { prisma } from './prisma-client'

const smartphoneBrands = ['Apple', 'Honor', 'Xiaomi', 'Artel', 'TECNO', 'Samsung']
const smartphoneModels = ['15 Pro Max', 'X9C', 'Redmi 14C', 'Z5', 'Spark 30C', 'S24Ultra']
const installments = [3, 6, 12]
const colors = ['red', 'white', 'green']

const generateProduct = (categoryId: number) => {
	const generatePrice = Math.ceil(Math.random() * 16) * 1000000
	return {
		brand: smartphoneBrands[Math.floor(Math.random() * smartphoneBrands.length)],
		model: smartphoneModels[Math.floor(Math.random() * smartphoneBrands.length)],
		imageUrl:
			'https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages2.zoodmall.com%2Fhttps%253A%2Fi.ibb.co%2FSwhG1tj%2Fimage-32.jpg',
		name: 'Smartphone',
		currentPrice: generatePrice,
		quantity: Math.floor(Math.random() * 450),
		color: colors[Math.floor(Math.random() * colors.length) + 1],
		rating: Number((Math.random() * 5.0).toFixed(1)),
		comments: Math.ceil(Math.random() * 200),
		discountPrice: generatePrice - 200000,
		installment: installments[Math.floor(Math.random() * installments.length)],
		innovative: Math.random() * 1 > 0.5 ? true : false,
		categoryId: categoryId,
	}
}

async function up() {
	await prisma.users.createMany({
		data: [
			{
				firstName: 'Nodirbek',
				lastName: 'Mullabayev',
				phoneNumber: '+998994081625',
				password: hashSync('11111111', 10),
				email: 'fishberg@mail.ru',
				passportId: 'AB5970069',
				sex: 'male',
				address: 'Toshkent sh. M.Ulug`bek t. Yuqori-Yuz 6A',
				birthday: new Date('1976-02-10'),
				work: 'Teacher',
				workAddress: 'Toshkent Davlat Agrar Universiteti',
			},
			{
				firstName: 'Navruza',
				lastName: 'Farxodova',
				phoneNumber: '+998977441403',
				password: hashSync('11111111', 10),
				email: 'navruza89@mail.ru',
				passportId: 'AB5940069',
				sex: 'female',
				address: 'Toshkent sh. M.Ulug`bek t. Yuqori-Yuz 6A',
				birthday: new Date('1989-03-14'),
				work: 'Home',
				workAddress: 'Home work',
			},
		],
	})

	await prisma.categories.createMany({
		data: [
			{
				text: 'Скидки',
				link: '/discounts',
			},
			{
				text: 'Кондиционеры',
				link: '/conditioners',
			},
			{
				text: 'Смартфоны',
				link: '/smartphones',
			},
			{
				text: 'Бытовая техника',
				link: '/home-appliances',
			},
			{
				text: 'Книги',
				link: '/books',
			},
			{
				text: 'Телевизоры',
				link: '/televisions',
			},
			{
				text: 'Ноутбуки',
				link: '/laptops',
			},
		],
	})

	await prisma.products.createMany({
		data: [
			generateProduct(1),
			generateProduct(1),
			generateProduct(1),
			generateProduct(1),
			generateProduct(1),
			generateProduct(1),
			generateProduct(1),
			generateProduct(1),
			generateProduct(1),
			generateProduct(1),
		],
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "Products" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Users" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Categories" RESTART IDENTITY CASCADE;`
}

async function main() {
	try {
		await down()
		await up()

		console.log('Next step with: SUCCESS')
	} catch (error) {
		console.log('Next step with: FAIL' + error)
	}
}

main()
	.then(() => {
		console.log('Finish with SUCCESS')
	})
	.catch(() => {
		console.log('Finish with FAIL')
		process.exit(1)
	})
	.finally(() => {
		prisma.$disconnect()
	})
