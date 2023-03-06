const censureApplicator = (text) => {
  const textArray = text.split("");
  const filterArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return textArray
    .filter((character) => !filterArray.includes(character))
    .join("");
};

console.log(censureApplicator("This website is for losers LOL!"));
