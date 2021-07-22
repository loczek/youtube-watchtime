function stringToTimeObject(string) {
  const time = string.split(":").reverse();

  let hours = time[2] ? Number(time[2]) : 0;
  let minutes = time[1] ? Number(time[1]) : 0;
  let seconds = time[0] ? Number(time[0]) : 0;

  return { hours, minutes, seconds };
}

const allVideoTimeObject = (timeFormatArray) => {
  let hours = 2;
  let minutes = 70;
  let seconds = 150;

  timeFormatArray.forEach((timeFormat) => {
    hours += timeFormat.hours;
    minutes += timeFormat.minutes;
    seconds += timeFormat.seconds;
  });

  let totalSeconds = seconds % 60;
  let totalMinutes = (minutes % 60) + Math.floor(seconds / 60);
  let totalHours = hours + Math.floor(totalMinutes / 60);
  totalMinutes = totalMinutes % 60;

  return { hours: totalHours, minutes: totalMinutes, seconds: totalSeconds };
};

function getAllVideoTotalTime() {
  const videos = document.querySelectorAll("div[class='bI9urf']");
  const videosArray = Array.prototype.slice.call(videos);

  const videosArrayInnerText = videosArray.map((video) => video.innerText);
  const videosArrayTimeFormat = videosArrayInnerText.map(
    (videoArrayInnerText) => {
      return stringToTimeObject(videoArrayInnerText);
    }
  );

  const totalTimeObject = allVideoTimeObject(videosArrayTimeFormat);

  console.clear();

  return alert(
    `You have spent ${totalTimeObject.hours} hours ${totalTimeObject.minutes} minutes ${totalTimeObject.seconds} seconds watching youtube videos`
  );
}
getAllVideoTotalTime();
