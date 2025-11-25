import { Typography } from "@mui/material"
import styles from "./styles/LandingHeadingDescription.module.scss"

export default function LandingHeadingDescription() {
  return (
    <Typography className={styles.description}>
      The world's most trusted escrow platform. Buy and sell with confidence,
      protected by our secure payment system and professional support.
    </Typography>
  )
}
