export default function getHoursAndMinutes(time: string): string | null {
  const hours = new Date(time).getHours();
  const minutes = new Date(time).getMinutes();

  if (!hours || !minutes) {
    console.error("Invalid time format when parsing to human readable time");

    return null;
  }

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}h${formattedMinutes}`;
}
