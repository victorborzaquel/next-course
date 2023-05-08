import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string;
  name: string;
} | {}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      const { id } = req.query as { id: string }
      res.status(200).json({ name: 'John Doe', id })
      break
    case 'POST':
      res.status(200).json({ name: 'John Doe', id: '123' })
      break
    default:
      res.status(405).send('Method Not Allowed')
      break
  }
}