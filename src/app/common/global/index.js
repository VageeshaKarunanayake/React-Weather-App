export const colourPicker = [
  { id: 0, colour: "#388ee7" },

  { id: 1, colour: "#6249cc" },

  { id: 2, colour: "#40b681" },

  { id: 3, colour: "#de944e" },

  { id: 4, colour: "#9c3a3a" },

  { id: 5, colour: "#388ee7" },

  { id: 6, colour: "#6249cc" },

  { id: 7, colour: "#40b681" },
];

export var citiesData = require("./../../assets/files/cities.json");

export const dateTimeConverter = (UNIX_timestamp) => {
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

export const timeConverter = (UNIX_timestamp) => {
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
