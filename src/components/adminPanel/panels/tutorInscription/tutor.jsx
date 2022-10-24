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

import "./tutor.css"
import { useState } from 'react';
export default function Tutor() {

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


    function handleSend(){
        let data = {
            tutorName : name,
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
        console.log(data)
    }
    function handleSearch() {
        console.log(ci)
    }

    function handleChange(e, cb) {
        cb(e.target.value)
    }

    let key = 0;
    return <div id="tutorPanelContainer">
        <div id="tutorPanelCiContainer">
            <TextField id="outlined-basic" label="Cédula" variant="outlined" type="number" autoComplete='off' value={ci} onChange={e => { handleChange(e, setCi) }} />
            <Button variant="outlined" id='tutorBTNsearch' onClick={handleSearch}> <PersonSearchTwoToneIcon /> Buscar</Button>
        </div>
        <div id="tutorDataContainer">
            <TextField id="outlined-basic" label="Nombres" variant="outlined" autoComplete='off' value={name} onChange={e => { handleChange(e, setname) }} />
            <TextField id="outlined-basic" label="Apellidos" variant="outlined" autoComplete='off' value={lastNames} onChange={e => { handleChange(e, setLastNames) }} />
            <TextField id="outlined-basic" type="password" label="Contraseña" variant="outlined" autoComplete='off' value={password} onChange={e => { handleChange(e, setPassword) }} />
            <TextField id="outlined-basic" type="password" label="Repite la contraseña" variant="outlined" autoComplete='off' value={password2} onChange={e => { handleChange(e, setPassword2) }} />
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
                <FormLabel id="demo-radio-buttons-group-label">Nivel de Instrucción</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={instrution}
                    onChange={e => { handleChange(e, setInstrution) }}
                    name="Nacionalidad"
                >
                    <FormControlLabel value="1" control={<Radio />} label="Escuela Básica" />
                    <FormControlLabel value="2" control={<Radio />} label="Bachiller" />
                    <FormControlLabel value="3" control={<Radio />} label="Titulo Universitario" />
                    <FormControlLabel value="4" control={<Radio />} label="Postgrado" />
                    <FormControlLabel value="5" control={<Radio />} label="Doctorado" />

                </RadioGroup>
            </FormControl>

            <TextField id="outlined-basic" label="Télefono" variant="outlined" type="number" autoComplete='off' value={phone} onChange={e => { handleChange(e, setPhone) }} />
            <TextField id="outlined-basic" label="Email" variant="outlined" autoComplete='off' value={email} onChange={e => { handleChange(e, setEmail) }} />
            <TextField id="outlined-basic" label="Dirección" variant="outlined" autoComplete='off' value={address} onChange={e => { handleChange(e, setAddress) }} />
            <TextField id="outlined-basic" label="Serial del carnet de la pátria" variant="outlined" autoComplete='off' value={patrriaSerial} onChange={e => { handleChange(e, setPatrriaSerial) }} />
            <TextField id="outlined-basic" label="Código del carnet de la pátria" variant="outlined" autoComplete='off' value={patrriaCode} onChange={e => { handleChange(e, setPatrriaCode) }} />
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
    let raw = "BANCO NACIONAL DE CRÉDITO, C.A. BANCO UNIVERSAL.|BANCO PLAZA, C.A., BANCO UNIVERSAL.|BANCO DEL CARIBE C.A., BANCO UNIVERSAL (BANCARIBE).|BANCO SOFITASA BANCO UNIVERSAL, C.A.|DEL SUR BANCO UNIVERSAL, C.A.|BANCO DEL TESORO, C.A., BANCO UNIVERSAL.|BANCO EXTERIOR, C.A., BANCO UNIVERSAL.|BANCO INTERNACIONAL DE DESARROLLO, C.A BANCO UNIVERSAL.|BANCO DE LA FUERZA ARMADA NACIONAL BOLIVARIANA, BANCO UNIVERSAL, C.A. (BANFANB).|BFC BANCO FONDO COMUN, C.A. BANCO UNIVERSAL.|BANPLUS BANCO UNIVERSAL, C.A.|100% BANCO, BANCO UNIVERSAL, C.A.|BANCO PROVINCIAL, S.A. BANCO UNIVERSAL.|BANCO BICENTENARIO, DEL PUEBLO, DE LA CLASE OBRERA, MUJER Y COMUNAS, BANCO UNIVERSAL, C.A.|BANCO DE VENEZUELA, S.A. BANCO UNIVERSAL.|BANCO AGRÍCOLA DE VENEZUELA, C.A.|BANESCO BANCO UNIVERSAL, C.A.|BANCO CARONÍ, C.A., BANCO UNIVERSAL.|MERCANTIL, C.A., BANCO UNIVERSAL.|BANCO ACTIVO C.A., BANCO UNIVERSAL.|VENEZOLANO DE CRÉDITO, S.A., BANCO UNIVERSAL.|BANCAMIGA BANCO UNIVERSAL, C.A.|BANCO NACIONAL DE VIVIENDA Y HABITAT (BANAVIH).|INSTITUTO MUNICIPAL DE CRÉDITO POPULAR (I.M.C.P.).|BANCO INDUSTRIAL DE VENEZUELA C.A.|BANCO DE LA GENTE EMPRENDEDORA (BANGENTE) C.A.|BANCO DE DESARROLLO ECONÓMICO Y SOCIAL DE VENEZUELA (BANDES).|BANCO DE COMERCIO EXTERIOR, C.A. (BANCOEX).|MI BANCO, BANCO MICROFINANCIERO, C.A.|BANCRECER, S.A. BANCO MICROFINANCIERO.|Otro";
    let banks = raw.split("|");
    return banks;
}