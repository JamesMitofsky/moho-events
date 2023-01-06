export default function filterDateOrNumberToDate(value: number | Date): Date {
  if (value instanceof Date) {
    return value;
  }

  return new Date(value);
}
