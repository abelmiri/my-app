import { Button, Box } from "@mui/material"
import styles from "./styles/HomePageButtons.module.scss"

interface ButtonConfig {
  label: string
  variant: "contained" | "outlined" | "text"
  colorType: "first" | "secondary" | "third"
  onClick?: () => void
}

const defaultButtons: ButtonConfig[] = [
  {
    label: "First Color",
    variant: "contained",
    colorType: "first",
  },
  {
    label: "Secondary Color",
    variant: "outlined",
    colorType: "secondary",
  },
  {
    label: "Third Color",
    variant: "contained",
    colorType: "third",
  },
]

export default function HomePageButtons() {
  const getButtonClassName = (colorType: string): string => {
    switch (colorType) {
      case "first":
        return styles.primaryButton
      case "secondary":
        return styles.secondaryButton
      case "third":
        return styles.thirdButton
      default:
        return styles.primaryButton
    }
  }

  return (
    <Box className={styles.buttonContainer}>
      {defaultButtons.map((button, index) => (
        <Button
          key={`${button.label}-${index}`}
          variant={button.variant}
          className={getButtonClassName(button.colorType)}
          onClick={button.onClick}
        >
          {button.label}
        </Button>
      ))}
    </Box>
  )
}
