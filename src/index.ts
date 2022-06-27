export const solution = (S: string) => {
  let remainingString = S;
  for (
    let currentIndex = 0;
    currentIndex <= remainingString.length - 2;
    currentIndex++
  ) {
    const letter = remainingString[currentIndex];
    const nextLetter = remainingString[currentIndex + 1];
    if (letter === nextLetter) {
      remainingString = removeCenterChars(
        remainingString,
        currentIndex,
        currentIndex + 2
      );
      if (currentIndex > 0) currentIndex-=2;
    }
  }
  return remainingString;
};

export const removeCenterChars = (
  S: string,
  fromIndex: number,
  toIndex: number
) => {
  return S.slice(0, fromIndex) + S.slice(toIndex);
};
