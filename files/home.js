"use strict";

/* eslint-disable */

class User {
    constructor(fname, lname, phone, role, password, id) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.role = role;
        this.password = password;
        this.id = id;
    }

    get fname() {
        return this._fname;
    }

    set fname(value) {
        this._fname = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

}

class Faculty extends User {
    constructor(fname, lname, phone, role, password, id, department) {
        super(fname, lname, phone, role, password, id);
        this.department = department;
    }
}

class Student extends User {
    constructor(fname, lname, phone, role, password, id, gpa, entryYear) {
        super(fname, lname, phone, role, password, id);
        this.gpa = gpa;
        this.entryYear = entryYear;
    }

}

class Course {
    constructor(name, id, code) {
        this.name = name;
        this.id = id;
        this.code = code;
    }
}

// creating test admin object in to the system 
let admin1 = new User("Dr.Levi", "Keith", "641-011-1111", "Admin", "1", "01");
let admin2 = new User("Asaad", "Saad", "641-002-2222", "Admin", "2", "02");

// creating test faculty  object in to the system 
let faculty1 = new Faculty("Tina", "Xing", "641-003-3333", "Faculty", "3", "03", "CS");
let faculty2 = new Faculty("Michael", "Zijlstra", "641-004-4444", "Faculty", "4", "04", "CS");


// creating test student object in to the system 
let student1 = new Student("Michael", "Alazar", "206-604-1234", "Student", "student1", "001", "0.00", "2020");
let student2 = new Student("Luwam", "Teages", "971-998-5678", "Student", "student2", "002", "4.00", "2021");
let student3 = new Student("Asgedom", "Yohannes", "510-303-3030", "Student", "student3", "003", "4.00", "2020");
let student4 = new Student("Hellen", "Haile", "880-009-9890", "Student", "student4", "004", "4.00", "2020");
let student5 = new Student("Joe", "Biden", "808-898-8746", "Student", "student5", "005", "4.00", "2019");

// creating test course object in to the system 
let course1 = new Course("Object Oriented Programming", "CS303", "303");
let course2 = new Course("Introduction To JavaScript", "CS301", "301");
let course3 = new Course("Introduction to Algorithm", "CS321", "321");
let course4 = new Course("Asynchronous Programming", "CS445", "445");
let course5 = new Course("Advanced Programming", "CS554", "554");

// creating array of students objects 
let studentArray = [student1, student2, student3, student4, student5];

// creating array of courses objects
let courseArray = [course1, course2, course3, course4, course5];

// creating array of faculty objects
let facultyArray = [faculty1, faculty2];

// creating array of admin objects 
let adminArray = [admin1, admin2];


// Creating array of students, faculty and admin for system login control test
let searchArray = [admin1, admin2, faculty1, faculty2, student1, student2, student3, student4, student5];

let assignedCourses = [
    { id: "001", courses: ["OOP", "CS303"]}, 
    { id: "002", courses: ["301", "CS303"]},
    { id: "003", courses: ["OOP", "CS301"]}, 
    { id: "004", courses: ["301", "OOP"]}, 
    { id: "005", courses: ["OOP", "CS303"]}
]


//let tempProfile = [];

// Log in Test for student, faculty and administrator
function loginTest() {

    let userId = document.getElementById("login").value;
    let passWord = document.getElementById("password").value;

    for (let i = 0; i < searchArray.length; i++) {

        if ((searchArray[i].id === userId && searchArray[i].password === passWord) && searchArray[i].role === "Student") {

            window.location = ("student.html");
            return;
        } else if ((searchArray[i].id === userId && searchArray[i].password === passWord) && searchArray[i].role === "Faculty") {
            //tempProfile.push(searchArray[i].id);
            window.location = ("faculty.html");
            return;

        } else if ((searchArray[i].id === userId && searchArray[i].password === passWord) && searchArray[i].role === "Admin") {
            window.location = ("admin.html");
            return;
        }
    }
    document.getElementById("check").value = "Incorrect Id or Password";

}

