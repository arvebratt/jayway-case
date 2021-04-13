export default function useTimeDate() {
  const locale = "en";
  const today = new Date();

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
    second: "numeric",
  });

  const date = `${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "short",
  })}`;

  return time + ", " + date;
}
