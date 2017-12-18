const msInSeconds = 1000;
const secondsInMins = 60;
const minsInHours = 60;
const hoursInDays = 24;

const minInMs = msInSeconds * secondsInMins; // 60,000
const hourInMs = minInMs * minsInHours; // 3,600,000
const dayInMs = hourInMs * hoursInDays; // 86,400,000

export default function postedTime(date) {
  const timeString = new Date(date);
  const currentTime = new Date();
  const differenceinms = currentTime - timeString;
  let result = '';
  if (differenceinms < msInSeconds) {
    result = 'now';
  } else if (differenceinms < minInMs) {
    result = `${Math.round(differenceinms / msInSeconds)}s`;
  } else if (differenceinms < hourInMs) {
    result = `${Math.round(differenceinms / minInMs)}m`;
  } else if (differenceinms <= dayInMs) {
    result = `${Math.round(differenceinms / hourInMs)}h`;
  } else {
    result = null;
  }
  return result;
}
