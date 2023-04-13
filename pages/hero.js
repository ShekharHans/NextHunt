import React from 'react'
import styles from '@/styles/Hero.module.css'
import Typical from 'react-typical'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className={styles.main}>
            <div className={styles.leftSection}>
                <h1>
                    Next <span>Hunt</span>
                </h1>
                <div className={styles.typingBox}>
                    <Typical
                        steps={['A blog for ', 2000, 'A blog for other blog hunters', 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
                <div className={styles.button} >
                    <Link href='/blog'>
                        <button className={styles.btn}>
                            Let&apos;s Go!
                        </button>
                    </Link>
                    <Link href='/contact'>
                        <button className={styles.btn1}>
                            Contact Us
                        </button>
                    </Link>
                </div>

            </div>
            <div>
                {/* <div className={styles.rightSection}>

                    <div className="heroImg">
                        <img
                            src="../public/astronaut-hero.svg"
                            className={styles.heroImg}
                        />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Hero
