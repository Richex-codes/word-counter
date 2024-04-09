function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        // Increment length counter for each character
        length++;

        // Check if the character is a letter and not a space
        if (/[a-zA-Z]/.test(char)) {
            // Increment wordCount when encountering the first letter of a word
            if (i === 0 || sentence[i - 1] === ' ') {
                wordCount++;
            }
            // Increment vowelCount if the character is a vowel
            if (/[aeiouAEIOU]/.test(char)) {
                vowelCount++;
            }
        }
    }

