function pad(num) {
  return num.toString().padStart(2, "0");
}

export default function formatDate(date) {
  return [
    pad(date.getDate()),
    pad(date.getMonth() + 1),
    date.getFullYear(),
  ].join("-");
}
