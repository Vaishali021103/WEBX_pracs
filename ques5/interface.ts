interface Person{
    firstname: string;
    lastname:string;
}

function greet(person: Person){
    return `Hello ${person.firstname} ${person.lastname}`
}

const vaishali: Person = {
    firstname:"Vaishali",
    lastname:"Sirimalla"
};

console.log(greet(vaishali))