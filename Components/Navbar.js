import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
// import Image from 'next/image'
const Navbar = () => {
    return (

        <nav className={styles.navBar}>
            <Link
                href="/"
                rel="noopener noreferrer"
            >
                {/* *As we use static server we cannot use next image* */}
                
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className={styles.Logo}
                    width={50}
                    height={30}

                />
            </Link>
            <ul className={styles.navItem}>
                <Link href='/' className={styles.navList}>
                    <li>Home</li>
                </Link>
                <Link href='/about' className={styles.navList}>
                    <li>About</li>
                </Link>
                <Link href='/blog' className={styles.navList}>
                    <li>Blog</li>
                </Link>
                <Link href='/contact' className={styles.navList}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>

    )
}

export default Navbar
