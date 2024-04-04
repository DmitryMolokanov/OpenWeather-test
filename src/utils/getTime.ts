function getTime(date: string) {
  let hour: string | number = new Date(date).getHours();
  if (hour < 10) hour = `0${hour}`;
  let minute: string | number = new Date(date).getMinutes();
  if (minute < 10) minute = `0${minute}`;
  return `${hour}:${minute}`;
}
export default getTime;
