class User{
    constructor(name, surname, gender, age, email, campus){
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.age = age;
        this.email = email;
        this.campus = campus;
    }
}

class student extends User{
    constructor(name, surname, gender, age, email, campus, studentNumber, Course){
        super(name, surname, gender, age, email, campus);
        this.studentNumber = 4767346664;
        this.Course = 'Infomation Technology';
    }
}
class student1 extends User{
    constructor(name, surname, gender, age, email, campus, studentNumber, Course){
        super('Sihle', 'Kanityi', 'Female', '18', 'sihle@gmail.com', 'Tshwane University of Technology');
        this.studentNumber = 53875432;
        this.Course = 'Medicine';
    }
}
class student1 extends User{
    constructor(name, surname, gender, age, email, campus, studentNumber, Course){
        super('Sihle', 'Kanityi', 'Female', '18', 'sihle@gmail.com', 'Tshwane University of Technology');
        this.studentNumber = 53875432;
        this.Course = 'Medicine';
    }
}
class Lecturer extends User{
    constructor(name, surname, gender, age, email, campus, staffNumber){
        super(name, surname, gender, age, email, campus);
        this.staffNumber = 25436763889;
    }
}

var Siweh = new student("Siweh", "Made", "Female", "23", "siwe@gmail.com", "Tshwane University of Technology");
var Sibu = new Lecturer('Sibu', 'Mpho', 'Male', '32', 'sibu@gmail.com', 'Tshwane University of Technology');
var Sihle = new student1();
console.log(Siweh);
console.log(Sibu);
console.log(Sihle);