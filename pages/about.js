import React from 'react'
import styles from '@/styles/About.module.css'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <main>
            <Fade left>
            <h1 className={styles.aboutHeader}>
                About Me
            </h1>
            </Fade>
            <div className={styles.container}>
                {/* left-container*/}
                <div className={styles.leftContainer}>
                    <img src="https://i.suar.me/l3zYA/l" alt="Imgage" />
                </div>
                {/* right-container*/}
                <div className={styles.rightContainer}>
                    <h1 className={styles.name}>
                        Shekhar Hans
                    </h1>
                    <p className={styles.heading}>
                        Web Designer ★ Front-end Developer ★ Competitive Coder
                    </p>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corrupti dignissimos ipsam distinctio dicta porro natus quaerat, suscipit consequuntur quisquam quod praesentium tempore nostrum, harum facere recusandae dolore! Ex cupiditate veniam voluptas quod ut?
                    </p>
                    <div className={styles.button}>
                    <button className={styles.cv}>
                        <a href="./some.txt">Download Cv</a>
                    </button>
                    <button className={styles.portfolio}>
                        <a href="./some.txty">Portfolio</a>
                    </button>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default About
