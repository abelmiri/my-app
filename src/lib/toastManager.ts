import { EnqueueSnackbar, OptionsObject, SnackbarMessage } from "notistack"

let enqueueSnackbarRef: EnqueueSnackbar | null = null

export const toastManager = {
  setSnackbar: (func: EnqueueSnackbar) => {
    enqueueSnackbarRef = func
  },
  addToast: ({
    message,
    type = "default",
    options = {},
  }: {
    message: SnackbarMessage
    type?: "FAIL" | "SUCCESS" | "INFO" | "WARNING" | "default"
    options?: OptionsObject
  }) => {
    if (enqueueSnackbarRef) {
      // Map legacy "FAIL" type to "error" variant if needed, or just pass variant
      const variant =
        type === "FAIL"
          ? "error"
          : type === "SUCCESS"
            ? "success"
            : type === "INFO"
              ? "info"
              : type === "WARNING"
                ? "warning"
                : "default"

      enqueueSnackbarRef(message, {
        variant,
        ...options,
      })
    } else {
      console.warn("ToastManager: enqueueSnackbar is not set", message)
    }
  },
}
