const submit = document.getElementById("btn");

submit.addEventListener("click", async () => {
  // Get input values
  const textInput = document.getElementById("text").value.trim();
  const delayInput = document.getElementById("delay").value.trim();
  const output = document.getElementById("output");

  // Clear any previous output
  output.innerHTML = "";

  // Validate inputs
  if (!textInput) {
    output.innerHTML = "Please enter some text.";
    return;
  }
  if (!delayInput || isNaN(delayInput) || delayInput < 0) {
    output.innerHTML = "Please enter a valid delay in milliseconds.";
    return;
  }

  // Async function to handle delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  try {
    // Wait for the specified delay
    await delay(Number(delayInput));

    // Display the text
    output.innerHTML = textInput;
  } catch (error) {
    console.error("Error occurred:", error);
    output.innerHTML = "An error occurred.";
  }
});
