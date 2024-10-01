export type Product = {
	product: {
		id: string;
		title: string;
		price: number;
		description: string;
		images: string;
		category: {
			id: string;
			name: string;
			image: string;
		}
	}
}