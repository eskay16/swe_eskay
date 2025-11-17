import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET

export const jwtMiddleware = (req, res, next) => {
  try {
    const token = req.cookies['bj']
    if (!token) return res.status(400).json({ message: "auth token missing." });

    const decoded = jwt.verify(token, JWT_SECRET)
    console.log(decoded)

    if ('userName' in decoded) {
      console.log(decoded.userName);
      req.user = decoded;
      return next()
    }

    return res.status(400).json({ message: "invalid token." })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: "Something went wrong" })
  }
}