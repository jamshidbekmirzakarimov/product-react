import pool from '../db/db.js'

export const getAllProducts = async (req, res) => {
	try {
		const { rows } = await pool.query('SELECT * FROM products')
		res.json(rows)
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: 'Server xato' })
	}
}


export const getSingleProduct = async (req, res) => {

	const productId = +req.params.id;
	console.log(productId,'id keldi');
	

	try{
		const result = await pool.query(`select * from products
			where id = $1
			`,[productId])
		console.log("rows:", result.rows);
		return res.status(200).json({ message: 'Get single product', result: result.rows[0] })

	}catch(error){
		console.log(error.message);
		res.status(500).json({message:'Single product is not defiend!'})
	}

};

export const addProduct = (req, res) => {
	res.json({ message: 'Create a new product' })
};

export const deleteProduct = async (req, res) => {
	try {
		const {id} = req.params
		await pool.query(`
				Delete from products
				where id = $1
			`, [id])
		res.status(201).json({message: "Success deleted"})
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: 'Server xato' })
	}
}
