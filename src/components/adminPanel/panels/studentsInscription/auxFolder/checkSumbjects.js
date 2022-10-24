export default function checkSubjects(student) {
    try {
        let subjectList = student.subjects
        let subjectListKeys = Object.keys(subjectList);

        let failedSubjects = [];
        subjectListKeys.map(subject=>{
            if(subjectList[subject].def < 10){
                failedSubjects.push(`${subject}  ( ${subjectList[subject].def} )`)
            }
            return 0;
        })

        if(failedSubjects.length > 0){
            return failedSubjects;
        }
        return ["Ninguna"]

    } catch (error) {
        return []
    }

}