// Get student details
function getUserDetails() {

    if (document.getElementById("output").innerHTML === "") {
        let input = document.getElementById("myId").value;
        for (let i = 0; i < searchArray.length; i++) {
            if (searchArray[i].id === input) {
                let display = searchArray[i].fname + " " + searchArray[i].lname ;
                document.getElementById("output").innerHTML = display;
                return;
            }

        }
    }
    else {
        document.getElementById("output").innerHTML === ""
        let input = document.getElementById("myId").value;
        for (let i = 0; i < searchArray.length; i++) {
            if (searchArray[i].id === input) {
                let display = searchArray[i].fname + " " + searchArray[i].lname;
                document.getElementById("output").innerHTML = display;
                return;
            }
        }
    }

}

// Update student Profile
function updateProfile() {

    document.getElementById("about").style.display = "none";
    let input = document.getElementById("inputId").value;
    let newPassword = document.getElementById("newP").value;
    let confirmPassword = document.getElementById("cNewP").value;

    if (newPassword !== confirmPassword) {
        document.getElementById("result").innerHTML = "Unmatched password";
    }
    else {
        for (let i = 0; i < searchArray.length; i++) {
            if (searchArray[i].id === input) {
                searchArray[i].password = newPassword;
                //updatedProfile(input);
                document.getElementById("output").innerHTML = searchArray[i].fname + " " + searchArray[i].lname + "<br>" + "your new Password is:" + " " +searchArray[i].password;
                document.getElementById("about").style.display = "none";
                
            }
        }
    }
    
}

function updatedProfile (input) {

}

// Courses display
function coursesDisplay() {
    if (document.getElementById("output").innerHTML === "") {
        for (let i = 0; i < courseArray.length; i++) {
            let display = (i + 1) + ". " + courseArray[i].code + " " + courseArray[i].name;
            document.getElementById("output").innerHTML += display + "<br>";
        }
    }
    if (!(document.getElementById("output").innerHTML === "")) {
        document.getElementById("output").innerHTML = "";
        for (let i = 0; i < courseArray.length; i++) {
            let display = (i + 1) + ". " + courseArray[i].code + " " + courseArray[i].name;
            document.getElementById("output").innerHTML += display + "<br>";
        }
    }
    // document.getElementById("sorting");
}

// display students first and last name
function userDisplay() {
    document.getElementsByTagName('p')[0].innerHTML = '';
    for (let i = 0; i < studentArray.length; i++) {
        let display = (i + 1) + ". " + studentArray[i].fname + " " + studentArray[i].lname;
        document.getElementById("output").innerHTML += display + "<br>";
    }
}

// sort students by first name
function sortByFName() {

    if (document.getElementById("output").innerHTML = "") {
        let sortFName = studentArray.sort((a, b) => a.fname > b.fname ? 1 : -1);
        return function (sortByFName) {
            for (let i = 0; i < studentArray.length; i++) {
                let display = (i + 1) + ". " + studentArray[i].fname + " " + studentArray[i].lname;
                document.getElementById("output").innerHTML += display + "<br>";

            }
        }
    }
    else {
        document.getElementById("output").innerHTML = ""
        let sortFName = studentArray.sort((a, b) => a.fname > b.fname ? 1 : -1);
        return function (sortByFName) {
            for (let i = 0; i < studentArray.length; i++) {
                let display = (i + 1) + ". " + studentArray[i].fname + " " + studentArray[i].lname;
                document.getElementById("output").innerHTML += display + "<br>";

            }
        }
    }
}

// Search course by name
function searchCourses() {

    document.getElementById("output").innerHTML = "";
    let input, display, filter, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

     if ( courseArray[1].includes(input)) {

     }
    for (i = 0; i < courseArray.length; i++) {
        let txtValue = courseArray[i].name;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            display = courseArray[i].name;
            document.getElementById("output").innerHTML += display + "<br>";
        }
    }
}

