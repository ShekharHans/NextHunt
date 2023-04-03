// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(req:NextApiRequest , res: NextApiResponse) {
  
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile(('blogdata/'+item),'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  res.status(200).json(allBlogs)
}
















// import type { NextApiRequest, NextApiResponse } from 'next'
// import * as fs from 'fs';
// type Data = {
//   name: string
// }

// export default function handler(
//   {
  
// }




