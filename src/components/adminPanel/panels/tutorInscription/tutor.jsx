import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Message from "../../message/Message.jsx"


import "./tutor.css"
import { useState } from 'react';
export default function Tutor() {

    const [openMessage, setOpenMessage] = useState(false);
    const [messageParams, setMessageParams] = useState({
        type: "success",
        message: "Wololooo"
    })
    const [showData, setShowData] = useState(false);

    const [ci, setCi] = useState("");
    const [name, setname] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [nationality, setNationality] = useState("v");
    const [instrution, setInstrution] = useState("3");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [patrriaSerial, setPatrriaSerial] = useState("");
    const [patrriaCode, setPatrriaCode] = useState("");
    const [bank, setBank] = useState("");
    const [bankAux, setBankAux] = useState("");
    const [bankAccounType, setBankAccounType] = useState("corriente");
    const [bankAccoun, setBankAccoun] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    function handleSend() {
        let missing = checkMissing();
        if(missing !== "OK"){
            setMessageParams({
                type: "error",
                message: `No ha suministrado el campo: ${missing}`
            })
            setOpenMessage(true);
            return
        }


        let data = {
            tutorName: name,
            tutorLastName: lastNames,
            tutorCi: ci,
            tutorNationality: nationality,
            tutorInstruction: instrution,
            tutorPhone: phone,
            tutorEmail: email,
            tutorAddress: address,
            tutorPatriaCode: patrriaCode,
            tutorPatriaSrial: patrriaSerial,
            tutorBank: bank,
            tutorBankAux: bankAux,
            tutorBankAccounType: bankAccounType,
            tutorBankAccoun: bankAccoun,
            password
        }

        fetch("/tutor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(data)
        }).then(e => e.json())
            .then(response => {
                if(response.message === "OK"){
                    setMessageParams({
                        type: "success",
                        message: "Se ha inscrito al representante correctamente"
                    })
                    setOpenMessage(true);
                }
                if(response.error){
                    setMessageParams({
                        type: "error",
                        message: response.error
                    })
                    setOpenMessage(true);
                }

            })
            .catch(e => {
                console.log(e)
            })

    }
    function handleSearch() {
        if(ci === ""){
            setMessageParams({
                type: "error",
                message: "No ha suministrado ninguna c??dula"
            })
            setOpenMessage(true);
            setShowData(false)
            cleanData();
            return
        }
        async function getTutor() {
            try {
                let resquest = await fetch(`/tutor?ci=${ci}`);
                let response = await resquest.json();
                setShowData(true)
                if(response.error){
                    setMessageParams({
                        type: "warning",
                        message: response.error
                    })
                    setOpenMessage(true);
                    cleanData();
                    return
                }
                setMessageParams({
                    type: "success",
                    message: "Tutor encontrado"
                })
                setOpenMessage(true);
                fillData(response);
            } catch (error) {
                setMessageParams({
                    type: "error",
                    message: error.message
                })
                cleanData();
                setOpenMessage(true);
            }
        }
        getTutor();
    }

    function handleChange(e, cb) {
        cb(e.target.value)
    }
    function handleCiChange(e){
        setCi(e.target.value);
        setShowData(false);
    }

    function fillData({ password, tutorAddress, tutorBank, tutorBankAccoun, tutorBankAccounType, tutorBankAux, tutorEmail, tutorInstruction, tutorLastName, tutorName, tutorNationality, tutorPatriaCode, tutorPatriaSrial, tutorPhone }) {
        setname(tutorName);
        setLastNames(tutorLastName);
        setNationality(tutorNationality);
        setInstrution(tutorInstruction);
        setPhone(tutorPhone)
        setEmail(tutorEmail);
        setAddress(tutorAddress);
        setPatrriaSerial(tutorPatriaSrial);
        setPatrriaCode(tutorPatriaCode);
        setBank(tutorBank);
        setBankAux(tutorBankAux);
        setBankAccounType(tutorBankAccounType);
        setBankAccoun(tutorBankAccoun);
        setPassword(password);
        setPassword2(password);

    }

    function cleanData(){
        setname("");
        setLastNames("");
        setNationality("v");
        setInstrution("3");
        setPhone("")
        setEmail("");
        setAddress("");
        setPatrriaSerial("");
        setPatrriaCode("");
        setBank("");
        setBankAux("");
        setBankAccounType("corriente");
        setBankAccoun("");
        setPassword("");
        setPassword2("");
    }

    function checkMissing(){
        if(ci === ""){
            return "C??dula";
        }
        if(name === ""){
            return "Nombres";
        }
        if(lastNames === ""){
            return "Apellidos";
        }
        if(phone === ""){
            return "T??lefono";
        }
        if(email === ""){
            return "Email";
        }
        if(address === ""){
            return "Direcci??n";
        }
        if(patrriaSerial === ""){
            return "Ser??al del carnet de la patria";
        }
        if(patrriaCode === ""){
            return "C??digo del carnet de la patria";
        }
        if(bank === ""){
            return "Nombre del banco";
        }
        if(bank === "Otro" && bankAux === ""){
            return "Nombre del banco";
        }
        if(bankAccoun === ""){
            return "Cuenta bancaria";
        }
        if(password === ""){
            return "Contrase??a";
        }
        if(password !== password2){
            return "Las contrase??as no son iguales";
        }
        return "OK";
    }


    let key = 0;
    return <div id="tutorPanelContainer">
        <Message open={openMessage} setOpen={setOpenMessage} data={messageParams} />
        <div id="tutorPanelCiContainer">
            <TextField id="outlined-basic" label="C??dula" variant="outlined" type="number" autoComplete='off' value={ci} onChange={handleCiChange} />
            <Button variant="outlined" id='tutorBTNsearch' onClick={handleSearch}> <PersonSearchTwoToneIcon /> Buscar</Button>
        </div>
        <div id="tutorDataContainer" className={showData? "" : "invisible"}>
            <TextField id="outlined-basic" label="Nombres" variant="outlined" autoComplete='off' value={name} onChange={e => { handleChange(e, setname) }} />
            <TextField id="outlined-basic" label="Apellidos" variant="outlined" autoComplete='off' value={lastNames} onChange={e => { handleChange(e, setLastNames) }} />
            <TextField id="outlined-basic" type="password" label="Contrase??a" variant="outlined" autoComplete='off' value={password} onChange={e => { handleChange(e, setPassword) }} />
            <TextField id="outlined-basic" type="password" label="Repite la contrase??a" variant="outlined" autoComplete='off' value={password2} onChange={e => { handleChange(e, setPassword2) }} />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Nacionalidad</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={nationality}
                    onChange={e => { handleChange(e, setNationality) }}
                    name="Nacionalidad"
                >
                    <FormControlLabel value="v" control={<Radio />} label="Venezolano" />
                    <FormControlLabel value="e" control={<Radio />} label="Extrangero" />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Nivel de Instrucci??n</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={instrution}
                    onChange={e => { handleChange(e, setInstrution) }}
                    name="Nacionalidad"
                >
                    <FormControlLabel value="1" control={<Radio />} label="Escuela B??sica" />
                    <FormControlLabel value="2" control={<Radio />} label="Bachiller" />
                    <FormControlLabel value="3" control={<Radio />} label="Titulo Universitario" />
                    <FormControlLabel value="4" control={<Radio />} label="Postgrado" />
                    <FormControlLabel value="5" control={<Radio />} label="Doctorado" />

                </RadioGroup>
            </FormControl>

            <TextField id="outlined-basic" label="T??lefono" variant="outlined" type="number" autoComplete='off' value={phone} onChange={e => { handleChange(e, setPhone) }} />
            <TextField id="outlined-basic" label="Email" variant="outlined" autoComplete='off' value={email} onChange={e => { handleChange(e, setEmail) }} />
            <TextField id="outlined-basic" label="Direcci??n" variant="outlined" autoComplete='off' value={address} onChange={e => { handleChange(e, setAddress) }} />
            <TextField id="outlined-basic" label="Serial del carnet de la p??tria" variant="outlined" autoComplete='off' value={patrriaSerial} onChange={e => { handleChange(e, setPatrriaSerial) }} />
            <TextField id="outlined-basic" label="C??digo del carnet de la p??tria" variant="outlined" autoComplete='off' value={patrriaCode} onChange={e => { handleChange(e, setPatrriaCode) }} />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Banco del representante</InputLabel>
                <Select
                    labelId="demo-simple-select-label-banck"
                    id="demo-simple-select-banck"
                    value={bank}
                    label="Banco del representante"
                    onChange={e => { handleChange(e, setBank) }}
                >
                    {
                        getBanks().map(x => {
                            return <MenuItem key={key++} value={x}>{x}</MenuItem>
                        })
                    }

                </Select>
            </FormControl>
            <TextField id="outlined-basic" className={bank === "Otro" ? "" : "invisible"} label="Nombre del banco" variant="outlined" autoComplete='off' value={bankAux} onChange={e => { handleChange(e, setBankAux) }} />

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Tipo de cuenta</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={bankAccounType}
                    onChange={e => { handleChange(e, setBankAccounType) }}
                    name="instructionLevel"
                >
                    <FormControlLabel value="corriente" control={<Radio />} label="Corriente" />
                    <FormControlLabel value="ahorros" control={<Radio />} label="Ahorros" />
                </RadioGroup>
            </FormControl>
            <TextField id="outlined-basic" label="Cuenta Bancaria" variant="outlined" autoComplete='off' value={bankAccoun} onChange={e => { handleChange(e, setBankAccoun) }} />

            <Button variant="outlined" id='tutorBTNsearch' onClick={handleSend}> <HowToRegIcon /> Registrar</Button>

        </div>


    </div>
}

