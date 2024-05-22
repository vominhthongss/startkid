// Function to check if a date is valid
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

const formatDateTime = (dateTime, format) => {
  // Create a new Date object from the input
  const date = new Date(dateTime);

  // Check if the parsed date is valid
  if (isValidDate(date)) {
    const weekdays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    // Get the date time
    const weekday = weekdays[date.getDay()];
    const day = date.getDate().toString().padStart(2, "0"); // Extract day
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Extract month
    const yearFull = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0"); // Extract hour
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Extract minute
    const seconds = date.getSeconds().toString().padStart(2, "0"); // Extract minute

    let formattedDate = "";
    if (format) {
      formattedDate = format
        .replace("WD", weekday)
        .replace("DD", day)
        .replace("MM", month)
        .replace("YYYY", yearFull)
        .replace("HH", hours)
        .replace("mm", minutes)
        .replace("ss", seconds);
    }

    return formattedDate;
  } else {
    console.log("Invalid format or date", format);
    return;
  }
};

export default formatDateTime;
