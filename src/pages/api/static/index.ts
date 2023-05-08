import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {

  res.status(200).json([
    { id: 1, name: 'pencil', price: 1.20 },
    { id: 2, name: 'pen', price: 2.00 },
    { id: 3, name: 'eraser', price: 0.50 },
  ]);

}