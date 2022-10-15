export async function getStudent(seccion){

    let studentData = await fetch(`/studentList?seccion=${seccion}`);
    let studentList = await studentData.json();
    return studentList;
    
}