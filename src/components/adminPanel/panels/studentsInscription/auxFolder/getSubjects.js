
export default function getSubjects(pensum, grade) {
    try {
        let subjects = pensum.filter(r => r.schoolYear === Number.parseInt(grade));
        return subjects[0].subjects;
    } catch (error) {
        return [];
    }

}