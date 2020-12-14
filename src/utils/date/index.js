export const getChatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = (oldDate) => {
  const year = oldDate.getFullYear();
  const month = oldDate.getMonth() + 1;
  const date = oldDate.getDate();

  return `${year}-${month}-${date}`;
};
