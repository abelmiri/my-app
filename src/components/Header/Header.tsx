import { Box } from "@mui/material"
import SecureEscrow from "@/media/svg/SecureEscrow"
import styles from "./styles/Header.module.scss"

export default function Header() {
  return (
    <Box component="header" className={styles.header}>
      <Box className={styles.iconContainer}>
        <SecureEscrow
          width={20}
          height={20}
          className={styles.icon}
          strokeColor="white"
        />
      </Box>
    </Box>
  )
}
