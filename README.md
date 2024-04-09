Sentence Analyzer

Description: This JavaScript algorithm reads a sentence character by character and determines the following:

Length of the Sentence: Counts the number of characters in the sentence. Number of Words: Assumes words are separated by a single space and counts the total number of words. Number of Vowels: Counts the total number of vowels in the sentence.

Functions: analyzeSentence(sentence: string): void Analyzes the given sentence and prints the following information:

Length of the sentence (number of characters). Number of words in the sentence. Number of vowels in the sentence. Algorithm: Initialize counters for length, word count, and vowel count. Iterate through each character in the sentence: Increment length counter for each character. If the character is a letter and not a space: Increment word count when encountering the first letter of a word. Increment vowel count if the character is a vowel. Output the results.
