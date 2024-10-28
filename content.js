// Select text content from common areas (e.g., comments section)
function extractText() {
    const elements = document.querySelectorAll("p, span, div");
    let textContent = [];
    elements.forEach((element) => {
      if (element.innerText) {
        textContent.push(element.innerText);
      }
    });
    return textContent;
  }
  
  // Send extracted text for analysis
  function analyzeText(textArray) {
    chrome.runtime.sendMessage({ action: "analyzeText", data: textArray });
  }
  
  // Initiate text extraction and analysis
  const textArray = extractText();
  analyzeText(textArray);
  