document.getElementById("textInput").addEventListener("input", function () {
    const text = this.value.trim();
  
    // Compute word count
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

  
    // Compute sentence count
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;

  
    // Update the counts
    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("sentenceCount").textContent = sentenceCount;
  });
  