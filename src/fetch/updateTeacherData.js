
export async function updateTeacherData(data){
    
    let sendData = await fetch("/setTeacherData", {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
        body: JSON.stringify(data)
    })
    let response = await sendData.json();
    return response;
}