//Jairo Jacobo 2/6/20
//Test 1


let students = [
    {id: 1, name: "John", major: "CS"},
    {id: 2, name: "Mike", major: "Math"},
    {id: 3, name: "Sally", major: "Pharmacy"}

]

students += {id: 4, name: "Sarah", major: "CS"};

displayStudents = () => {
    students.forEach((item) => {
        console.log(item)
    });
}

const boys = [
    {id: 1, hobby:'baseball'},
    {id: 2, hobby:'soccer'},
    {id:3, hobby:'running'}
];
const girls = [
    {id: 1, sport:'soccer'},
    {id: 2, sport:'running'},
    {id:3, sport:'soccer'}
];


    compare = (boys, girls) => {
    foreach((item) => {
        if(boys.sport = girls.sport){
            console.log(`For sport ${sport} , both ${boys.id} and ${girls.id} like.`);
        }
    });
}