function getDay(date: string) {
  const week = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const day = new Date(date).getDay();
  return week[day];
}
export default getDay;
