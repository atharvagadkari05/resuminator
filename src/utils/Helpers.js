export const getMonth = (month) => {
  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
    default:
      return "";
  }
};

export const parseDate = (type, value) => {
  if (type === "date") {
    const date = value.split("-", 2);
    return getMonth(date[1]).concat(" ", date[0].substring(2, 5));
  }

  return value;
};

export const parseYear = (type, value) => {
  if (type === "date") {
    const date = value.split("-", 1);
    return date[0];
  }

  return value;
};

export const checkEmptyState = (state) => {
  let flag1 = true;
  let flag2 = true;
  if (state.length === 0) flag1 = false;
  for(let i = 0; i < state.length; i++){
    for(const pair of Object.entries(state[i])){
      if(pair[1]) {
        flag2 = false;
        break;
      };
    }
  }

  return flag1 && flag2;
}