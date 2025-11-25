import { Typography, Box } from "@mui/material"
import styles from "./styles/LandingHeading.module.scss"

export default function LandingHeading() {
  return (
    <Box className={styles.heading}>
      <Typography className={styles.firstLine}>Secure Transactions</Typography>
      <Typography className={styles.secondLine}>You Can Trust</Typography>
    </Box>
  )
}
