import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ idx, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*idx, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img 
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

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
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, idx) => (
          <ServiceCard 
            key={service.title}
            idx={idx}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")