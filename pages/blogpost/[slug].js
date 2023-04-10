import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';

//step 1 : Find the file corresponding to the slug
//step 2 : Populate them inside the page
const Slug = (props) => {
    function createMarkup(c) {
        return { __html: c };
    }
    const [blog, setBlog] = useState(props.myBlog)

    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parse) => {
                setBlog(parse)
            })
    }, [router.isReady])
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr />
                {blog && <div className={styles.blogText} dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}

            </main>
        </div>
    )
}

// *static server 

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nodejs' } },
            { params: { slug: 'how-to-learn-reactjs' } }
        ],
        fallback: true, // can also be true or 'blocking'
    }
}


export async function getStaticProps(context) {

    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}


// *Get server side props

// export async function getServerSideProps(context) {

//     const { slug } = context.query;
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//     let myBlog = await data.json()

//     return {
//         props: { myBlog }, // will be passed to the page component as props
//     }
// }
export default Slug;
