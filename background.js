chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "analyzeText") {
      request.data.forEach((text) => {
        fetch("https://perspectiveapi.com/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY"
          },
          body: JSON.stringify({
            comment: { text },
            languages: ["en"],
            requestedAttributes: { TOXICITY: {} }
          })
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.attributeScores.TOXICITY.summaryScore.value >= 0.7) {
            console.log(`Abusive content found: "${text}"`);
            // Code to flag or blur abusive content
          }
        });
      });
    }
  });
  