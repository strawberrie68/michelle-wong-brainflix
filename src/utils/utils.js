export function convertTimestamp(timestamp) {
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export function formatLikes(likes) {
  return (Number(likes.replace(/,/g, "")) + 1).toLocaleString();
}
