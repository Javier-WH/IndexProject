import "./dataName.css";
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { MainContext } from "../../../context/MainContext"


export function DataName() {

    const { selectedStudent } = useContext(MainContext)



    function onChangeHandler() {

    }

    return <>
        <div id="dataName">
            <div id="dataTitleContainer">
                <div id="dataTitle"> Física 3-A</div>
                <div id="dataTitleSchoolYear">Período escolar 2022-2023</div>
            </div>
            <div id="studentDataContainer">
                <div id="studentPhoto"></div>
                <div id="auxStudenName">
                    <TextField id="studentName" className="studentInput" label="Nombre del Alumno" variant="outlined" value={`${selectedStudent.names} ${selectedStudent.lastNames}`} onChange={onChangeHandler} />
                    <TextField id="studentCi" className="studentInput" label="Cédula del Alumno" variant="outlined" value={selectedStudent.ci} onChange={onChangeHandler} />
                </div>
            </div>
            <div id="studenGradesContainer">
                <div className="studenLapse">
                    <div className="lblLapse">Primer Lapso</div>
                    <input type="number" id="lap1" className="lapInput" />
                </div>
                <div className="studenLapse">
                    <div className="lblLapse">Segundo Lapso</div>
                    <input type="number" id="lap2" className="lapInput" />
                </div>
                <div className="studenLapse">
                    <div className="lblLapse">Tercer Lapso</div>
                    <input type="number" id="lap3" className="lapInput" />
                </div>
            </div>
            <div id="studentDefContainer">
                <div>Acumulado / Definitiva</div>
                <div id="studentDef">20</div>
            </div>
        </div>
    </>
}