function getBanks() {
    let raw = "BANCO NACIONAL DE CR??DITO, C.A. BANCO UNIVERSAL.|BANCO PLAZA, C.A., BANCO UNIVERSAL.|BANCO DEL CARIBE C.A., BANCO UNIVERSAL (BANCARIBE).|BANCO SOFITASA BANCO UNIVERSAL, C.A.|DEL SUR BANCO UNIVERSAL, C.A.|BANCO DEL TESORO, C.A., BANCO UNIVERSAL.|BANCO EXTERIOR, C.A., BANCO UNIVERSAL.|BANCO INTERNACIONAL DE DESARROLLO, C.A BANCO UNIVERSAL.|BANCO DE LA FUERZA ARMADA NACIONAL BOLIVARIANA, BANCO UNIVERSAL, C.A. (BANFANB).|BFC BANCO FONDO COMUN, C.A. BANCO UNIVERSAL.|BANPLUS BANCO UNIVERSAL, C.A.|100% BANCO, BANCO UNIVERSAL, C.A.|BANCO PROVINCIAL, S.A. BANCO UNIVERSAL.|BANCO BICENTENARIO, DEL PUEBLO, DE LA CLASE OBRERA, MUJER Y COMUNAS, BANCO UNIVERSAL, C.A.|BANCO DE VENEZUELA, S.A. BANCO UNIVERSAL.|BANCO AGR??COLA DE VENEZUELA, C.A.|BANESCO BANCO UNIVERSAL, C.A.|BANCO CARON??, C.A., BANCO UNIVERSAL.|MERCANTIL, C.A., BANCO UNIVERSAL.|BANCO ACTIVO C.A., BANCO UNIVERSAL.|VENEZOLANO DE CR??DITO, S.A., BANCO UNIVERSAL.|BANCAMIGA BANCO UNIVERSAL, C.A.|BANCO NACIONAL DE VIVIENDA Y HABITAT (BANAVIH).|INSTITUTO MUNICIPAL DE CR??DITO POPULAR (I.M.C.P.).|BANCO INDUSTRIAL DE VENEZUELA C.A.|BANCO DE LA GENTE EMPRENDEDORA (BANGENTE) C.A.|BANCO DE DESARROLLO ECON??MICO Y SOCIAL DE VENEZUELA (BANDES).|BANCO DE COMERCIO EXTERIOR, C.A. (BANCOEX).|MI BANCO, BANCO MICROFINANCIERO, C.A.|BANCRECER, S.A. BANCO MICROFINANCIERO.|Otro";
    let banks = raw.split("|");
    return banks;
}