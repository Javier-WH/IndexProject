export async function getTeacherSeccions() {

    let seccions = await fetch("/teacherSubjects");
    /*let seccions = [
        {
            "Matemática": ["1A", "1B", "4A"],
            "Física": ["3A", "4B"],
            "Ingles": ["2A", "3A"]
        }
    ]*/
    return seccions

}