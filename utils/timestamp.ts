const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
export const timestamp = `${year}-${month}-${day}`;