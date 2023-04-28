export default function handler(req, res) {

  if (req.method === 'GET') {
    const { id } = req.query
    res.status(200).json({
      id
    })
  }
}