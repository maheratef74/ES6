const studentNames = new Set();

const addNames = () => {
    console.log("Adding names to the set...");
    studentNames.add("Maher");
    studentNames.add("Ahmed");
    studentNames.add("Sara");
    studentNames.add("Maher");
    studentNames.add("Ahmed");
};

addNames();

console.log(`Set size: ${studentNames.size}`);

const printWithSpread = () => {
    console.log("\nPrinting using Spread Operator:");
    console.log([...studentNames]);
};

const printWithForOf = () => {
    console.log("\nPrinting using for...of:");
    for (const name of studentNames) {
        console.log(name);
    }
};

printWithSpread();
printWithForOf();
