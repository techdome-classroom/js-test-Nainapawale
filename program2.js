const decodeTheRing = function (s, p) {
  // write your code here

  // function decodeTheRing(str, pattern) {
  // Function to check if the given string matches the pattern
  function match(s, p) {
    let sIdx = 0,
      pIdx = 0;
    let starIdx = -1,
      sTmpIdx = -1;

    while (sIdx < s.length) {
      if (pIdx < p.length && (p[pIdx] === "?" || p[pIdx] === s[sIdx])) {
        // Advance both pointers when (str[sIdx] == pattern[pIdx]) or (pattern[pIdx] == '?')
        sIdx++;
        pIdx++;
      } else if (pIdx < p.length && p[pIdx] === "*") {
        // '*' found, only advance pattern pointer
        starIdx = pIdx;
        sTmpIdx = sIdx;
        pIdx++;
      } else if (starIdx === -1) {
        // Current characters didn't match, and no '*' was found in pattern
        return false;
      } else {
        // Last pattern pointer was '*', advance string pointer
        pIdx = starIdx + 1;
        sIdx = sTmpIdx + 1;
        sTmpIdx = sIdx;
      }
    }

    // Check for remaining characters in pattern
    while (pIdx < p.length && p[pIdx] === "*") {
      pIdx++;
    }

    return pIdx === p.length;
  }

  return match(s, p);
};

module.exports = decodeTheRing;
