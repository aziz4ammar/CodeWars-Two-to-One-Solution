function longest(s1, s2) {
    const combined = s1 + s2;
    const uniqueChars = [...new Set(combined)];
    return uniqueChars.sort().join('');
  }
  