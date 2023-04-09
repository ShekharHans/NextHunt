import React from 'react'
import styles from '@/styles/Contact.module.css'


const Contact = () => {
  return (
    <>
      <div className={styles.body}>
        <section className={styles.contactContainer}>
          <form className={styles.contactForm}>
            <div className={styles.heading}>
              <h2>CONTACT US</h2>
              <p>feel free to reach out to us, we&apos;d love to hear from you!</p>
            </div>
            <div className={styles.input}>

              <input name="username" type="text" placeholder="Name" />
            </div>
            <div className={styles.input}>

              <input name="email" type="email" placeholder="Email" />
            </div>
            <div className={styles.input}>

              <textarea
                name="message"
                cols="20"
                rows="5"
                placeholder="Message"

              ></textarea>
            </div >
            <input className={styles.button} type="button" value="Submit" />
          </form >
        </section >
      </div >
    </>
  )
}

export default Contact
