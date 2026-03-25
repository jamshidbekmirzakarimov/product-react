import jwt from 'jsonwebtoken'

export const refreshController = (req, res) => {
	const { refreshToken } = req.body

	if (!refreshToken)
		return res.status(401).json({ message: 'Refresh token berilmagan' })

	try {
		// VERIFY REFRESH TOKEN
		const decoded = jwt.verify(refreshToken, 'Secret')

		console.log(decoded)

		// CREATE NEW JWT ACCESS TOKEN
		const new_access_token = jwt.sign(
			{
				id: decoded.id,
				username: decoded.username,
			},
			'Secret',
			{ expiresIn: '30s' },
		)

		res
			.status(200)
			.json({ id: decoded.id, username: decoded.username, new_access_token })
	} catch (error) {
		res
			.status(403)
			.json({ message: "Refresh token xato yoki allaqachon eskirib bo'lgan" })
            console.log(error)
	}
}
