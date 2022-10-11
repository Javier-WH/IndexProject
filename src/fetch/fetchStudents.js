export async function getStudent(seccion){

    let studentData = await fetch("https://6345365039ca915a69f8a982.mockapi.io/Students/Students");
    let studentList = await studentData.json();
    return studentList;
    
}