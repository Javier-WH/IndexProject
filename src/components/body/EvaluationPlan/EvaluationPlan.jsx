import { useState } from "react";
import { useContext } from "react";
import { MainContext } from "../../../context/MainContext.jsx";
import { getSubjectName, getSchoolYear, getSeccionName } from "../../../libraries/translateSeccionNames.js";
import EvaluationPlanConfig from "./evaluationPllanConfig/EvaluationPlanConfig"



export default function EvaluationPlan() {
    const { dataToSave, selectedStudent, activeSeccion, getSchoolPeriod, pushNewData, studentList } = useContext(MainContext)
   
  


    return <>
        <div id="dataTitleContainer">
            <div id="dataTitle">{`${getSubjectName(activeSeccion)} (${getSchoolYear(activeSeccion)} ${getSeccionName(activeSeccion)})`}</div>
            <div id="dataTitleSchoolYear">{getSchoolPeriod()}</div>
            <EvaluationPlanConfig />
        </div>


    </>
}