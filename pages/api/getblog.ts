// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// not valid : http://localhost:3000/api/getblog?slug=shekhar
// valid : http://localhost:3000/api/getblog?slug=how-to-learn-javascript

import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';
type Data = {
  name: string
}

export default function handler(req: NextApiRequest,
  res: NextApiResponse){

  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) =>{
    if (err) {
      res.status(500).json({ error: "No Such Blog Found !!!" })
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}