//sort students by last name
function sortByLName() {

    let resultArray = studentArray;
    let tempArray;
    for (let i = 0; i < studentArray.length; i++) {

        for (let j = i + 1; j < studentArray.length; j++) {

            /* if ASCII code greater then swap the elements position*/
            if (studentArray[i].lname.toUpperCase().charAt(0) < studentArray[j].lname.toUpperCase().charAt(0)) {
                tempArray = studentArray[i];
                resultArray[i] = resultArray[j];
                resultArray[j] = tempArray;
            }
        }
    }

    if (document.getElementById("output").innerHTML = "") {
        for (let i = 0; i < resultArray.length; i++) {
            let display = (i + 1) + ". " + resultArray[i].fname + " " + resultArray[i].lname;
            document.getElementById("output").innerHTML += display + "<br>";
        }
    }
    else {
        document.getElementById("output").innerHTML = "";

        for (let i = 0; i < resultArray.length; i++) {
            let display = (i + 1) + ". " + resultArray[i].fname + " " + resultArray[i].lname;
            document.getElementById("output").innerHTML += display + "<br>";

        }
    }

}
// sort faculty by first name
function sortByfName() {

    if (document.getElementById("output").innerHTML = "") {
        let sortFName = facultyArray.sort((a, b) => a.fname > b.fname ? 1 : -1);
       
        return function (sortByFName) {
            for (let i = 0; i < facultyArray.length; i++) {
                let display = (i + 1) + ". " + facultyArray[i].fname + " " + facultyArray[i].lname;
                document.getElementById("output").innerHTML += display + "<br>";

            }
        }
    }
    else {
        document.getElementById("output").innerHTML = ""
        let sortFName = facultyArray.sort((a, b) => a.fname > b.fname ? 1 : -1);
        return function (sortByFName) {
            for (let i = 0; i < facultyArray.length; i++) {
                let display = (i + 1) + ". " + facultyArray[i].fname + " " + facultyArray[i].lname;
                document.getElementById("output").innerHTML += display + "<br>";

            }
        }
    }

}

// sort faculty by last name
function sortBylName() {
    if (document.getElementById("output").innerHTML = "") {
        let sortFName = facultyArray.sort((a, b) => a.lname > b.lname ? 1 : -1);

        for (let i = 0; i < facultyArray.length; i++) {
            let display = (i + 1) + ". " + facultyArray[i].fname + " " + facultyArray[i].lname;
            document.getElementById("output").innerHTML += display + "<br>";
        }

    }
    else {
        document.getElementById("output").innerHTML = "";
        let sortFName = facultyArray.sort((a, b) => a.lname > b.lname ? 1 : -1);

        for (let i = 0; i < facultyArray.length; i++) {
            let display = (i + 1) + ". " + facultyArray[i].fname + " " + facultyArray[i].lname;
            document.getElementById("output").innerHTML += display + "<br>";
        }

    }

}

// Assign course to a student by Admin
function assignCourse() {
    document.getElementById("course").innerHTML = "";

    let studentId = document.getElementById("stuID").value;
    let courseName = document.getElementById("courseName").value;
    for (let i = 0; i < assignedCourses.length; i++) {
        if (assignedCourses[i].id === studentId) {
            assignedCourses[i].courses.push(courseName);
        }
    }
    
}

// View courses of specified student
function viewCourse() {
    document.getElementById("view").innerHTML = "";
    let studentId = document.getElementById("studentId").value;
    for (let i = 0; i < assignedCourses.length; i++) {
        if (assignedCourses[i].id === studentId) {
            for (let j = 0; j < assignedCourses[i].courses.length; j++){
                let display = (j + 1) + ". " + assignedCourses[i].courses[j];
            document.getElementById("view").innerHTML += display + "<br>";
            }
            return;
        }
        
    }    
}

function display1() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("about").style.display = "block";
}
function display2() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("profile").style.display = "block";
}
function hide1() {
    document.getElementById("about").style.display = "none";
    document.getElementById("output").innerHTML = "";
}
function hide2() {
    document.getElementById("profile").style.display = "none";
    document.getElementById("output").innerHTML = "";
}
function display3() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("gpa").style.display = "block";
}
function hide3() {
    document.getElementById("gpa").style.display = "none";
    document.getElementById("output").innerHTML = "";
}

