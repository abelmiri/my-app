"use client"

import { useEffect } from "react"
import { useSnackbar } from "notistack"
import { toastManager } from "@/lib/toastManager"

export default function ToastRegistry() {
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    toastManager.setSnackbar(enqueueSnackbar)
  }, [enqueueSnackbar])

  return null
}
