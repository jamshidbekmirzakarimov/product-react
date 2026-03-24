
export const getAllProducts = (req, res) => {
	res.json({ message: 'Get all products' });
}

export const getSingleProduct = (req, res) => {
	res.json({ message: 'Get single product' });
}

export const addProduct = (req, res) => {
	res.json({ message: 'Create a new product' });
}

export const deleteProduct = (req, res) => {
	res.json({ message: 'Delete a product' });
}
