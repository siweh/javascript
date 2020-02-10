/*jshint esversion: 6 */
// var car = "Audi";
// var i = 1;

// function myFunction (num1, num2)
// {

//     var adding = num1 + num2;
//     alert(adding);
// }

// myFunction (25, 25);

// if (car == "Audi"){
//     alert ("Yes the car it is Audi");
// }
// else{
//     alert("The car is not an Audi");
// }
// function multi(no1, no2){
//     var results = no1 * no2;
//     return results;
// }

// var sumResults = multi(3, 6);
// alert(sumResults);

// while(i < 5){
//     alert ("Yes it is less than 5");
//     i++;
// }

// var drinks = ["coca-cala", "fanta", "twist", "krush", "Twizza"];

// drinks[4] = "tressure island";  //When we want to change the element inside drinks.
// var no1 = drinks[3]
// alert(no1); //Here we just wanna display the 3rd element.

//Objects in javascript
// var team = {
//     weight : 80,
//     color : "Brown",
//     played : true,
//     eat: function(){
//         alert("The team is playing now");
//     }
// };

// team.color2 = "Black";
// team.played = false;    //Here we also changing the value inside the property
// delete team.color2;     //Here we are deleting color2 value

// var newWeight = team.weight + 2;    //Here we just creating a new weight
// document.write(newWeight);  //Here we wanna display the teams weight.
// alert(team.color2);     //here we just displaying the color2 value.

// if (team.played == true){
//     team.eat()
// }
// else{
//     alert("The team is not playing now.");
// }
// var studentList = {
//     name1: "Sanelisiwe Madesi",
//     name2: "Siweh Made",
//     name3: "Sane Mades",
//     name4: "Sanesh Mads",
//     age1: 25,
//     age2: 30,
//     age3: 35,
//     age4: 40,
//     // studentdetailes: function(){
//     // document.write(studentList.name1 + " is " + studentList.age1 + " years old and is doing " + studentCourse.no1);
//     // alert(studentList.name2 + " is doing " + studentCourse.no2);}
// }
// var studentCourse = {
//     no1: "Information Technology",
//     no2: "Medicine",
//     no3: "Civil Engineering",
//     no4: "Finantial Management"}

//     var University = {
//         camp1: "Tshwane Univesity of Technology",
//         camp2: "University of Cape Town",
//         camp3: "University of the Western Cape",
//         camp4: "Stelenborsch University",
//     }

// // alert(studentList);
// alert(studentList.name1 + " is " + studentList.age1 + " years old and is doing " + studentCourse.no1 + " at " + University.camp1);
// alert(studentList.name2 + " is " +  studentList.age2 + " years old and is doing " + studentCourse.no2 + " at " + University.camp2);
// alert(studentList.name3 + " is " + studentList.age3 + " years old and is doing " +  studentCourse.no3 + " at " + University.camp3);
// alert(studentList.name4 + " is " + studentList.age4 + " years old and is doing " + studentCourse.no4 + " at " + University.camp4);


/*var list = new Array(3)
for(var i = 0; i < 3; i++)
{
    list[i] = new Array(4)
}*/

// var myarray=new Array(4)
// for (i=0; i < myarray.length; i++)
//     myarray[i] =new Array(4)
//     // console.log(myarray[0][0])
// myarray[0][0] = "Sanelisiwe Madesi"
// myarray[0][1] = "Sanesh Made"
// myarray[0][2] = "Siweh Mades"
// myarray[0][3] = "Sane Madem"
// myarray[1][0] = 18
// myarray[1][1] = 20
// myarray[1][2] = 30
// myarray[1][3] = 35
// myarray[2][0] = "Information Technology"
// myarray[2][1] = "Medicine"
// myarray[2][2] = "Civil Engineering"
// myarray[2][3] = "Finantial Management"
// myarray[3][0] = "Tshwane Univesity of Technology"
// myarray[3][1] = "University of Cape Town"
// myarray[3][2] = "University of the Western Cape"
// myarray[3][3] = "Stelenborsch University"
// // console.log(myarray[0][0])

// for (var i = 0; i < myarray.length; i++) { 
//     for (var j = 0; j < myarray.length; j++)    { 
//         // console.log(myarray[i][j]);
//         document.write(myarray[i][j] + " ");
//     }
//    document.write('<br>');
// } 

function Person(firstName, lastName, gender, age, email){
    this.firstName = firstName;
    this.lastName =  lastName;
    this.gender = gender;
    this.age = age;
    this.email = email;
}

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
};
 var student = new Person("Siweh", "Mades", "Female", "23", "san@gmail.com");
console.log(student.getFullName());
student.studentNumber = 45499662;

var Lecturer = new Person("Sipho", "Mpondo", "male", "32", "sim@gmail.com");
Lecturer.staffNumber = 123456;
console.log(Lecturer.getFullName());


// // how to iterate through an object
// const sname = Object.entries(Lecturer);
// const name = Object.entries(student);

// console.log(sname);
// console.log(name);

// Array.prototype.forEach.call(student.keys, thing => {
//     console.log(thing);
// });