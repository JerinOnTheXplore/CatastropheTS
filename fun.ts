/*
Problem 1 – Cat Mood Tracker

Problem:
You see a cat on the street. Cats can be Happy, Hungry, or Sleepy. Create a function that accepts the cat’s mood and returns a fun message about what the cat wants.

Problem 2 – Earthquake Alert

Problem:
Bangladesh is earthquake-prone. Given the location and magnitude of an earthquake, warn if magnitude > 5. Add a fun message about surviving.

Problem 3 – Exam Subjects Tracker

Problem:
You have exams soon. Create a function that lists all subjects you need to study using the rest operator.
*/

type CatMood = "Happy" | "Hungry" | "Sleepy";

const checkCatMood = (catName: string, mood: CatMood): string =>
  `${catName} ${
    mood === "Happy"
      ? "purrs happily!"
      : mood === "Hungry"
      ? "meows loudly! Feed it quickly!"
      : "curls up and sleeps."
  }`;

console.log(checkCatMood("Shondesh", "Hungry"));
