// Iteration 1: Names and Input

let hacker1 = "Borja";
// Option 1
console.log(`The driver's name is ` + hacker1);
// Option 2
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Navigon";
// Option 1
console.log(`The navigator's name is ` + hacker2);
// Option 2
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length == hacker2.length) {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
/*3.1 Print all the characters of the driver's
 name, separated by a space and in capitals i.e. "J O H N"*/


 let hacker1Capital = "";

for (let index = 0; index < hacker1.length; index++) {
    if(index == hacker1.length - 1) {
        hacker1Capital += hacker1[index].toUpperCase()
    } else {
    hacker1Capital += hacker1[index].toUpperCase() + " ";
    }
}
console.log(hacker1Capital);


/* 3.2 3.2 Print all the characters of the navigator's name, 
in reverse order. i.e. "nhoJ" */

// Option 1
let index = hacker2.length - 1;
let hacker2Reverse = "";


while (index >= 0) {
    hacker2Reverse += hacker2[index];
    index--;
}
console.log(hacker2Reverse);

// Option 2. Functions only
let nameHacker = "";
nameHacker = hacker2.split("").reverse().join("");
console.log(nameHacker);

/* Bonus 1
Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears. */

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim interdum diam eu placerat. Donec placerat tortor id imperdiet tempor. Vivamus interdum, purus non aliquet pharetra, lacus mauris vulputate elit, ut ullamcorper mi ipsum ac ex. Quisque commodo porttitor tortor, ut semper sapien tristique sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis quis semper eros, vel eleifend neque. Donec nulla erat, egestas aliquam gravida id, interdum ac risus. Quisque id eros nibh. Sed turpis ligula, molestie at erat in, ultricies suscipit odio.

Nunc facilisis facilisis interdum. Phasellus pulvinar sollicitudin suscipit. Vivamus non dui sed sem iaculis sagittis et gravida quam. Praesent porttitor tristique elit sit amet euismod. Phasellus suscipit, metus quis iaculis varius, magna odio maximus purus, a sollicitudin massa tortor at nunc. Cras quis leo diam. Proin ex dui, sollicitudin id auctor at, pellentesque vel odio. Fusce dignissim libero eu turpis pellentesque, non pharetra lorem sollicitudin. Donec eu nibh leo. Aliquam erat volutpat. Maecenas sit amet sapien diam. In tincidunt viverra magna, at dapibus leo pharetra sit amet. Vestibulum tempus, mi vel iaculis sollicitudin, leo massa facilisis diam, vitae convallis augue augue et sem.

Phasellus ut nulla quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et mi ornare, dignissim odio sed, interdum nibh. Maecenas mollis lorem metus, eget dignissim ligula euismod ac. Aenean sagittis tortor at consequat luctus. Fusce nec auctor metus. Fusce et enim commodo, tristique diam ut, semper nulla. Ut gravida dui risus, vitae tincidunt enim pellentesque sed. Sed vel est felis. Praesent tincidunt eget ipsum sit amet accumsan. Etiam diam metus, ullamcorper id mattis sed, tincidunt id turpis. Vivamus lacus diam, egestas eu sagittis consequat, semper sed sem. `

//using the split method each word will ocupy one index in the array, so the length of the array
// is the same as the quantity of words in a text

let noPunctText = text.replaceAll(",", "").replaceAll(".", ""); // clean text without punctuation marks
let textArr = noPunctText.split(" ");
//console.log(textArr);
console.log(textArr.length); // counts the words

function howManyTimes(array, word) {     //counts the times et is repeated
    let count = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] === word)
            count++;
    }
    return `It appears ${count} times`;
}

console.log(howManyTimes(textArr, "et"));