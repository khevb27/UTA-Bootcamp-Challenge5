$(document).ready(function() {
  // Save button click event
  $(".saveBtn").on("click", function() {
    const note = $(this).siblings(".description").val();
    const targetParentID = $(this).parent().attr("id");
    localStorage.setItem(targetParentID, note);
    console.log(`Save button was pressed at ${targetParentID}. \nThe note reads: ${note}`);
  });

  // Set time-block class based on current time
  $(".time-block").each(function() {
    const currentHour = dayjs().hour();
    const blockNum = parseInt($(this).attr("id").slice(5));
    const className = (currentHour === blockNum) ? "present" : (currentHour < blockNum) ? "future" : "past";
    $(this).attr("class", `row time-block ${className}`);
  });

  // Retrieve saved notes from localStorage
  $(".time-block").each(function() {
    const localKey = $(this).attr("id");
    const savedNote = localStorage.getItem(localKey);
    if (savedNote) $(this).children(".description").text(savedNote);
  });

  // Display current date
  function displayDate() {
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  }
  displayDate();
  setInterval(displayDate, 1000);
});