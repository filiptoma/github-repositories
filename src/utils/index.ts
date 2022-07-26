export const formatISODate = (iso: string, locale = "en-GB") =>
  new Date(iso).toLocaleDateString(locale)
