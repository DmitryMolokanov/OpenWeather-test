function getDate(date: string) {
  let dateNum: string | number = new Date(date).getDate();
  if (dateNum < 10) dateNum = `0${dateNum}`;
  let month: string | number = new Date(date).getMonth() + 1;
  if (month < 10) month = `0${month}`;
  return `${dateNum}.${month}`;
}
export default getDate;
