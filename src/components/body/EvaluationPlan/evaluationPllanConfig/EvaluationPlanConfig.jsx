import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import "./evaluationPlanConfig.css";
import Table from "../Table/Table"

import DateRangeIcon from '@mui/icons-material/DateRange';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 620,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
//prof-ano-period-materia
/*
{
    lap1:{
        eval1: 25,
        eval2: 14,
    }
}
*/
export default function BasicModal({evalData, setEvalData}) {

    const [evalCount, SetEvalCount] = React.useState([1, 2, 3, 4, 5, 6])
    const [open, setOpen] = React.useState(false);
    const [evalNumber, setEvalNumber] = React.useState(4);
    const [lapse, SetLapse] = React.useState("lap1");
    const [evalPercent, setEvalPercent] = React.useState(0)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleChange = (event) => {
        let number = event.target.value
        setEvalNumber(number);

    };

    //cambia el lapso
    const handleLapso = (event) => {
        SetLapse(event.target.value);

        if (event.target.value === "lap1") {
            setEvalNumber(evalData.count[0])
        }

        if (event.target.value === "lap2") {
            setEvalNumber(evalData.count[1])
        }

        if (event.target.value === "lap3") {
            setEvalNumber(evalData.count[2])
        }
    };

    //cambia el numero de evaluaciones
    React.useEffect(() => {
        try {
            let newCount = [];
            for (let i = 1; i <= evalNumber; i++) {
                newCount.push(i)
            }

            SetEvalCount(newCount)
        } catch (error) {

        }
    }, [evalNumber]);




    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}><DateRangeIcon /></Button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div id="titleConfigEvalPlan"> Confioguraci??n del plan de evaluacion para Matematica 1 ciencias B</div>


                    <div id="evalChangeData">
                        <div>

                            <InputLabel id="demo-simple-select-label">Numero de Evaluaciones</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-numberEval"
                                id="demo-simple-select-numberEval"
                                value={evalNumber}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={4}>Cuatro Evaluaciones</MenuItem>
                                <MenuItem value={5}>Cinco Evaluaciones</MenuItem>
                                <MenuItem value={6}>Seis Evaluaciones</MenuItem>
                            </Select>

                        </div>
                        <div>

                            <InputLabel id="demo-simple-select-label">Lapso</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-numberEval"
                                id="demo-simple-select-numberEval"
                                value={lapse}
                                label="Age"
                                onChange={handleLapso}
                            >
                                <MenuItem value={"lap1"}>Primer Lapso</MenuItem>
                                <MenuItem value={"lap2"}>Segundo Lapso</MenuItem>
                                <MenuItem value={"lap3"}>Tercer Lapso</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div id="evalChangeTableContainer">
                        <Table evalData={evalData} setEvalData={setEvalData} evalCount={evalCount} lapse={lapse} setEvalPercent={setEvalPercent} />
                    </div>
                    <div id="evalChangeAuxButonContainer">
                        <div id="evalChangeContentMessage">
                            <div className="evalChangeContentMessage">Total evaluaciones: {evalNumber}</div>
                            <div className="evalChangeContentMessage">Porcentaje Evaluado: {evalPercent}%</div>
                        </div>

                        <div id="evalChangeButtonContainer">
                            <Button variant="outlined" onClick={handleClose} >Cerrar</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}