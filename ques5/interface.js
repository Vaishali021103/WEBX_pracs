function greet(person) {
    return "Hello ".concat(person.firstname, " ").concat(person.lastname);
}
var vaishali = {
    firstname: "Vaishali",
    lastname: "Sirimalla"
};
console.log(greet(vaishali));
