import { Product } from '@prisma/client'
import { axiosInstance } from './axios-instance'
import { apiRoutes } from './constants'

export const search = async (query: string): Promise<Product[]> => {
	return (await axiosInstance.get<Product[]>(apiRoutes.SEARCH_PRODUCTS, { params: { query } })).data
}
