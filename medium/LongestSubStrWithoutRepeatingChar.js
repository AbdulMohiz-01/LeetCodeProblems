function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        charIndexMap[char] = end;
        const currentLength = end - start + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

// Example usage:
const s1 = "abcabcbb";
console.log(lengthOfLongestSubstring(s1)); // Output: 3

const s2 = "bbbbb";
console.log(lengthOfLongestSubstring(s2)); // Output: 1

const s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s3)); // Output: 3
