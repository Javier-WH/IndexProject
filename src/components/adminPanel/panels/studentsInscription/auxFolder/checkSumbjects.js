export default function checkSubjects(student, setFailedSubjects) {
    try {
        let subjectList = student.subjects
        let subjectListKeys = Object.keys(subjectList);

        let failedSubjects = subjectListKeys.map(subject=>{
            if(subjectList[subject].def < 10){
          
                return `${subject}  ( ${subjectList[subject].def} )`
            }
        })

        if(failedSubjects.length > 0){
            setFailedSubjects(failedSubjects)
            return failedSubjects;
        }else{
            return ["Ninguna"]
        }


    } catch (error) {
        return []
    }

}