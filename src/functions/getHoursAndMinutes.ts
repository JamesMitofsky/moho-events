export default function getHoursAndMinutes(time: string): string {
  const hours = new Date(time).getHours();
  const minutes = new Date(time).getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}h${formattedMinutes}`;
}
