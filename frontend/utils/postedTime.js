const ms_in_second = 1000;
const seconds_in_min = 60;
const mins_in_hour = 60;
const hours_in_day = 24;

const min_in_ms = ms_in_second * seconds_in_min; //60,000
const hour_in_ms = min_in_ms * mins_in_hour; //3,600,000
const day_in_ms = hour_in_ms * hours_in_day; //86,400,000

export default function postedTime(date) {
  const timeString = new Date(date);
  const currentTime = new Date();
  const differenceinms = currentTime - timeString;
  var result = "";
  if (differenceinms < ms_in_second) {
    result = "now";
  }
  else if (differenceinms < min_in_ms) {
    result = `${Math.round(differenceinms / ms_in_second)}s`;
  }
  else if (differenceinms < hour_in_ms) {
    result = `${Math.round(differenceinms / min_in_ms)}m`;
  }
  else if (differenceinms <= day_in_ms) {
    result = `${Math.round(differenceinms / hour_in_ms)}h`;
  }
  else {
    result = timeString.toDateString();
  }
  return result;
}
