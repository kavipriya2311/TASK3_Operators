

//1 
var a1 = 10;
var a1 = 11; // redeclare
a1=13; // reassign
console.log(a1); // 13

let a2 = 1;
a2 = 2; // reassign 
console.log(a2); // 2
// let can't be redeclare

const a3 = 33;
console.log(a3); // 33
// redeclare and reassign is not allowed 

//2
let name = "kavi";
let age = 24;
let prog = "JS"

console.log(name , "Type is:", typeof(name));
console.log(age , "Type is:", typeof(age));
console.log(prog , "Type is:", typeof(prog));

//3
let arr = ["Apple","Mango","Guava","Grapes","Orange"];
console.log(arr);  // ['Apple', 'Mango', 'Guava', 'Grapes', 'Orange']
console.log(arr[0]); // Apple
console.log(arr[arr.length-1]); // Orange

//4
let obj = {
    name:"priya",
    role:"CSE",
    CGPA: 8.7
}
console.log(obj.name); // priya
console.log(obj.role); // CSE
console.log(obj.CGPA); // 8.7

//5
let UserName = prompt("What is your Name?"); // Kavipriya
let UserAge = prompt("Enter your age"); // 24
alert(UserName); // displays in the prompt(What is your name?)
console.log(UserAge); // 24

//6
let s = 6;
let k = 2;
console.log("Addition:", s+k); // 8
console.log("Subtraction:", s-k); // 4
console.log("Multiplication:", s*k); // 12
console.log("Division:", s/k); // 3
console.log("Modulos:", s%k); // 0
console.log("Exponentiation:", s**k); // 36

//7
let a = 5;
console.log(a++); // 5
console.log(a);  // 6
console.log(++a); // 7

//8
let aa = 10;
let b = aa--;
let c = --aa;
console.log(aa); // 8
console.log(b); // 10
console.log(c); // 8

//9
let x = 2;
x+=10;
console.log(x); // 12

let x1 = 2
x1 -= 10;
console.log(x1) // -8

let x2 = 2;
x2 *= 10;
console.log(x2); // 20

let x3 = 2;
x3 /= 10;
console.log(x3); // 0.2

let x4 = 2;
x4 %= 10;
console.log(x4); //2

//10
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

//11
let s1 = 9;
let s2 = 10;
let s3 = 11;
let s4 = 12;
console.log((s1<s2)&&(s3>s4)); // false
console.log((s1<s2)||(s3>s4)); // true
console.log(!(s1>s4));         // true

//12
let ageeee = 24;
let kk = (ageeee>18)?console.log("u are eligible to vote"):console.log("u are not elegible to vote");

//13
console.log(typeof ("hello" + 10)); // String
console.log(typeof (10 + true)); // Number
console.log(typeof (10 + null)); // Number
console.log(typeof ("hello" + undefined)); // String


//14
let input = prompt("enter a number:");
let result = Number(input) + 10;
console.log(result); //12

//15
let boo1 = Boolean(""); // false
let boo2 = Boolean("KAVIPRIYA"); // true
let boo3 = Boolean(0); // false
let boo4 = Boolean(true); // true

console.log(boo1);
console.log(boo2);
console.log(boo3);
console.log(boo4);

//16
let numm = -22;
if(numm>0){
    console.log("The number is Positive");
}else{
    console.log("Negative");
}

//17
let time = 12; // 12 - 4(early morn), 4-12(morn),12-15(afternoon),15-19(eve),19-24(night)
if(time>=1 && time<=6){
    console.log("Early Morning");
}else if(time>=7 && time<=12){
    console.log("Morning");
}else if(time>=12 && time<15){
    console.log("Afternoon");
}else if(time>=15 && time<=19){
    console.log("Evening");
}else if(time>=19 && time<=24){
    console.log("Night");
}else{
    console.log("Invalid Time");
} // Early Morning

//18
let AGE = prompt("Enter your Age");
let HEIGHT = prompt("Enter your Height");
let WEIGHT = prompt("Enter your Weight");
if(AGE>18){
    if(HEIGHT>150){
        if(WEIGHT>70){
            alert("Congratulation!!! you are Eligible");
        }else{
        alert("Your Weight is not Matching");
    }
}else{
    alert("Your Height is not Eligible");
}
    }else{
        alert("Your Age is not Eligible");
    }

//19
let Traffic = "Green";

switch(Traffic){
    case "red" : console.log("Vehicle Stopped");
    break
    case "yellow" : console.log("Vehicle Starts");
    break
    case "Green" : console.log("Go Vehicle");
    break
    default: console.log("Invalid Traffic Light");
    break
}

//20
for(let i = 1;i<=10;i++){
    console.log(i);
}

//21
for(let h=2;h<=20;h++){
    if(h%2==0){
        console.log(h);
    }
}

//22
let u = 10;
while(u>=1){
     console.log(u);
    u--;
}

//23
let u1 = 1;
do{
    console.log(u1);
    u1++;
}while(u1<=10);

//24
let o = "JAVASCRIPT";
for(let m of o){
    console.log(m);
}

//25
let oo = ["stu1","stu2","stu3","stu4","stu5"];
for(let mm of oo){
    console.log(mm);
}

//26
let objj ={
    name:"kavi",
    role:"Frontend Developer",
    cgpa:8
}
for(let x in objj){
    console.log(x , objj[x]);
}

//27
let p1 = Number(prompt("Enter the first number:")); // 11
let p2 = Number(prompt("Enter the sec number:")); // 22
alert("SUM of two numbers is:"+ (p1+p2)); // 33
alert("DIFFERENCE of two numbers:" + (p1-p2)); // 11
alert("PRODUCT of two numbers:" + (p1*p2)); // 242
alert("REMAIDER of two numbers:" + (p1/p2)); // 2

//28
let arrr = [23,4,54,2,6];
for(let b=0;b<arrr.length;b++){
    if(arrr[b]>10){
        console.log(arrr[b]);
    }
}

//29
let vayasu = prompt("Enter your Age");
if(vayasu>=18){
    alert("You are Eligible to vote");
}else{
    alert("Not Eligible");
}

//30

let choice = prompt("select an operation:"+"1.Addition"+"2.Subraction"+"3.Multiplication"+"4.Division"+"Enter your Choice(1,2,4 or 4):");
let num1=Number(prompt("Enter the First Number:"));
let num2=Number(prompt("Enter the second number:"));
let results;
switch (choice) {
  case "1":
    results = num1 + num2;
    alert("Result: " + num1 + " + " + num2 + " = " + result);
    break;

  case "2":
    results = num1 - num2;
    alert("Result: " + num1 + " - " + num2 + " = " + result);
    break;

  case "3":
    results = num1 * num2;
    alert("Result: " + num1 + " * " + num2 + " = " + result);
    break;

  case "4":
    if (num2 === 0) {
      alert("Error: Division by zero is not allowed!");
    } else {
      results = num1 / num2;
      alert("Result: " + num1 + " / " + num2 + " = " + result);
    }
    break;

  default:
    alert("Invalid choice! Please choose an option from 1 to 4.");
    break;
}

