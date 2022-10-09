import "./dataName.css";
import TextField from '@mui/material/TextField';
export function DataName() {
    return <>
        <div id="dataName">
            <div id="dataTitleContainer">
                <div id="dataTitle"> Física 3-A</div>
                <div id="dataTitleSchoolYear">Período escolar 2022-2023</div>
            </div>
            <div id="studentDataContainer">
                <div id="studentPhoto"></div>
                <div id="auxStudenName">
                    <TextField id="studentName" className="studentInput" label="Nombre del Alumno" variant="outlined" />
                    <TextField id="studentCi" className="studentInput" label="Cédula del Alumno" variant="outlined" />
                </div>
            </div>
            <div id="studenGradesContainer">
                <div className="studenLapse">
                    <div className="lblLapse">Primer Lapso</div>
                    <input type="number" id="lap1" className="lapInput"/>
                </div>
                <div className="studenLapse">
                    <div className="lblLapse">Segundo Lapso</div>
                    <input type="number" id="lap2" className="lapInput"/>
                </div>
                <div className="studenLapse">
                    <div className="lblLapse">Tercer Lapso</div>
                    <input type="number" id="lap3" className="lapInput"/>
                </div>
            </div>
            <div id="studentDefContainer">
                <div>Acumulado / Definitiva</div>
                <div id="studentDef">20</div>
            </div>
        </div>
    </>
}