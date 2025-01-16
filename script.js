  function wait(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    // Add an event listener to the button
    const btn = document.getElementById('btn');
    btn.addEventListener('click', async function() {
      // 1. Get input values
      const textValue = document.getElementById('text').value;
      const delayValue = Number(document.getElementById('delay').value);

      // 2. Await the specified delay
      await wait(delayValue);

      // 3. Display the text in the 'output' div
      const outputDiv = document.getElementById('output');
      outputDiv.textContent = textValue;
    });