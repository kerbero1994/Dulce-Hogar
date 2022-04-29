import React from "react"

import { StaticImage } from "gatsby-plugin-image"

function Hero() {
  return (
    <StaticImage
      //className={styles.Img}
      layout="fixed"
      formats={["auto", "webp", "avif"]}
      src="../images/profile-pic.png"
      width={90}
      height={90}
      quality={95}
      alt="Profile picture"
    ></StaticImage>
  )
}

export default Hero
