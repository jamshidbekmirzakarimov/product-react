import pool from "../db/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server xato" });
  }
};

export const getSingleProduct = (req, res) => {
  res.json({ message: "Get single product" });
};

export const addProduct = async (req, res) => {
	res.json({ message: 'Create a new product' })
	try {
        const { name, price, description, image } = req.body;

        const { rows } = await pool.query(`
            INSERT INTO products (name, price, description, image)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `, [name, price, description, image]);

        res.status(201).json(rows[0]);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server xato' });
    }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(
      `
				Delete from products
				where id = $1
			`,
      [id]
    );
    res.status(201).json({ message: "Success deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server xato" });
  }
};
