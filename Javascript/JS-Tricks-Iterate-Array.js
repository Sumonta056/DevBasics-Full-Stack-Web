// ! Trick - 1
const universityNames = ["MIT", "Stanford", "Harvard"];

// Using for loop
for (let value of universityNames) {
  console.log(value);
}

// Using map
universityNames.map((value) => {
  console.log(value);
});
