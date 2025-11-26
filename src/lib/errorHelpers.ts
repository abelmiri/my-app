export function getErrorMessage({
  status,
  data,
}: {
  status?: number
  data?: any
}): string {
  if (data && typeof data === "string") return data
  if (data?.message) return data.message
  if (data?.error) return data.error
  
  if (status === 404) return "Resource not found"
  if (status === 500) return "Internal server error"
  if (status === 403) return "Access denied"
  if (status === 401) return "Unauthorized"

  return "An unexpected error occurred"
}

export const toastConstant = {
  networkError: "Network error. Please check your connection.",
}

