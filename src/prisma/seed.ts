import { hashSync } from 'bcrypt'
import { prisma } from './prisma-client'
import { categories } from './constants'

async function up() {
	await prisma.user.createMany({
		data: [
			{
				firstName: 'Nodirbek',
				lastName: 'Mullabayev',
				phoneNumber: '+998994081625',
				password: hashSync('11111111', 10),
				email: 'fishberg@mail.ru',
				passportId: 'AB5970069',
				sex: 'Male',
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
				sex: 'Female',
				address: 'Toshkent sh. M.Ulug`bek t. Yuqori-Yuz 6A',
				birthday: new Date('1989-03-14'),
				work: 'Home',
				workAddress: 'Home work',
			},
		],
	})

	await prisma.category.createMany({
		data: categories,
	})

	await prisma.product.createMany({
		data: [
			{
				brand: 'Honor',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/3b964f57f1d29b09978b93f7ff6f8d572024111918363268915IeDhzdkHjI.png',
				model: 'X9C',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Jade Cyan',
				rating: 'one',
				halfRating: true,
				comments: 2,
				price: 4799000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 5,

				categoryId: 3,
			},
			{
				brand: 'Xiaomi',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/83a78f4e5b06064933881de347da18aa2024092015443876860HIw4v4KXJO.jpg',
				model: 'Redmi 14C',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '6/128',
				color: 'Black',
				rating: 'three',
				halfRating: true,
				comments: 0,
				price: 1869000,
				discountPrice: 0,
				installment: 0,
				innovative: true,

				quantity: 10,

				categoryId: 3,
			},
			{
				brand: 'Samsung',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/fa798b88b87ecc1e75eefba3df85c2072024031418494072118nZ8xYjddUp.png.webp',
				model: 'Galaxy A55',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Awesome Navy',
				rating: 'two',
				halfRating: false,
				comments: 8,
				price: 4599000,
				discountPrice: 5279000,
				installment: 3,
				innovative: false,

				quantity: 0,

				categoryId: 3,
			},
			{
				brand: 'TECNO',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/ebb3359de62e776edc7ea15a16efecfb2024111521040219262dtG8ra0qvO.jpg',
				model: 'Spark 30C',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Orbit Black',
				rating: 'four',
				halfRating: false,
				comments: 128,
				price: 2099000,
				discountPrice: 0,
				installment: 6,
				innovative: false,

				quantity: 25,

				categoryId: 3,
			},
			{
				brand: 'iPhone',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c8ed21db4f678f3b13b9d5ee164890882023092315103648645HUWqea3pTc.png.webp',
				model: '15 Pro max',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '256',
				color: 'Синий Титан',
				rating: 'five',
				halfRating: false,
				comments: 128,
				price: 16159000,
				discountPrice: 16569000,
				installment: 0,
				innovative: false,

				quantity: 82,

				categoryId: 3,
			},
			{
				brand: 'Honor',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/9ff181c0b7c5047488051e8f2922b3fc20240108140103836202wTPeJFjWD.png.webp',
				model: 'X8b',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Благородный зеленый',
				rating: 'five',
				halfRating: false,
				comments: 7,
				price: 3009000,
				discountPrice: 3289000,
				installment: 3,
				innovative: false,

				quantity: 81,

				categoryId: 3,
			},
			{
				brand: 'Xiaomi',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/a86c450b76fb8c371afead6410d5553420240117145846554823R9HQkGben.png.webp',
				model: 'Redmi Note 13 Pro',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Midnight Black',
				rating: 'four',
				halfRating: true,
				comments: 97,
				price: 2939000,
				discountPrice: 3179000,
				installment: 6,
				innovative: false,

				quantity: 93,

				categoryId: 3,
			},
			{
				brand: 'Honor',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/2b24d495052a8ce66358eb576b8912c82023112017054436163VpjZJH4C6x.png.webp',
				model: 'X9b 5G',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Зеленый',
				rating: 'three',
				halfRating: true,
				comments: 76,
				price: 3799000,
				discountPrice: 4319000,
				installment: 0,
				innovative: false,

				quantity: 87,

				categoryId: 3,
			},
			{
				brand: 'Samsung',
				imageUrl:
					'https://assets.asaxiy.uz/product/items/desktop/443cb001c138b2561a0d90720d6ce1112024012013394689300fCwyKIWdm4.png.webp',
				model: 'Galaxy S24 Ultra',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '12/256',
				color: 'Titanium Gray',
				rating: 'five',
				halfRating: false,
				comments: 135,
				price: 12379000,
				discountPrice: 13319000,
				installment: 0,
				innovative: false,

				quantity: 83,

				categoryId: 3,
			},
			{
				brand: 'Samsung',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/e3796ae838835da0b6f6ea37bcf8bcb72023120218360236082eeIPhDKLUS.png.webp',
				model: 'Galaxy Tab A9',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '4/64',
				color: 'Серый',
				rating: 'two',
				halfRating: true,
				comments: 1,
				price: 2189000,
				discountPrice: 2609000,
				installment: 6,
				innovative: false,

				quantity: 0,

				categoryId: 3,
			},
			{
				brand: 'Honor',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/3b964f57f1d29b09978b93f7ff6f8d572024111918363268915IeDhzdkHjI.png',
				model: 'X9C',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Jade Cyan',
				rating: 'one',
				halfRating: true,
				comments: 2,
				price: 4799000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 3,

				categoryId: 3,
			},
			{
				brand: 'Xiaomi',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/83a78f4e5b06064933881de347da18aa2024092015443876860HIw4v4KXJO.jpg',
				model: 'Redmi 14C',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '6/128',
				color: 'Black',
				rating: 'three',
				halfRating: true,
				comments: 0,
				price: 1869000,
				discountPrice: 0,
				installment: 0,
				innovative: true,

				quantity: 0,

				categoryId: 3,
			},
			{
				brand: 'Samsung',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/fa798b88b87ecc1e75eefba3df85c2072024031418494072118nZ8xYjddUp.png.webp',
				model: 'Galaxy A55',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Awesome Navy',
				rating: 'two',
				halfRating: false,
				comments: 8,
				price: 4599000,
				discountPrice: 5279000,
				installment: 3,
				innovative: false,

				quantity: 82,

				categoryId: 3,
			},
			{
				brand: 'TECNO',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/ebb3359de62e776edc7ea15a16efecfb2024111521040219262dtG8ra0qvO.jpg',
				model: 'Spark 30C',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Orbit Black',
				rating: 'four',
				halfRating: false,
				comments: 128,
				price: 2099000,
				discountPrice: 0,
				installment: 6,
				innovative: false,

				quantity: 36,

				categoryId: 3,
			},
			{
				brand: 'iPhone',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c8ed21db4f678f3b13b9d5ee164890882023092315103648645HUWqea3pTc.png.webp',
				model: '15 Pro max',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '256',
				color: 'Синий Титан',
				rating: 'five',
				halfRating: false,
				comments: 128,
				price: 16159000,
				discountPrice: 16569000,
				installment: 0,
				innovative: false,

				quantity: 35,

				categoryId: 3,
			},
			{
				brand: 'Honor',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/9ff181c0b7c5047488051e8f2922b3fc20240108140103836202wTPeJFjWD.png.webp',
				model: 'X8b',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Благородный зеленый',
				rating: 'five',
				halfRating: false,
				comments: 7,
				price: 3009000,
				discountPrice: 3289000,
				installment: 3,
				innovative: false,

				quantity: 40,

				categoryId: 3,
			},
			{
				brand: 'Xiaomi',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/a86c450b76fb8c371afead6410d5553420240117145846554823R9HQkGben.png.webp',
				model: 'Redmi Note 13 Pro',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Midnight Black',
				rating: 'four',
				halfRating: true,
				comments: 97,
				price: 2939000,
				discountPrice: 3179000,
				installment: 6,
				innovative: false,

				quantity: 73,

				categoryId: 3,
			},
			{
				brand: 'Honor',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/2b24d495052a8ce66358eb576b8912c82023112017054436163VpjZJH4C6x.png.webp',
				model: 'X9b 5G',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '8/256',
				color: 'Зеленый',
				rating: 'three',
				halfRating: true,
				comments: 76,
				price: 3799000,
				discountPrice: 4319000,
				installment: 0,
				innovative: false,

				quantity: 37,

				categoryId: 3,
			},
			{
				brand: 'Samsung',
				imageUrl:
					'https://assets.asaxiy.uz/product/items/desktop/443cb001c138b2561a0d90720d6ce1112024012013394689300fCwyKIWdm4.png.webp',
				model: 'Galaxy S24 Ultra',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '12/256',
				color: 'Titanium Gray',
				rating: 'five',
				halfRating: false,
				comments: 135,
				price: 12379000,
				discountPrice: 13319000,
				installment: 0,
				innovative: false,

				quantity: 0,

				categoryId: 3,
			},
			{
				brand: 'Samsung',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/e3796ae838835da0b6f6ea37bcf8bcb72023120218360236082eeIPhDKLUS.png.webp',
				model: 'Galaxy Tab A9',
				type: 'smartphones',
				name: 'Смартфон',
				memory: '4/64',
				color: 'Серый',
				rating: 'two',
				halfRating: true,
				comments: 1,
				price: 2189000,
				discountPrice: 2609000,
				installment: 6,
				innovative: false,

				quantity: 0,

				categoryId: 3,
			},
			{
				brand: 'Immer',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/6512bd43d9caa6e02c990b0a82652dca2024071013143312412hPQS96XhGy.jpg',
				model: 'T-Crystal 12 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'four',
				halfRating: true,
				comments: 3,
				price: 4135000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Midea',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32023030709134481293hOBe6xJhW6.jpg.webp',
				model: 'Naomi Inverter 12',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Черный',
				rating: 'four',
				halfRating: false,
				comments: 0,
				price: 5989000,
				discountPrice: 0,
				installment: 3,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Hofmann',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/6512bd43d9caa6e02c990b0a82652dca2023012711283367155CjfahyatdO.jpg.webp',
				model: 'Compact 3D Inverter 09',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '9,000',
				color: 'Белый',
				rating: 'three',
				halfRating: true,
				comments: 23,
				price: 5219000,
				discountPrice: 5319000,
				installment: 3,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Artel',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32021111511360756982oKqdjApftZ.png.webp',
				model: 'Everest 12',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'two',
				halfRating: true,
				comments: 49,
				price: 4509000,
				discountPrice: 0,
				installment: 0,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Artel',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b2023080314285639216KyOYIvCVdy.jpg.webp',
				model: 'Iceberg 12 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 4719000,
				discountPrice: 0,
				installment: 0,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Shivaki',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b2022051814201224691HbQ5fmSG57.png.webp',
				model: 'Elegant 12',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'one',
				halfRating: true,
				comments: 0,
				price: 4079000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'LG',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32023062216131176166zeYnw8hHox.png.webp',
				model: 'DUAL Cool 09 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 6379000,
				discountPrice: 7089000,
				installment: 3,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'TCL',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd320240611133656929197VUkl8Z042.jpg',
				model: 'Elite E3 18 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 5459000,
				discountPrice: 6119000,
				installment: 0,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'LG',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32023062216131176166zeYnw8hHox.png.webp',
				model: 'DUAL Cool 09 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 6379000,
				discountPrice: 7089000,
				installment: 6,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Rulls',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/d4bd41e28be4069b5b61d2d7e47f4cfe2024072411322037516eokWV3F4lX.jpg',
				model: 'Liberty Inverter 12',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'three',
				halfRating: true,
				comments: 0,
				price: 4559000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Immer',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/6512bd43d9caa6e02c990b0a82652dca2024071013143312412hPQS96XhGy.jpg',
				model: 'T-Crystal 12 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'four',
				halfRating: true,
				comments: 3,
				price: 4135000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Midea',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32023030709134481293hOBe6xJhW6.jpg.webp',
				model: 'Naomi Inverter 12',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Черный',
				rating: 'four',
				halfRating: false,
				comments: 0,
				price: 5989000,
				discountPrice: 0,
				installment: 3,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Hofmann',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/6512bd43d9caa6e02c990b0a82652dca2023012711283367155CjfahyatdO.jpg.webp',
				model: 'Compact 3D Inverter 09',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '9,000',
				color: 'Белый',
				rating: 'three',
				halfRating: true,
				comments: 23,
				price: 5219000,
				discountPrice: 5319000,
				installment: 3,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Artel',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32021111511360756982oKqdjApftZ.png.webp',
				model: 'Everest 12',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'two',
				halfRating: true,
				comments: 49,
				price: 4509000,
				discountPrice: 0,
				installment: 0,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Artel',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b2023080314285639216KyOYIvCVdy.jpg.webp',
				model: 'Iceberg 12 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 4719000,
				discountPrice: 0,
				installment: 0,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Shivaki',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b2022051814201224691HbQ5fmSG57.png.webp',
				model: 'Elegant 12',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'one',
				halfRating: true,
				comments: 0,
				price: 4079000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'LG',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32023062216131176166zeYnw8hHox.png.webp',
				model: 'DUAL Cool 09 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 6379000,
				discountPrice: 7089000,
				installment: 3,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'TCL',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd320240611133656929197VUkl8Z042.jpg',
				model: 'Elite E3 18 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 5459000,
				discountPrice: 6119000,
				installment: 0,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'LG',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32023062216131176166zeYnw8hHox.png.webp',
				model: 'DUAL Cool 09 Inverter',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 6379000,
				discountPrice: 7089000,
				installment: 6,
				innovative: false,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Rulls',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/d4bd41e28be4069b5b61d2d7e47f4cfe2024072411322037516eokWV3F4lX.jpg',
				model: 'Liberty Inverter 12',
				type: 'conditioners',
				name: 'Кондиционер',
				capacity: '12,000',
				color: 'Белый',
				rating: 'three',
				halfRating: true,
				comments: 0,
				price: 4559000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 2,

				categoryId: 2,
			},
			{
				brand: 'Xiaomi',
				imageUrl:
					'https://assets.asaxiy.uz/product/items/desktop/8bb22ebbd25c8b5e9b2d60c9ad5628f52021082817551678552BI80x7ws77.jpg.webp',
				model: 'Deerma DX900 Green',
				type: 'home-appliances',
				name: 'Пылесос',
				color: 'Белый',
				rating: 'three',
				halfRating: true,
				comments: 0,
				price: 999000,
				discountPrice: 0,
				installment: 0,

				quantity: 25,
				innovative: true,

				categoryId: 4,
			},
			{
				brand: 'Tefal',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/72b32a1f754ba1c09b3695e0cb6cde7f2023102510414544852bUvEq3adpc.jpg.webp',
				model: 'KI750D30',
				type: 'home-appliances',
				name: 'Чайник',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 1339000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 76,

				categoryId: 4,
			},
			{
				brand: 'Samsung',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/5e15c06eae41f.jpeg.webp',
				model: 'VC21K5150HP',
				type: 'home-appliances',
				name: 'Пылесос',
				rating: 'two',
				halfRating: false,
				comments: 0,
				price: 2549000,
				discountPrice: 0,
				installment: 0,
				innovative: true,

				quantity: 0,

				categoryId: 4,
			},
			{
				brand: 'Tefal',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/9a1158154dfa42caddbd0694a4e9bdc82023102510304841644dEpE5nWzGW.jpg.webp',
				model: 'KO450132',
				type: 'home-appliances',
				name: 'Чайник',
				rating: 'one',
				halfRating: true,
				comments: 0,
				price: 989000,
				discountPrice: 0,
				installment: 0,
				innovative: false,

				quantity: 75,

				categoryId: 4,
			},
			{
				brand: 'Shivaki',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/6512bd43d9caa6e02c990b0a82652dca20230202144846370955x1d21ifjp.jpg',
				model: '20MX74',
				type: 'home-appliances',
				name: 'Микроволновая печь',
				rating: 'three',
				halfRating: true,
				comments: 0,
				price: 1059000,
				discountPrice: 0,
				installment: 3,
				innovative: true,

				quantity: 68,

				categoryId: 4,
			},
			{
				brand: 'Sonifer',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/dc121220e5f8dad04529de55334063272023022612433532690jN1stUSEU7.jpg.webp',
				model: 'SF - 5525',
				type: 'home-appliances',
				name: 'Соковыжималка, блендер, чопер, кофемолка',
				rating: 'two',
				halfRating: false,
				comments: 0,
				price: 789000,
				discountPrice: 969000,
				installment: 0,
				innovative: false,

				quantity: 24,

				categoryId: 4,
			},
			{
				brand: 'MoonX',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/182be0c5cdcd5072bb1864cdee4d3d6e2024010613400537487cj0QvNBxr8.jpg.webp',
				model: 'SY6000W',
				type: 'home-appliances',
				name: 'Стиральная машина',
				rating: 'five',
				halfRating: false,
				comments: 25,
				price: 2949000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 5,

				categoryId: 4,
			},
			{
				brand: 'Perilla',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b20210331095622560403DO4msE1Z4.jpg.webp',
				model: 'Alisa',
				type: 'home-appliances',
				name: 'Гладильная доска',
				rating: 'two',
				halfRating: true,
				comments: 58,
				price: 1049000,
				discountPrice: 0,
				installment: 3,
				innovative: true,

				quantity: 86,

				categoryId: 4,
			},
			{
				brand: 'Yesido',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/eccbc87e4b5ce2fe28308fd9f2a7baf32023120411072847109jdgZnjnDGq.jpg.webp',
				model: 'MG04',
				type: 'home-appliances',
				name: 'Массажер для головы',
				rating: 'one',
				halfRating: false,
				comments: 67,
				price: 479000,
				discountPrice: 0,
				installment: 3,
				innovative: false,

				quantity: 97,

				categoryId: 4,
			},
			{
				brand: 'SONIFER',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/455d68bbeb9bf49dac5c589988e5faad2022100917060013092lB3Yu9wDh7.jpg.webp',
				model: 'SF-6144',
				type: 'home-appliances',
				name: 'Вафельница',
				rating: 'five',
				halfRating: false,
				comments: 72,
				price: 849000,
				discountPrice: 939000,
				installment: 3,
				innovative: false,

				quantity: 0,

				categoryId: 4,
			},
			{
				brand: 'Xiaomi',
				imageUrl:
					'https://assets.asaxiy.uz/product/items/desktop/8bb22ebbd25c8b5e9b2d60c9ad5628f52021082817551678552BI80x7ws77.jpg.webp',
				model: 'Deerma DX900 Green',
				type: 'home-appliances',
				name: 'Пылесос',
				color: 'Белый',
				rating: 'three',
				halfRating: true,
				comments: 0,
				price: 999000,
				discountPrice: 0,
				installment: 0,

				quantity: 57,
				innovative: true,

				categoryId: 4,
			},
			{
				brand: 'Tefal',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/72b32a1f754ba1c09b3695e0cb6cde7f2023102510414544852bUvEq3adpc.jpg.webp',
				model: 'KI750D30',
				type: 'home-appliances',
				name: 'Чайник',
				rating: 'five',
				halfRating: false,
				comments: 0,
				price: 1339000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 68,

				categoryId: 4,
			},
			{
				brand: 'Samsung',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/5e15c06eae41f.jpeg.webp',
				model: 'VC21K5150HP',
				type: 'home-appliances',
				name: 'Пылесос',
				rating: 'two',
				halfRating: false,
				comments: 0,
				price: 2549000,
				discountPrice: 0,
				installment: 0,
				innovative: true,

				quantity: 85,

				categoryId: 4,
			},
			{
				brand: 'Tefal',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/9a1158154dfa42caddbd0694a4e9bdc82023102510304841644dEpE5nWzGW.jpg.webp',
				model: 'KO450132',
				type: 'home-appliances',
				name: 'Чайник',
				rating: 'one',
				halfRating: true,
				comments: 0,
				price: 989000,
				discountPrice: 0,
				installment: 0,
				innovative: false,

				quantity: 34,

				categoryId: 4,
			},
			{
				brand: 'Shivaki',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/6512bd43d9caa6e02c990b0a82652dca20230202144846370955x1d21ifjp.jpg',
				model: '20MX74',
				type: 'home-appliances',
				name: 'Микроволновая печь',
				rating: 'three',
				halfRating: true,
				comments: 0,
				price: 1059000,
				discountPrice: 0,
				installment: 3,
				innovative: true,

				quantity: 100,

				categoryId: 4,
			},
			{
				brand: 'Sonifer',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/dc121220e5f8dad04529de55334063272023022612433532690jN1stUSEU7.jpg.webp',
				model: 'SF - 5525',
				type: 'home-appliances',
				name: 'Соковыжималка, блендер, чопер, кофемолка',
				rating: 'two',
				halfRating: false,
				comments: 0,
				price: 789000,
				discountPrice: 969000,
				installment: 0,
				innovative: false,

				quantity: 50,

				categoryId: 4,
			},
			{
				brand: 'MoonX',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/182be0c5cdcd5072bb1864cdee4d3d6e2024010613400537487cj0QvNBxr8.jpg.webp',
				model: 'SY6000W',
				type: 'home-appliances',
				name: 'Стиральная машина',
				rating: 'five',
				halfRating: false,
				comments: 25,
				price: 2949000,
				discountPrice: 0,
				installment: 6,
				innovative: true,

				quantity: 0,

				categoryId: 4,
			},
			{
				brand: 'Perilla',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b20210331095622560403DO4msE1Z4.jpg.webp',
				model: 'Alisa',
				type: 'home-appliances',
				name: 'Гладильная доска',
				rating: 'two',
				halfRating: true,
				comments: 58,
				price: 1049000,
				discountPrice: 0,
				installment: 3,
				innovative: true,

				quantity: 45,

				categoryId: 4,
			},
			{
				brand: 'Yesido',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/eccbc87e4b5ce2fe28308fd9f2a7baf32023120411072847109jdgZnjnDGq.jpg.webp',
				model: 'MG04',
				type: 'home-appliances',
				name: 'Массажер для головы',
				rating: 'one',
				halfRating: false,
				comments: 67,
				price: 479000,
				discountPrice: 0,
				installment: 3,
				innovative: false,

				quantity: 75,

				categoryId: 4,
			},
			{
				brand: 'SONIFER',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/455d68bbeb9bf49dac5c589988e5faad2022100917060013092lB3Yu9wDh7.jpg.webp',
				model: 'SF-6144',
				type: 'home-appliances',
				name: 'Вафельница',
				rating: 'five',
				halfRating: false,
				comments: 72,
				price: 849000,
				discountPrice: 939000,
				installment: 3,
				innovative: false,

				quantity: 35,

				categoryId: 4,
			},
			{
				brand: 'Abdurazzoq Gurna',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/2b3f081dca2647964cadebb3b7baad502024110816113133870LgCiphqUJ4.jpg',
				model: 'Jannat',
				type: 'books',
				name: 'Книга',
				rating: 'five',
				halfRating: false,
				comments: 72,
				price: 70000,
				discountPrice: 50000,
				installment: 3,
				innovative: false,

				quantity: 17,

				categoryId: 5,
			},
			{
				brand: 'Tara Vestover',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/db957c626a8cd7a27231adfbf51e20eb2024083014003525624E5dpPfvfyP.jpg',
				model: 'Talaba',
				type: 'books',
				name: 'Книга',
				rating: 'five',
				halfRating: false,
				comments: 56,
				price: 60000,
				discountPrice: 0,
				installment: 0,
				innovative: true,

				quantity: 1,

				categoryId: 5,
			},
			{
				brand: 'Samsung',
				imageUrl:
					'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/96a3be3cf272e017046d1b2674a52bd32022120511500494026BiZ8GEHJFJ.jpg.webp',
				model: 'UE43T5300AU FHD SmartTV',
				type: 'televisions',
				name: 'Телевизор',
				rating: 'three',
				halfRating: true,
				comments: 23,
				price: 3719000,
				discountPrice: 4200000,
				installment: 0,
				innovative: false,

				quantity: 0,

				categoryId: 6,
			},
			{
				brand: 'Acer',
				imageUrl:
					'https://assets.asaxiy.uz/product/items/desktop/c81e728d9d4c2f636f067f89cc14862c2024021709400594944c6VL1OXGPv.jpg.webp',
				model: 'Aspire 3',
				type: 'laptops',
				name: 'Ноутбук',
				rating: 'one',
				halfRating: true,
				comments: 97,
				price: 5799000,
				discountPrice: 0,
				installment: 0,
				innovative: true,

				quantity: 84,

				categoryId: 7,
			},
		],
	})
}

async function down() {
	// Mysql
	// await prisma.$executeRaw`SET foreign_key_checks = 0;`
	// await prisma.$executeRaw`TRUNCATE TABLE \`user\`;`
	// await prisma.$executeRaw`TRUNCATE TABLE \`category\`;`
	// await prisma.$executeRaw`TRUNCATE TABLE \`product\`;`
	// await prisma.$executeRaw`SET foreign_key_checks = 1;`

	// Postgresql
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`
}

async function main() {
	try {
		await down()
		await up()
	} catch (error) {
		console.log('Error: ' + error)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
