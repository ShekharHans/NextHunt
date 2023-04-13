import React, { useEffect } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import { parse } from 'path'
import { useState } from 'react'
// import { getServerSideProps } from './blogpost/[slug]'
// import * as fs from 'fs';
import Fade from 'react-reveal/Fade';


// step 1 : Collect all the files from blogdata directory
// step 2 : Itreate through them and display them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)

  
  // console.log(props);

  //because we use getserversideprops()
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json();
  //   })
  //     .then((parse) => {
  //       setBlogs(parse)
  //     })
  // }, [])

  return (

    <div className={styles.main}>
      <div className={styles.blogs}>
        <Fade bottom>
          {blogs.map((blogItem) => {
            return <div key={blogItem.title} className={styles.blogItem}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3>{blogItem.title}</h3>
              </Link>
              <p>{blogItem.metadesc.substr(0, 140)}....Read More</p>
            </div>
          })}
        </Fade>
      </div>
    </div>
  )
}


// *Static Server
// export async function getStaticProps(context) {
//   let data = await fs.promises.readdir("blogdata");
//   let myfile;
//   let allBlogs = [];
//   for (let index = 0; index < data.length; index++) {
//     const item = data[index];
//     myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
//     allBlogs.push(JSON.parse(myfile))
//   }

//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   }
// }








// *getServerSideProps
export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()

  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}
export default Blog
