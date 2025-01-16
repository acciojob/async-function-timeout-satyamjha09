// Utility function that returns a Promise which resolves after 'ms' milliseconds
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Once the DOM is loaded, set up the click handler
document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');
  const submitButton = document.getElementById('btn');

  submitButton.addEventListener('click', async () => {
    // Immediately clear the output to ensure it starts out empty
    outputDiv.textContent = "";

    // Get user-provided values
    const textValue = textInput.value;
    const delayValue = Number(delayInput.value);

    // Wait for the specified delay
    await wait(delayValue);

    // Display the text
    outputDiv.textContent = textValue;
  });
});
