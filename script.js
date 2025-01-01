const submit = document.getElementById("btn");

submit.addEventListener("click", async () => {
  // Retrieve input values
  const textInput = document.getElementById("text").value.trim();
  const delayInput = document.getElementById("delay").value.trim();
  const output = document.getElementById("output");

  // Clear previous output
  output.innerHTML = "";

  // Validate inputs
  if (!textInput) {
    output.innerHTML = "Please enter some text.";
    return;
  }

  if (!delayInput || isNaN(delayInput) || Number(delayInput) < 0) {
    output.innerHTML = "Please enter a valid delay in seconds.";
    return;
  }

  // Convert delay to seconds
  const delayInSeconds = Number(delayInput);

  // Delay function using Promise
  const delayFunction = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

  try {
    // Await the delay in seconds
    await delayFunction(delayInSeconds);

    // Display the text
    output.innerHTML = textInput;
  } catch (error) {
    console.error("Error occurred:", error);
    output.innerHTML = "An unexpected error occurred.";
  }
});
