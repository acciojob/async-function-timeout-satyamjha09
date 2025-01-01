const submit = document.getElementById("btn");

submit.addEventListener("click", async () => {
  const textInput = document.getElementById("text").value.trim();
  const delayInput = document.getElementById("delay").value.trim();
  const output = document.getElementById("output");

  // Clear previous output immediately
  output.innerHTML = "";

  // Validate inputs
  if (!textInput || isNaN(delayInput) || Number(delayInput) < 0) {
    output.innerHTML = "Invalid input. Please try again.";
    return;
  }

  // Convert delay to milliseconds
  const delayInMilliseconds = Number(delayInput) * 1000;

  // Delay function using Promise
  const delayFunction = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  try {
    // Wait for the specified delay
    await delayFunction(delayInMilliseconds);

    // Update the output after the delay
    output.innerHTML = textInput;
  } catch (error) {
    console.error("Error occurred:", error);
    output.innerHTML = "An error occurred. Please try again.";
  }
});
