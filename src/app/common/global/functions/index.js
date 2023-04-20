export const DateTimeConverter = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var month = months[a.getMonth()];
  var date = a.getDate();
  var h = a.getHours();
  var hour = h;
  var min = a.getMinutes();
  var ampm = "am";

  if (h > 12) {
    hour = h - 12;
    ampm = "pm";
  } else if (h === 12) {
    hour = 12;
    ampm = "pm";
  } else {
    hour = h;
    ampm = "am";
  }

  var time =
    String(hour).padStart(2, "0") +
    ":" +
    String(min).padStart(2, "0") +
    ampm +
    ",  " +
    month +
    " " +
    date;
  return time;
};

export const TimeConverter = (UNIX_timestamp) => {
  var a = new Date(UNIX_timestamp * 1000);
  var h = a.getHours();
  var hour = h;
  var min = a.getMinutes();
  var ampm = "am";

  if (h > 12) {
    hour = h - 12;
    ampm = "pm";
  } else if (h === 12) {
    hour = 12;
    ampm = "pm";
  } else {
    hour = h;
    ampm = "am";
  }

  var time =
    String(hour).padStart(2, "0") + ":" + String(min).padStart(2, "0") + ampm;
  return time;
};

export const RoundInteger = (value) => {
  return Math.round(value);
};
