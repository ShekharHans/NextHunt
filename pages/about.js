import React from 'react'
import styles from '@/styles/About.module.css'
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import rectangle from '../public/rectangle-68.svg'
import frame from '../public/frame.jpg'
import worldImg from '../public/world-img@2x.png'



const About = () => {
    return (
        <main>
            <Fade left>
                <h1 className={styles.aboutHeader}>
                    About Me
                </h1>
            </Fade>
            <div className={styles.aboutUsWeb}>
                <main className={styles.main} id="main">
                    <div className={styles.headings}>
                        <div className={styles.content}>
                            <div className={styles.headingAndSubheading} id="header">
                                <h1 className={styles.heading} id="heading">
                                    <p className={styles.wereHereTo}>We’re here to</p>
                                    <p className={styles.guranteeYourSuccess}>gurantee your success</p>
                                </h1>
                                <div className={styles.headingAndSubheadingChild}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutus}>
                        <div className={styles.content1} id="section-2">
                            <div className={styles.vectorParent} id="section-2-text">
                                <Image className={styles.frameChild}alt="" src={rectangle} ></Image>
                                <div className={styles.note}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus unde numquam ut dolores quidem provident illum veritatis, necessitatibus facilis, aperiam voluptatum sit! Assumenda perspiciatis asperiores molestiae nihil magni eos iure iste iusto nam quasi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima minus eos repudiandae ipsam amet? Repellat beatae in error consequatur odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, perspiciatis.
                                </div>
                            </div>
                            <Image className={styles.contentChild} alt="" src={frame} ></Image>
                        </div>
                    </div>
                    <div className={styles.headings} id="Section-3">
                        <div className={styles.content}>
                            <div className={styles.headingAndSubheading}>
                                <h1 className={styles.heading} id="heading">
                                    <p className={styles.wereHereTo}>We’re here for you</p>
                                    <p className={styles.guranteeYourSuccess}>no matter where you are</p>
                                </h1>
                                <div className={styles.headingAndSubheadingChild}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.worldmap} id="section-4">
                        <Image className={styles.containerIcon} alt="" src={worldImg} ></Image>
                    </div>
                    <div className={styles.visionmission} id="section-5">
                        <div className={styles.headingParent}>
                            <h1 className={styles.heading} id="heading">
                                <span>Our</span><span className={styles.span}> </span
                                ><span className={styles.mission}>Mission</span>
                            </h1>
                            <div className={styles.frameItem}></div>
                        </div>
                        <div className={styles.frameParent} id="section-6-text">
                            <div className={styles.unmatchedServiceParent}>
                                <div className={styles.unmatchedService}>Unmatched service</div>
                                <div className={styles.text}>
                                    Support corporate clients and financial investors with their
                                    growth strategy and international development.
                                </div>
                            </div>
                            <div className={styles.unmatchedServiceParent}>
                                <div className={styles.unmatchedService}>Specific</div>
                                <div className={styles.text}>
                                    ConsultUs’ core expertise lies in the ability to support our
                                    clients in understanding, analysing and executing commercial and
                                    investment strategies in specific markets.
                                </div>
                            </div>
                            <div className={styles.unmatchedServiceParent}>
                                <div className={styles.unmatchedService}>Experience</div>
                                <div className={styles.text}>
                                    Experience in working with and assisting a wide range of clients
                                    from international corporations to small/medium-sized
                                    businesses, from large corporate debt providers to mid-market
                                    private equity investors.
                                </div>
                            </div>
                            <div className={styles.unmatchedServiceParent}>
                                <div className={styles.unmatchedService}>Technology</div>
                                <div className={styles.text}>
                                    The best combination of technology and people.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.visionmission} id="section-7">
                        <div className={styles.headingParent}>
                            <h1 className={styles.heading} id="heading">
                                <span>Our</span><span className="span"> </span
                                ><span className={styles.mission}>Commitment</span>
                            </h1>
                            <div className={styles.frameItem}></div>
                        </div>
                        <div className={styles.frameGroup} id="section-7-text">
                            <div className={styles.unmatchedServiceParent}>
                                <div className={styles.unmatchedService}>Ethics</div>
                                <div className={styles.text}>
                                    Ethics for ConsultUs means ensuring our customers the
                                    confidentiality and uniqueness of the service they are provided.
                                    A client must be reassured by the fact that the service provided
                                    to them is made-to-measure and will not be recycled for their
                                    competitors.
                                </div>
                            </div>
                            <div className={styles.unmatchedServiceParent}>
                                <div className={styles.unmatchedService}>Quality</div>
                                <div className={styles.text}>
                                    ConsultUs is committed to ensuring that our advice and
                                    recommendations are based on the best combination of methods,
                                    information research, creativity and internal quality assurance.
                                </div>
                            </div>
                            <div className={styles.unmatchedServiceParent}>
                                <div className={styles.unmatchedService}>Continuity</div>
                                <div className={styles.text}>
                                    ConsultUs considers that the continuity of relations on the long
                                    term with its clients is the guarantee of the satisfaction of
                                    these and the quality of the services provided.
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </main>

    )
}

export default About
