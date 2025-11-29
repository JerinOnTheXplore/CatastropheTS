/*
Problem 1 – Cat Mood Tracker

Problem:
You see a cat on the street. Cats can be Happy, Hungry, or Sleepy. Create a function that accepts the cat’s mood and returns a fun message about what the cat wants.
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
//output: Shondesh meows loudly! Feed it quickly!


/*
 Problem 2 – Earthquake Alert System

Problem:
Bangladesh is earthquake-prone. Create a "earthquakeAlert" function that:

1. Accepts the location (string) and magnitude (number) of an earthquake.

2. Warns people if the earthquake magnitude is greater than 5.

3. If magnitude ≤ 5, print a message that everyone is safe.

4. Include a message about surviving the earthquake.
*/

function earthquakeAlert(location:string, magnitude:number):string {
    if (magnitude > 5){
        return `Warning!! Earthquake detected in ${location} with magnitude ${magnitude}. Stay safe and hold onto something sturdy!!`
    } else {
        return `Earthquake detected in ${location} with magnitude ${magnitude}. All safe and no need to wory!`
    }
}
console.log(earthquakeAlert("Dhaka", 5.2));
console.log(earthquakeAlert("Chittagong", 4));
//output: Warning!! Earthquake detected in Dhaka with magnitude 5.2. Stay safe and hold onto something sturdy!!
// Earthquake detected in Chittagong with magnitude 4. All safe and no need to wory!


/*
Problem 3 – Exam Subjects Tracker 

You have a big exam coming up, and stress is real!
To stay organized, you want to track all the subjects you must study — especially the tough ones like Statistics, Epidemiology, and Biochemical Nutrition.

Create a TypeScript function "examSubjectsTracker" that:

Takes your name as the first parameter

Then accepts any number of subjects(Statistics, Nutritional problems and Epidemiology, and Biochemical Nutrition) using the rest operator

Returns a friendly, motivating message showing all the subjects you need to prepare hard

If no subject is provided, it should return:
"You are doing itraamii too much! Add some subjects first!!"
*/

const examSubjectsTracker = (studentName: string, ...subjects: string[]): string =>{
    if(subjects.length === 0){
        return `${studentName}, you are doing itraamii too much! Add some subjects first!!`
    }
    const subjectList = subjects.join(", ");
    return `${studentName}, you must have to porashuna: ${subjectList}. Stay strong and keep going!!`
};

console.log(examSubjectsTracker("Jerin", "Statistics", "Epidemiology", "Biochemical Nutrition"));//output: Jerin, you must have to porashuna: Statistics, Epidemiology, Biochemical Nutrition. Stay strong and keep going!!
console.log(examSubjectsTracker("Jerin"));// Jerin, you are doing itraamii too much! Add some subjects first!!


/*
  Problem 5 – Lazy Food Decision Maker 
Problem:

You built a mini AI robot to help you decide what to eat because you are too lazy.
You pass your “mood” to the robot and the robot suggests a food.

Create a function foodDecisionBot(mood: string) that:

If mood = "happy" → return "Eat biriyani! Celebrate your joy!"

If mood = "sad" → return "Eat ice cream… emotions > diet!"

If mood = "lazy" → return "Order pizza. You won't cook anyway."

For any other mood → return "Just drink water. Confused feelings detected."

Mood must be typed strictly using a union type.
*/

type Mood = "happy"| "angry" | "sad" | "lazy";

function foodDecisionBot(mood: Mood): string {
    if (mood === "happy") {
        return "I will biriyani khaboooo!";
    }
    else if (mood === "sad"){
        return "Eat ice cream… emotions > diet!!"
    }else if (mood === "angry"){
        return "football banay ekta kick dibo..then I will eat sth spicy"
    }
    else {
        return "vallagena!!Order pizza!!"
    }
}

console.log(foodDecisionBot("angry"));// football banay ekta kick dibo..then I will eat sth spicy
console.log(foodDecisionBot("happy"));//I will biriyani khaboooo!

console.log(foodDecisionBot("lazy"));// vallagena!!Order pizza!!