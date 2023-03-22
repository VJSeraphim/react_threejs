import React from 'react'
import tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent vitae leo et urna consectetur pellentesque. 
        Vestibulum eu purus mi. Nulla dignissim sapien vitae odio mollis, fermentum posuere velit tempus. 
        Integer pharetra lectus ac nulla ultrices, eu laoreet purus tincidunt. Quisque mollis pharetra felis, sed tristique lorem malesuada cursus. 
        Nullam tempus aliquam diam vitae imperdiet. 
        Ut erat ante, interdum ut vehicula quis, mollis et odio. 
        Curabitur euismod tempor vehicula. 
        Quisque augue turpis, pretium et luctus in, sagittis sit amet leo. Nulla tempor, leo id pulvinar aliquet, purus erat imperdiet odio, sed pellentesque ex magna vel lectus. 
        Fusce ante massa, mollis id enim et, lacinia congue nunc. 
        Ut turpis arcu, suscipit sit amet feugiat porttitor, pellentesque vitae massa. 
        Curabitur condimentum non felis ac luctus. Sed id tellus consectetur, mattis ex sed, suscipit metus. Donec id est tempus, convallis justo vel, tristique tortor.
      </motion.p>
    </>
  )
}

export default About