import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';
import "./student.css"
import { useState } from 'react';

export default function Inscription() {
    const [ci, setCi] = useState("");
    const [haveCi, setHaveCi] = useState(true);
    const [grade, setGrade] = useState("1");
    const [seccion, setSeccion] = useState("A");
    const [period, setPeriodo]= useState("2022");
    const [nation, setNation] = useState("Venezuela");
    const [tutorNation, setTutorNation] = useState("Venezuela");
    const [birthState, setbirthState] = useState("Distrito Capital");
    const [birthPlace, setbirthPlace] = useState("");
    const [homeState, setHomeState] = useState("Distrito Capital");
    const [municipio, setMunicipio] = useState("");
    const [names, setNames] = useState("");
    const [lastNames, setLastNames] = useState("");
    const [date, setDate] = useState("2022-01-01");
    const [studentPhone, setStudentPhone] = useState("");
    const [studenEmail, setStudenEmail] = useState("");
    const [previusSchool, setPreviusSchool] = useState("");
    const [nationality, setNationality] = useState("v");
    const [married, setMarried] = useState("s");
    const [gender, setGender] = useState("f");
    const [birthAct, setBirthAct] = useState(false);
    const [birthActCopy, setBirthActCopy] = useState(false);
    const [_ci, _setCi ] = useState(false);
    const [photos, setPhotos ] = useState(false);
    const [gradesCertificate, setGradesCertificate] = useState(false);
    const [gradesCertificateCopy, setGradesCertificateCopy] = useState(false);
    const [canainaRecipe, setCanainaRecipe] = useState(false);
    const [sixGrade, setSixGrade] = useState(false);
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [tikTok, setTikTok] = useState("");
    const [instagram, setInstagram] = useState("");
    const [motherName, setMotherName] = useState("");
    const [motherLastName, setMotherLastName] = useState("");
    const [motherCi, setMotherCi] = useState("");
    const [motherPhone, setMotherPhone] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [fatherLastName, setFatherLastName] = useState("");
    const [fatherCi, setFatherCi] = useState("");
    const [fatherPhone, setFatherPhone] = useState("");
    const [siblinsNumber, setSiblinsNumer] = useState("");
    const [parroquia, setParroquia] = useState("");
    const [town, setTown] = useState("");
    const [urbanizacion, setUrbanizacion] = useState("");
    const [stdAddres, setStdAddress] = useState("");
    const [whoLive, setWhoLive] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setheight] = useState("");
    const [chessSize, setChessSize] = useState("");
    const [pantsSize, setPantsSize] = useState("");
    const [feetSize, setFeetSize] = useState("");
    const [gravidez, setGravidez] = useState("n");
    const [pregnancyTime, setPregnancyTime] = useState("");
    const [influenza, setInflueza] = useState(false);
    const [asma, setAsma] = useState(false);
    const [diabetes, setDiabetes] = useState(false);
    const [epilepsia, setEpilepsia] = useState(false);
    const [tension, setTension] = useState(false);
    const [harth, setHarth] = useState(false);
    const [drugAllegies, setDrugAllergies] = useState("");
    const [foodAllegies, setFoodAllergies] = useState("");
    const [houseType, setHouseType] = useState("CasaFamiliar");
    const [houseCondition, setHouseCondition] = useState("Media");
    const [emergencyName, setEmergencyName] = useState("");
    const [emergencyPhone, setEmergencyPhone] = useState("");
    const [emergencyRelation, setEmergencyRelation] = useState("");
    const [canaima, setCanaima] = useState(false);
    const [tablet, setTablet] = useState(false);
    const [smarthPhone, setSmarthPhone] = useState(false);
    const [pc, setPC] = useState(false);
    const [becas, setBecas] = useState(false);
    const [studentPatriaCode, setStudentPatriaCode] = useState("");
    const [studentPatriaSerial, setStudentPatriaSerial] = useState("");
    const [tutorName, setTutorName] = useState("");
    const [tutorLastName, setTutorLastName] = useState("");
    const [tutorCi, setTutorCi] = useState("");
    const [tutorNationality, setTutorNationality] = useState("v");
    const [tutorInstruction, setTutorInstruction] = useState("3");
    const [tutorPhone, setTutorPhone] = useState("");
    const [tutorEmail, setTutorEmail] = useState("");
    const [tutorAddress, setTutorAddress] = useState("");
    const [tutorPatriaCode, setTutorPatriaCode] = useState("");
    const [tutorPatriaSrial, setTutorPatriaSrial] = useState("");
    const [tutorBank, setTutorBank] = useState("BANCO DE VENEZUELA, S.A. BANCO UNIVERSAL.");
    const [tutorBankAux, setTutorBankAux] = useState("");
    const [tutorBankAccounType, setTutorBankAccounType] = useState("corriente");
    const [tutorBankAccoun, setTutorBankAccoun] = useState("");


    const handleTutorBankAccoun = (event)=>{
        setTutorBankAccoun(event.target.value);
    }
    const handleTutorBankAccounType = (event)=>{
        setTutorBankAccounType(event.target.value);
    }
    const handleTutorBankAux = (event)=>{
        setTutorBankAux(event.target.value);
    }
    const handleTutorBank = (event)=>{
        setTutorBank(event.target.value);
    }
    const handleTutorPatriaSrial = (event)=>{
        setTutorPatriaSrial(event.target.value);
    }
    const handleTutorPatriaCode = (event)=>{
        setTutorPatriaCode(event.target.value);
    }
    const handleTutorAddress = (event)=>{
        setTutorAddress(event.target.value);
    }
    const handleTutorEmail = (event)=>{
        setTutorEmail(event.target.value);
    }
    const handleTutorPhone = (event)=>{
        setTutorPhone(event.target.value);
    }
    const handleTutorInstruction = (event)=>{
        setTutorInstruction(event.target.value);
    }
    const handleTutorNationality = (event)=>{
        setTutorNationality(event.target.value);
    }
    const handleTutorCi = (event)=>{
        setTutorCi(event.target.value);
    }
    const handleTutorLastName = (event)=>{
        setTutorLastName(event.target.value);
    }
    const handleTutorName = (event)=>{
        setTutorName(event.target.value);
    }
    const handleStudentPatriaSerial = (event)=>{
        setStudentPatriaSerial(event.target.value);
    }
    const handleStudentPatriaCode = (event)=>{
        setStudentPatriaCode(event.target.value);
    }
    const handleBecas = (event)=>{
        setBecas(event.target.checked);
    }
    const handlePC = (event)=>{
        setPC(event.target.checked);
    }
    const handleSmarthPhone = (event)=>{
        setSmarthPhone(event.target.checked);
    }
    const handleTablet = (event)=>{
        setTablet(event.target.checked);
    }
    const handleCanaima = (event)=>{
        setCanaima(event.target.checked);
    }
    const handleEmergencyRelation = (event)=>{
        setEmergencyRelation(event.target.value);
    }
    const handleEmergencyPhone = (event)=>{
        setEmergencyPhone(event.target.value);
    }
    const handleEmergencyName = (event)=>{
        setEmergencyName(event.target.value);
    }
    const handleHouseCondition = (event)=>{
        setHouseCondition(event.target.value);
    }
    const handleHouseType = (event)=>{
        setHouseType(event.target.value);
    }
    const handleFoodAllergies = (event)=>{
        setFoodAllergies(event.target.value);
    }
    const handleDrugAllergies = (event)=>{
        setDrugAllergies(event.target.value);
    }
    const handleHarth = (event)=>{
        setHarth(event.target.checked);
    }
    const handleTension = (event)=>{
        setTension(event.target.checked);
    }
    const handleEpilepsia = (event)=>{
        setEpilepsia(event.target.checked);
    }
    const handleDiabetes = (event)=>{
        setDiabetes(event.target.checked);
    }
    const handleAsma = (event)=>{
        setAsma(event.target.checked);
    }
    const handleInflueza = (event)=>{
        setInflueza(event.target.checked);
    }
    const handlePregnancyTime = (event)=>{
        setPregnancyTime(event.target.value);
    }
    const handleGravidez = (event)=>{
        setGravidez(event.target.value);
    }
    const handleFeetSize = (event)=>{
        setFeetSize(event.target.value);
    }
    const handlePantsSize = (event)=>{
        setPantsSize(event.target.value);
    }
    const handleChessSize = (event)=>{
        setChessSize(event.target.value);
    }
    const handleHeight = (event)=>{
        setheight(event.target.value);
    }
    const handleWeight = (event)=>{
        setWeight(event.target.value);
    }
    const handleWhoLive = (event)=>{
        setWhoLive(event.target.value);
    }
    const handleStdAddress = (event)=>{
        setStdAddress(event.target.value);
    }
    const handleUrbanizacion = (event)=>{
        setUrbanizacion(event.target.value);
    }
    const handleTown = (event)=>{
        setTown(event.target.value);
    }
    const handleParroquia = (event)=>{
        setParroquia(event.target.value);
    }
    const handleSiblinsNumer = (event)=>{
        setSiblinsNumer(event.target.value);
    }
    const handleFatherPhone = (event)=>{
        setFatherPhone(event.target.value);
    }
    const handleFatherCi = (event)=>{
        setFatherCi(event.target.value);
    }
    const handleFatherLastName = (event)=>{
        setFatherLastName(event.target.value);
    }
    const handleFatherName = (event)=>{
        setFatherName(event.target.value);
    }
    const handleMotherPhone = (event)=>{
        setMotherPhone(event.target.value);
    }
    const handleMotherCi = (event)=>{
        setMotherCi(event.target.value);
    }
    const handleLastMotherName = (event)=>{
        setMotherLastName(event.target.value);
    }
    const handleMotherName = (event)=>{
        setMotherName(event.target.value);
    }
    const handleInstagram = (event)=>{
        setInstagram(event.target.value);
    }
    const handleTikTok = (event)=>{
        setTikTok(event.target.value);
    }
    const handleWhatsapp = (event)=>{
        setWhatsapp(event.target.value);
    }
    const handleTwitter = (event)=>{
        setTwitter(event.target.value);
    }
    const handleFacebook = (event)=>{
        setFacebook(event.target.value);
    }
    const handleSixGrade = (event)=>{
        setSixGrade(event.target.checked);
    }
    const handleCanainaRecipe = (event)=>{
        setCanainaRecipe(event.target.checked);
    }
    const handleGradesCertificateCopy = (event)=>{
        setGradesCertificateCopy(event.target.checked);
    }
    const handleGradesCertificate = (event)=>{
        setGradesCertificate(event.target.checked);
    }
    const handlePhotos = (event)=>{
        setPhotos(event.target.checked);
    }
    const handle_ci = (event)=>{
        _setCi(event.target.checked);
    }
    const handleBirthActCopy = (event)=>{
        setBirthActCopy(event.target.checked);
    }
    const handleBirthAct = (event)=>{
        setBirthAct(event.target.checked);
    }
    const handleGender = (event)=>{
        setGender(event.target.value);
    }
    const handleMarried = (event)=>{
        setMarried(event.target.value);
    }
    const handleNationality = (event)=>{
        setNationality(event.target.value);
    }
    const handlePreviusSchool = (event)=>{
        setPreviusSchool(event.target.value);
    }
    const handleStudentEmail = (event)=>{
        setStudenEmail(event.target.value);
    }
    const handleStudentPhone = (event) =>{
        setStudentPhone(event.target.value);
    }
    const handleDate = (event)=>{
        setDate(event.target.value);
    }
    const handleLastNames = (event)=>{
        setLastNames(event.target.value)
    }
    const handleNames = (event)=>{
        setNames(event.target.value)
    }
    const handlePeriod = (event) => {
        setPeriodo(event.target.value);
    }
    const handleHaveCi = (event) => {
        setHaveCi(!event.target.checked);
        if (event.target.checked) {
            let number = getRandom(10);
            setCi("99" + number);
        } else {
            setCi("");
        }
    }
    const handleCi = (event) => {
        if (haveCi) {
            setCi(event.target.value);
        }
    }
    const handleGrade = (event) => {
        setGrade(event.target.value);
    };
    const handleSeccion = (event) => {
        setSeccion(event.target.value);
    };
    const handleNation = (event) => {
        setNation(event.target.value);
    };
    const handleBirthState = (event) => {
        setbirthState(event.target.value);
    }
    const handleBirthPlace = (event) => {
        setbirthPlace(event.target.value);
    }
    const handleHomeState = (event) => {
        setHomeState(event.target.value);
    }
    const handleMunicipio = (event) => {
        setMunicipio(event.target.value);
    }
    const handleTutorNation = (event) => {
        setTutorNation(event.target.value);
    };

    let countryKey = 0;
    return <div id="InscriptionContainer">
        <div id="divCi">
            <div id='ciContainer'>
                <TextField id="outlined-basic" label={haveCi ? "Cédula" : "Cédula provicional"} variant="outlined" type="number" autoComplete='off' value={ci} onChange={handleCi} />
                <Tooltip title="Esto genera un numero cédula provicional" arrow>
                    <FormControlLabel control={<Checkbox checked={!haveCi} onChange={handleHaveCi} />} label="No tiene cédula" />
                </Tooltip>
            </div>
            <Button variant="outlined" className={haveCi ? "" : "invisible"}>Buscar</Button>
        </div>
        <div id="studentDataContainer">
            <TextField id="outlined-basic" label="Nombres" variant="outlined" autoComplete='off' value={names} onChange={handleNames} />
            <TextField id="outlined-basic" label="Apellidos" variant="outlined" autoComplete='off' value={lastNames} onChange={handleLastNames} />
            <div className='auxContainer'>
                <TextField id="outlined-basic" label="Cumpleaños" variant="outlined" type="date" autoComplete='off' value={date} onChange={handleDate} />
                <TextField id="outlined-basic" label="Télefono" variant="outlined" type="number" autoComplete='off' value={studentPhone} onChange={handleStudentPhone}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" autoComplete='off' value={studenEmail} onChange={handleStudentEmail} />
            </div>
            <div className='auxContainer'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label-grade">Grado a inscribir</InputLabel>
                    <Select
                        labelId="demo-simple-select-label-grade"
                        id="demo-simple-select-grade"
                        value={grade}
                        label="Grado a inscribir"
                        onChange={handleGrade}
                    >
                        <MenuItem value="1">Primer año</MenuItem>
                        <MenuItem value="2">Segundo año</MenuItem>
                        <MenuItem value="3">Tercer año</MenuItem>
                        <MenuItem value="4">Cuarto año</MenuItem>
                        <MenuItem value="5">Quinto año</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label-seccion">Sección</InputLabel>
                    <Select
                        labelId="demo-simple-select-label-seccion"
                        id="demo-simple-select-seccion"
                        value={seccion}
                        label="Sección"
                        onChange={handleSeccion}
                    >
                        <MenuItem value="A">Sección A</MenuItem>
                        <MenuItem value="B">Sección B</MenuItem>
                        <MenuItem value="C">Sección C</MenuItem>
                        <MenuItem value="D">Sección D</MenuItem>
                        <MenuItem value="E">Sección E</MenuItem>
                        <MenuItem value="F">Sección F</MenuItem>
                        <MenuItem value="G">Sección G</MenuItem>
                        <MenuItem value="H">Sección H</MenuItem>
                        <MenuItem value="I">Sección I</MenuItem>
                        <MenuItem value="J">Sección J</MenuItem>
                        <MenuItem value="K">Sección K</MenuItem>
                        <MenuItem value="L">Sección L</MenuItem>
                        <MenuItem value="M">Sección M</MenuItem>
                        <MenuItem value="N">Sección N</MenuItem>
                        <MenuItem value="O">Sección O</MenuItem>
                        <MenuItem value="P">Sección P</MenuItem>
                        <MenuItem value="Q">Sección Q</MenuItem>
                        <MenuItem value="R">Sección R</MenuItem>
                        <MenuItem value="S">Sección S</MenuItem>
                        <MenuItem value="T">Sección T</MenuItem>
                        <MenuItem value="U">Sección U</MenuItem>
                        <MenuItem value="V">Sección V</MenuItem>
                        <MenuItem value="W">Sección W</MenuItem>
                        <MenuItem value="X">Sección X</MenuItem>
                        <MenuItem value="Y">Sección Y</MenuItem>
                        <MenuItem value="Z">Sección Z</MenuItem>
                    </Select>
                </FormControl>

                <TextField id="outlined-basic" className='period' label="Inicio perido escolar" variant="outlined" autoComplete='off' type="number" value={period} onChange={handlePeriod} />
                <TextField id="outlined-basic" className='period' label="Fin perido escolar" variant="outlined" autoComplete='off' value={Number.parseInt(period) + 1}/>

            </div>
            <TextField id="outlined-basic" label="Institución Anterior" variant="outlined" autoComplete='off' value={previusSchool} onChange = {handlePreviusSchool}/>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pais de nacimiento</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={nation}
                    label="Pais de nacimiento"
                    onChange={handleNation}
                >
                    {
                        getCountries().map(country => {
                            return <MenuItem key={countryKey++} value={country}>{country}</MenuItem>
                        })}

                </Select>
            </FormControl>


            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Estado de nacimiento</InputLabel>
                <Select
                    labelId="demo-simple-select-label-birthState"
                    id="demo-simple-select"
                    value={birthState}
                    label="Estado de nacimiento"
                    onChange={handleBirthState}
                >
                    {
                        getStates(nation).map(state => {
                            return <MenuItem key={countryKey++} value={state}>{state}</MenuItem>
                        })
                    }

                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Lugar de nacimiento</InputLabel>
                <Select
                    labelId="demo-simple-select-label-birthPlace"
                    id="demo-simple-select-birthPlace"
                    value={birthPlace}
                    label="Estado de nacimiento"
                    onChange={handleBirthPlace}
                >
                    {
                        getMunicipio(birthState).map(state => {
                            return <MenuItem key={countryKey++} value={state}>{state}</MenuItem>
                        })}

                </Select>
            </FormControl>


            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Nacionalidad</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={nationality}
                    onChange={handleNationality}
                    name="nationality"
                >
                    <FormControlLabel value="v" control={<Radio />} label="Venezolano" />
                    <FormControlLabel value="e" control={<Radio />} label="Extrangero" />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Estado civil</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={married}
                    onChange={handleMarried}
                    name="married"
                >
                    <FormControlLabel value="s" control={<Radio />} label="Soltero" />
                    <FormControlLabel value="c" control={<Radio />} label="Casado" />
                    <FormControlLabel value="d" control={<Radio />} label="Divorciado" />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={gender}
                    onChange ={handleGender}
                    name="gender"
                >
                    <FormControlLabel value="f" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                </RadioGroup>
            </FormControl>

            <div id="requisites" className='list'>
                <FormControlLabel control={<Checkbox checked={birthAct} onChange={handleBirthAct} />} label="Partida de nacimiento original" />
                <FormControlLabel control={<Checkbox checked={birthActCopy} onChange={handleBirthActCopy}/>} label="Partida de nacimiento copia" />
                <FormControlLabel control={<Checkbox checked={_ci} onChange={handle_ci} />} label="Cédula de identidad" />
                <FormControlLabel control={<Checkbox checked={photos} onChange={handlePhotos}/>} label="Fotos tipo carnet" />
                <FormControlLabel control={<Checkbox checked={gradesCertificate} onChange={handleGradesCertificate}/>} label="Certificado de calificaciones original" />
                <FormControlLabel control={<Checkbox checked={gradesCertificateCopy} onChange={handleGradesCertificateCopy}/>} label="Certificado de calificaciones copia" />
                <FormControlLabel control={<Checkbox checked={canainaRecipe} onChange={handleCanainaRecipe}/>} label="Constancia de no poseer canaima" />
                <FormControlLabel control={<Checkbox />} checked={sixGrade} onChange={handleSixGrade} label="Boleta de promocion de 6to grado" />
            </div>
            <div id="socialNetworking" className='list'>
                <TextField id="outlined-basic" label="Facebook" value={facebook} onChange={handleFacebook} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Twitter" value={twitter} onChange={handleTwitter} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Whatsapp" value={whatsapp} onChange={handleWhatsapp} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="TikTok" value={tikTok} onChange={handleTikTok} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Instagram" value={instagram} onChange={handleInstagram} variant="outlined" autoComplete='off' />
            </div>
            <div id="familly" className='list'>
                <TextField id="outlined-basic" label="Nombres de la Madre" value={motherName} onChange={handleMotherName} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Apellidos de la Madre" value={motherLastName} onChange={handleLastMotherName} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Cédula de la Madre" value={motherCi} onChange={handleMotherCi} variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Télefono de la Madre" value={motherPhone} onChange={handleMotherPhone} variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Nombres de el Padre" value={fatherName} onChange={handleFatherName} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Apellidos de el Padre" value={fatherLastName} onChange={handleFatherLastName} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Cédula de el Padre" value={fatherCi} onChange={handleFatherCi} variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Télefono de el Padre" value={fatherPhone} onChange={handleFatherPhone} variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Numero de hermanos" value={siblinsNumber} onChange={handleSiblinsNumer} variant="outlined" type="number" autoComplete='off' />
            </div>
            <div id="adress" className='list'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Estado de residencia</InputLabel>
                    <Select
                        labelId="demo-simple-select-label-birthState"
                        id="demo-simple-select"
                        value={homeState}
                        label="Estado de nacimiento"
                        onChange={handleHomeState}
                    >
                        {
                            getStates().map(state => {
                                return <MenuItem key={countryKey++} value={state}>{state}</MenuItem>
                            })}

                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Municipio</InputLabel>
                    <Select
                        labelId="demo-simple-select-label-municipio"
                        id="demo-simple-select"
                        value={municipio}
                        label="Municipio"
                        onChange={handleMunicipio}
                    >
                        {
                            getMunicipio(homeState).map(muni => {
                                return <MenuItem key={countryKey++} value={muni}>{muni}</MenuItem>
                            })}

                    </Select>
                </FormControl>

                <TextField id="outlined-basic" label="Parroquia" value={parroquia} onChange ={handleParroquia} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Poblacíon" value={town} onChange ={handleTown} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Urbanización" value={urbanizacion} onChange ={handleUrbanizacion} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Dirección" value={stdAddres} onChange ={handleStdAddress} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="¿Con quien vives?" value={whoLive} onChange ={handleWhoLive} variant="outlined" autoComplete='off' />
            </div>
            <div id="studentBody" className='list'>
                <TextField id="outlined-basic" label="Peso" value={weight} onChange ={handleWeight} variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Estatura" value={height} onChange ={handleHeight} variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Talla de la camisa" value={chessSize} onChange ={handleChessSize} variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Talla del pantalon" value={pantsSize} onChange ={handlePantsSize} variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Talla de los zapatos" value={feetSize} onChange ={handleFeetSize} variant="outlined" autoComplete='off' type="number" />
            </div>
            <div id="gravidez" className='list'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">¿Está enbarazada/o?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={gravidez}
                        onChange ={handleGravidez}
                        name="gravidez"
                    >
                        <FormControlLabel value="y" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <TextField id="outlined-basic" className={gravidez === "y"? "":"invisible"} label="Tiempo de embarazo (meses)" value={pregnancyTime} onChange={handlePregnancyTime} variant="outlined" autoComplete='off' type="number" />
            </div>

            <div id="medicalData" className='list'>
                <FormControlLabel control={<Checkbox checked={influenza} onChange={handleInflueza} />} label="¿Se vacuna contra la gripe anualmente?" />
                <FormControlLabel control={<Checkbox checked={asma} onChange={handleAsma}/>} label="Asma" />
                <FormControlLabel control={<Checkbox checked={diabetes} onChange={handleDiabetes}/>} label="Diabetes" />
                <FormControlLabel control={<Checkbox checked={epilepsia} onChange={handleEpilepsia}/>} label="Epilepcias" />
                <FormControlLabel control={<Checkbox checked={tension} onChange={handleTension}/>} label="Hipertenso" />
                <FormControlLabel control={<Checkbox checked={harth} onChange={handleHarth}/>} label="Problemas con el corazón" />
                <TextField id="outlined-basic" value={drugAllegies} onChange={handleDrugAllergies} label="Alergias a Medicamentos" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" value={foodAllegies} onChange={handleFoodAllergies} label="Alergias a Alimentos" variant="outlined" autoComplete='off' />
            </div>

            <div id="houseData" className='list'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Tipo de vivienda</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={houseType}
                        onChange ={handleHouseType}
                        name="house"
                    >
                        <FormControlLabel value="CasaFamiliar" control={<Radio />} label="Casa Familiar" />
                        <FormControlLabel value="Apartamento" control={<Radio />} label="Apartamento" />
                        <FormControlLabel value="Estudio" control={<Radio />} label="Estudio" />
                        <FormControlLabel value="Quinta" control={<Radio />} label="Quinta" />
                        <FormControlLabel value="Rancho" control={<Radio />} label="Rancho" />
                        <FormControlLabel value="Otro" control={<Radio />} label="Otro" />
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Condición de vivienda</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={houseCondition}
                        onChange={handleHouseCondition}
                        name="Media"
                    >
                        <FormControlLabel value="Mala" control={<Radio />} label="Mala" />
                        <FormControlLabel value="Media" control={<Radio />} label="Media" />
                        <FormControlLabel value="Buena" control={<Radio />} label="Buena" />

                    </RadioGroup>
                </FormControl>
            </div>

            <div id="emergency" className='list'>
                <TextField id="outlined-basic" value={emergencyName} onChange={handleEmergencyName} label="Nombre del contacto" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" value={emergencyPhone} onChange={handleEmergencyPhone} label="Numero de Teléfono" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" value={emergencyRelation} onChange={handleEmergencyRelation} label="Relación con el estudiante" variant="outlined" autoComplete='off' />
            </div>

            <div id="resourses" className='list'>
                <FormControlLabel control={<Checkbox checked={canaima} onChange={handleCanaima}/>} label="Canaima" />
                <FormControlLabel control={<Checkbox checked={tablet} onChange={handleTablet}/>} label="Tablet" />
                <FormControlLabel control={<Checkbox checked={smarthPhone} onChange={handleSmarthPhone}/>} label="Teléfono inteligente" />
                <FormControlLabel control={<Checkbox checked={pc} onChange={handlePC}/>} label="Computador de escritorio" />
            </div>

            <div id="documents" className='list'>
                <FormControlLabel control={<Checkbox checked={becas} onChange={handleBecas} />} label="Tiene becas" />
                <TextField id="outlined-basic" className={becas ? "" : "invisible"} label="Nombre de la beca" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" value={studentPatriaCode} onChange={handleStudentPatriaCode} label="Código del carnet de la patria" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" value={studentPatriaSerial} onChange={handleStudentPatriaSerial} label="Serial del carnet de la patria" variant="outlined" type="number" autoComplete='off' />
            </div>

            <div id="tutor" className='list'>
                <TextField id="outlined-basic" value={tutorName} onChange={handleTutorName} label="Nombres del tutor" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" value={tutorLastName} onChange={handleTutorLastName} label="Apellidos del tutor" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" value={tutorCi} onChange={handleTutorCi} label="Cédula del tutor" variant="outlined" type="number" autoComplete='off' />

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Nacionalidad del tutor</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={tutorNationality}
                        onChange = {handleTutorNationality}
                        name="tutorNationality"
                    >
                        <FormControlLabel value="v" control={<Radio />} label="Venezolano" />
                        <FormControlLabel value="e" control={<Radio />} label="Extrangero" />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pais de nacimiento</InputLabel>
                    <Select
                        labelId="tutorlbl"
                        id="demo-simple-select-tutor"
                        value={tutorNation}
                        label="Pais de nacimiento"
                        onChange={handleTutorNation}
                    >
                        {
                            getCountries().map(country => {
                                return <MenuItem key={countryKey++} value={country}>{country}</MenuItem>
                            })}

                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Nivel de instrucción del tutor</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={tutorInstruction}
                        onChange={handleTutorInstruction}
                        name="instructionLevel"
                    >
                        <FormControlLabel value="1" control={<Radio />} label="Escuela Basica" />
                        <FormControlLabel value="2" control={<Radio />} label="Bachiller" />
                        <FormControlLabel value="3" control={<Radio />} label="Título Universitário" />
                        <FormControlLabel value="4" control={<Radio />} label="Postgrado" />
                        <FormControlLabel value="5" control={<Radio />} label="Doctorado" />
                        <FormControlLabel value="6" control={<Radio />} label="Ninguno" />
                    </RadioGroup>
                </FormControl>

                <TextField id="outlined-basic" value={tutorPhone} onChange={handleTutorPhone} label="Télefono" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" value={tutorEmail} onChange={handleTutorEmail} label="Email" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" value={tutorAddress} onChange={handleTutorAddress} label="Dirección" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" value={tutorPatriaCode} onChange={handleTutorPatriaCode} label="Código del carnet de la patría" type="number" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" value={tutorPatriaSrial} onChange={handleTutorPatriaSrial} label="Serial del carnet de la patría" type="number" variant="outlined" autoComplete='off' />
                
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Banco del representante</InputLabel>
                    <Select
                        labelId="demo-simple-select-label-banck"
                        id="demo-simple-select-banck"
                        value={tutorBank}
                        label="Banco del representante"
                        onChange={handleTutorBank}
                    >
                        {
                            getBanks().map(bank => {
                                return <MenuItem key={countryKey++} value={bank}>{bank}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>
                
                <TextField id="outlined-basic" className={tutorBank === "Otro" ? "" : "invisible"} value={tutorBankAux} onChange={handleTutorBankAux} label="Banco" type="number" variant="outlined" autoComplete='off' />
                
                
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Tipo de cuenta</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={tutorBankAccounType}
                        onChange={handleTutorBankAccounType}
                        name="instructionLevel"
                    >
                        <FormControlLabel value="corriente" control={<Radio />} label="Corriente" />
                        <FormControlLabel value="ahorros" control={<Radio />} label="Ahorros" />
                    </RadioGroup>
                </FormControl>
                <TextField id="outlined-basic" value={tutorBankAccoun} onChange={handleTutorBankAccoun} label="Cuenta Bancaría del Representante" type="number" variant="outlined" autoComplete='off' />

            </div>
            <Button variant="contained" endIcon={<SendIcon />}>Inscribir</Button>
            <br />

        </div>

    </div>
}

function getRandom(length) {

    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));

}

function getCountries() {
    const raw = "Afganistán|Albania|Alemania|Andorra|Angola|Antigua y Barbuda|Arabia Saudita|Argelia|Argentina|Armenia|Australia|Austria|Azerbaiyán|Bahamas|Bangladés|Barbados|Baréin|Bélgica|Belice|Benín|Bielorrusia|Birmania|Bolivia|Bosnia-Herzegovina|Botsuana|Brasil|Brunéi|Bulgaria|Burkina Faso|Burundi|Bután|Cabo Verde|Camboya|Camerún|Canadá|Catar|Chad|Chile|China|Chipre|Colombia|Comoras|Congo|Corea del Norte|Corea del Sur|Costa de Marfil|Costa Rica|Croacia|Cuba|Dinamarca|Dominica|Ecuador|Egipto|El Salvador|Emiratos Árabes Unidos|Eritrea|Eslovaquia|Eslovenia|España|Estados Unidos|Estonia|Esuatini|Etiopía|Filipinas|Finlandia|Fiyi|Francia|Gabón|Gambia|Georgia|Ghana|Granada|Grecia|Guatemala|Guinea|Guinea Ecuatorial|Guinea-Bisáu|Guyana|Haití|Honduras|Hungría|India|Indonesia|Irak|Irán|Irlanda|Islandia|slas Marshall|Islas Salomón|Israel|Italia|Jamaica|Japón|Jordania|Kazajistán|Kenia|Kirguistán|Kiribati|Kosovo|Kuwait|Laos|Lesoto|Letonia|Líbano|Liberia|Libia|Liechtenstein|Lituania|Luxemburgo|Macedonia del Norte|Madagascar|Malasia|Malaui|Maldivas|Malí|Malta|Marruecos|Mauricio|Mauritania|México|Micronesia|Moldavia|Mónaco|Mongolia|Montenegro|Mozambique|Namibia|Nauru|Nepal|Nicaragua|Níger|Nigeria|Noruega|Nueva Zelanda|Omán|Países Bajos|Pakistán|Palaos|Palestina|Panamá|Papúa Nueva Guinea|Paraguay|Perú|Polonia|Portugal|Reino Unido|República Centroafricana|República Checa|República Democrática del Congo|República Dominicana|Ruanda|Rumania|Rusia|Samoa|San Cristóbal y Nieves|San Marino|San Vicente y las Granadinas|Santa Lucía|Santo Tomé y Príncipe|Senegal|Serbia|Seychelles|Sierra Leona|Singapur|Siria|Somalia|Sri Lanka|Sudáfrica|Sudán|Sudán del Sur|Suecia|Suiza|Surinam|Tailandia|Taiwán|Tanzania|Tayikistán|Timor Oriental|Togo|Tonga|Trinidad y Tobago|Túnez|Turkmenistán|Turquía|Tuvalu|Ucrania|Uganda|Uruguay|Uzbekistán|Vanuatu|Vaticano|Venezuela|Vietnam|Yemen|Yibuti|Zambia|Zimbabue"
    const countrines = raw.split("|");
    return countrines;
}

function getStates(nation = "Venezuela") {
    if (nation !== "Venezuela") {
        return ["otro"]
    }

    const raw = "Amazonas|Anzoátegui|Apure|Aragua|Barinas|Bolívar|Carabobo|Cojedes|Delta Amacuro|Distrito Capital|Falcón|Guárico|Lara|Mérida|Miranda|Monagas|Nueva Esparta|Portuguesa|Sucre|Táchira|Trujillo|Vargas|Yaracuy|Zulia"
    const states = raw.split("|");
    return states;
}

function getMunicipio(state) {

    if (state === "otro") {
        return ["otro"]
    }


    const list = {
        "Distrito Capital": ["Municipio Libertador (Caracas)"],
        Amazonas: ["Municipio Alto Orinoco (La Esmeralda)",
            "Municipio Atabapo (San Fernando de Atabapo)",
            "Municipio Atures (Puerto Ayacucho)",
            "Municipio Autana (Isla Ratón)",
            "Municipio Manapiare (San Juan de Manapiare)",
            "Municipio Maroa (Maroa)",
            "Municipio Río Negro (San Carlos de Río Negro)"],
        Anzoátegui: ["Municipio Anaco (Anaco)",
            "Municipio Aragua (Aragua de Barcelona)",
            "Municipio Bolívar (Barcelona)",
            "Municipio Bruzual (Clarines)",
            "Municipio Cajigal (Onoto)",
            "Municipio Carvajal (Valle de Guanape)",
            "Municipio Diego Bautista Urbaneja (Lechería)",
            "Municipio Freites (Cantaura)",
            "Municipio Guanipa (San José de Guanipa)",
            "Municipio Guanta (Guanta)",
            "Municipio Independencia (Soledad)",
            "Municipio Libertad (San Mateo)",
            "Municipio McGregor (El Chaparro)",
            "Municipio Miranda (Pariaguán)",
            "Municipio Monagas (San Diego de Cabrutica)",
            "Municipio Peñalver (Puerto Píritu)",
            "Municipio Píritu (Píritu)",
            "Municipio San Juan de Capistrano (Boca de Uchire)",
            "Municipio Santa Ana (Santa Ana)",
            "Municipio Simón Rodriguez (El Tigre)",
            "Municipio Sotillo (Puerto La Cruz)"],
        Apure: ["Municipio Achaguas (Achaguas)",
            "Municipio Biruaca (Biruaca)",
            "Municipio Muñoz (Bruzual)",
            "Municipio Páez (Guasdualito)",
            "Municipio Pedro Camejo (San Juan de Payara)",
            "Municipio Rómulo Gallegos (Elorza)",
            "Municipio San Fernando (San Fernando de Apure)"],
        Aragua: ["Municipio Bolívar (San Mateo)",
            "Municipio Camatagua(Camatagua)",
            "Municipio Francisco Linares Alcántara (Santa Rita)",
            "Municipio Girardot (Maracay)",
            "Municipio José Ángel Lamas (Santa Cruz)",
            "Municipio José Félix Ribas (La Victoria)",
            "Municipio José Rafael Revenga (El Consejo)",
            "Municipio Libertador (Palo Negro)",
            "Municipio Mario Briceño Iragorry (El Limón)",
            "Municipio Ocumare de la Costa de Oro (Ocumare de la Costa)",
            "Municipio San Casimiro (San Casimiro)",
            "Municipio San Sebastián (San Sebastián de los Reyes)",
            "Municipio Santiago Mariño (Turmero)",
            "Municipio Santos Michelena (Las Tejerías)",
            "Municipio Sucre (Cagua)",
            "Municipio Tovar (Colonia Tovar)",
            "Municipio Urdaneta (Barbacoas)",
            "Municipio Zamora (Villa de Cura)"],
        Barinas: ["Municipio Alberto Arvelo Torrealba (Sabaneta)",
            "Municipio Andrés Eloy Blanco (El Cantón)",
            "Municipio Antonio José de Sucre (Socopó)",
            "Municipio Arismendi (Arismendi)",
            "Municipio Barinas (Barinas)",
            "Municipio Bolívar (Barinitas)",
            "Municipio Cruz Paredes (Barrancas)",
            "Municipio Ezequiel Zamora (Santa Bárbara)",
            "Municipio Obispos (Obispos)",
            "Municipio Pedraza (Ciudad Bolivia)",
            "Municipio Rojas (Libertad)",
            "Municipio Sosa (Ciudad de Nutrias)"],
        Bolívar: ["Municipio Caroní (Ciudad Guayana)",
            "Municipio Cedeño (Caicara del Orinoco)",
            "Municipio El Callao (El Callao)",
            "Municipio Gran Sabana (Santa Elena de Uairén)",
            "Municipio Heres (Ciudad Bolívar)",
            "Municipio Piar (Upata)",
            "Municipio Raúl Leoni (Ciudad Piar)",
            "Municipio Roscio (Guasipati)",
            "Municipio Sifontes (Tumeremo)",
            "Municipio Sucre (Maripa)",
            "Municipio Padre Pedro Chen (El Palmar)"],
        Carabobo: ["Municipio Bejuma (Bejuma)",
            "Municipio Carlos Arvelo (Güigüe)",
            "Municipio Diego Ibarra (Mariara)",
            "Municipio Guacara (Guacara)",
            "Municipio Juan José Mora (Morón)",
            "Municipio Libertador (Tocuyito)",
            "Municipio Los Guayos (Los Guayos)",
            "Municipio Miranda (Miranda)",
            "Municipio Montalbán (Montalbán)",
            "Municipio Naguanagua (Naguanagua)",
            "Municipio Puerto Cabello (Puerto Cabello)",
            "Municipio San Diego (San Diego)",
            "Municipio San Joaquín (San Joaquín)",
            "Municipio Valencia (Valencia)"],
        Cojedes: ["Municipio Anzoátegui (Cojedes)",
            "Municipio Falcón (Tinaquillo)",
            "Municipio Girardot (El Baúl)",
            "Municipio Lima Blanco (Macapo)",
            "Municipio Pao de San Juan Bautista (El Pao)",
            "Municipio Ricaurte (Libertad)",
            "Municipio Rómulo Gallegos"],
        "Delta Amacuro": ["Municipio Antonio Díaz Curiapo (Curiapo)",
            "Municipio Casacoima (Sierra Imataca)",
            "Municipio Pedernales (Pedernales)",
            "Municipio Tucupita (Tucupita)"],
        Falcón: ["Municipio Acosta (San Juan de los Cayos)",
            "Municipio Bolívar (San Luis)",
            "Municipio Buchivacoa (Capatárida)",
            "Municipio Cacique Manaure (Yaracal)",
            "Municipio Carirubana (Punto Fijo)",
            "Municipio Colina (La Vela de Coro)",
            "Municipio Dabajuro (Dabajuro)",
            "Municipio Democracia (Pedregal)",
            "Municipio Falcón (Pueblo Nuevo)",
            "Municipio Federación (Churuguara)",
            "Municipio Jacura (Jacura)",
            "Municipio Los Taques (Santa Cruz de Los Taques)",
            "Municipio Mauroa (Mene de Mauroa)",
            "Municipio Miranda (Santa Ana de Coro)",
            "Municipio Monseñor Iturriza (Chichiriviche)",
            "Municipio Palmasola (Palmasola)",
            "Municipio Petit (Cabure)",
            "Municipio Píritu (Píritu)",
            "Municipio San Francisco (Mirimire)",
            "Municipio Silva (Tucacas)",
            "Municipio Sucre (La Cruz de Taratara)",
            "Municipio Tocópero (Tocópero)",
            "Municipio Unión (Santa Cruz de Bucaral)",
            "Municipio Urumaco (Urumaco)",
            "Municipio Zamora (Puerto Cumarebo)"],
        Guárico: ["Municipio Esteros de Camaguan(Camaguan)",
            "Municipio Chaguaramas(Chaguaramas)",
            "Municipio El Socorro (El Socorro)",
            "Municipio Francisco de Miranda (Calabozo)",
            "Municipio José Félix Ribas (Tucupido)",
            "Municipio José Tadeo Monagas (Altagracia de Orituco)",
            "Municipio Juan Germán Roscio (San Juan de Los Morros)",
            "Municipio Julián Mellado (El Sombrero)",
            "Municipio Las Mercedes (Las Mercedes)",
            "Municipio Leonardo Infante (Valle de La Pascua)",
            "Municipio Pedro Zaraza (Zaraza)",
            "Municipio Ortíz (Ortíz)",
            "Municipio San Gerónimo de Guayabal (Guayabal)",
            "Municipio San José de Guaribe (San José de Guaribe)",
            "Municipio Santa María de Ipire (Santa María de Ipire)"],
        Lara: ["Municipio Andrés Eloy Blanco (Sanare)",
            "Municipio Crespo (Duaca)",
            "Municipio Iribarren (Barquisimeto)",
            "Municipio Jiménez (Quibor)",
            "Municipio Morán (El Tocuyo)",
            "Municipio Palavecino (Cabudare)",
            "Municipio Simón Planas (Sarare)",
            "Municipio Torres (Carora)",
            "Municipio Urdaneta (Siquisique)"],
        Mérida: ["Municipio Alberto Adriani (El Vigía)",
            "Municipio Andrés Bello (La Azulita)",
            "Municipio Antonio Pinto Salinas (Santa Cruz de Mora)",
            "Municipio Sucre (Lagunillas)",
            "Municipio Tovar (Tovar)",
            "Municipio Tulio Febres Cordero (Nueva Bolivia)",
            "Municipio Zea (Zea)"],
        Miranda: ["Municipio Acevedo (Caucagua)",
            "Municipio Andrés Bello (San José de Barlovento)",
            "Municipio Baruta (Baruta)",
            "Municipio Brión (Higuerote)",
            "Municipio Buroz (Mamporal)",
            "Municipio Carrizal (Carrizal)",
            "Municipio Chacao (Chacao)",
            "Municipio Cristóbal Rojas (Charallave)",
            "Municipio El Hatillo (El Hatillo)",
            "Municipio Guaicaipuro (Los Teques)",
            "Municipio Independencia (Santa Teresa del Tuy)",
            "Municipio Lander (Ocumare del Tuy)",
            "Municipio Los Salias (San Antonio de los Altos)",
            "Municipio Páez (Río Chico)",
            "Municipio Paz Castillo (Santa Lucía)",
            "Municipio Pedro Gual (Cúpira)",
            "Municipio Plaza (Guarenas)",
            "Municipio Simón Bolívar (San Francisco de Yare)",
            "Municipio Sucre (Petare)",
            "Municipio Urdaneta (Cúa)",
            "Municipio Zamora (Guatire)"],
        Monagas: ["Municipio Acosta (San Antonio de Capayacuar)",
            "Municipio Aguasay (Aguasai)",
            "Municipio Bolívar",
            "Municipio Cedeño (Caicara)",
            "Municipio Ezequiel Zamora (Punta de Mata)",
            "Municipio Libertador (Temblador)",
            "Municipio Maturín (Maturín)",
            "Municipio Piar (Aragua)",
            "Municipio Punceres (Quiriquire)",
            "Municipio Santa Bárbara (Santa Bárbara)",
            "Municipio Sotillo (Barrancas del Orinco)",
            "Municipio Uracoa (Uracoa)"],
        "Nueva Esparta": ["Municipio Antolín del Campo (La Plaza de Paraguachí)",
            "Municipio Arismendi (La Asunción)",
            "Municipio Díaz (San Juan Bautista)",
            "Municipio García (El Valle del Espíritu Santo)",
            "Municipio Gómez (Santa Ana)",
            "Municipio Maneiro (Pampatar)",
            "Municipio Marcano (Juan Griego)",
            "Municipio Mariño (Porlamar)",
            "Municipio Península de Macanao (Boca de Río)",
            "Municipio Tubores (Punta de Piedras)",
            "Municipio Villalba (San Pedro de Coche)"],
        Portuguesa: ["Municipio Agua Blanca (Agua Blanca)",
            "Municipio Araure (Araure)",
            "Municipio Esteller (Píritu)",
            "Municipio Guanare (Guanare)",
            "Municipio Guanarito (Guanarito)",
            "Municipio Monseñor José Vicenti de Unda (Chabasquén de Unda)",
            "Municipio Ospino (Ospino)",
            "Municipio Páez (Acarigua)",
            "Municipio Papelón (Papelón)",
            "Municipio San Genaro de Boconoíto (Boconoíto)",
            "Municipio San Rafael de Onoto (San Rafael de Onoto)",
            "Municipio Santa Rosalía (El Playón)",
            "Municipio Sucre (Biscucuy)",
            "Municipio Turén (Villa Bruzual)"],
        Sucre: ["Municipio Andrés Eloy Blanco (Casanay)",
            "Municipio Andrés Mata (San José de Aerocuar)",
            "Municipio Arismendi (Río Caribe)",
            "Municipio Benítez (El Pilar)",
            "Municipio Bermúdez (Carúpano)",
            "Municipio Bolívar (Marigüitar)",
            "Municipio Cajigal (Yaguaraparo)",
            "Municipio Cruz Salmerón Acosta (Araya)",
            "Municipio Libertador (Tunapuy)",
            "Municipio Mariño (Irapa)",
            "Municipio Mejía (San Antonio del Golfo)",
            "Municipio Montes (Cumanacoa)",
            "Municipio Ribero (Cariaco)",
            "Municipio Sucre (Cumaná)",
            "Municipio Valdez (Güiria)"],
        Táchira: ["Municipio Andrés Bello(Cordero)",
            "Municipio Antonio Rómulo Costa (Las Mesas)",
            "Municipio Ayacucho (El Colón)",
            "Municipio Bolívar (San Antonio del Táchira)",
            "Municipio Cárdenas (Táriba)",
            "Municipio Córdoba (Santa Ana de Táchira)",
            "Municipio Fernández Feo (San Rafael del Piñal)",
            "Municipio Francisco de Miranda (San José de Bolívar)",
            "Municipio García de Hevia (La Fría)",
            "Municipio Guásimos (Palmira)",
            "Municipio Independencia (Capacho Nuevo)",
            "Municipio Jáuregui (La Grita)",
            "Municipio José María Vargas (El Cobre)",
            "Municipio Junín (Rubio)",
            "Municipio San Judas Tadeo (Umuquena)",
            "Municipio Libertad (Capacho Viejo)",
            "Municipio Libertador (Abejales)",
            "Municipio Lobatera (Lobatera)",
            "Municipio Michelena (Michelena)",
            "Municipio Panamericano (Coloncito)",
            "Municipio Pedro María Ureña (Ureña)",
            "Municipio Rafael Urdaneta (Delicias)",
            "Municipio Samuel Dario Maldonado (La Tendida)",
            "Municipio San Cristóbal (San Cristóbal)",
            "Municipio Seboruco (Seboruco)",
            "Municipio Simón Rodríguez (San Simon)",
            "Municipio Sucre (Queniquea)",
            "Municipio Torbes (San Josesito)",
            "Municipio Uribante (Pregonero)"],
        Trujillo: ["Municipio Andrés Bello (Santa Isabel)",
            "Municipio Boconó (Boconó)",
            "Municipio Bolívar (Sabana Grande)",
            "Municipio Candelaria (Chejendé)",
            "Municipio Carache (Carache)",
            "Municipio Escuque (Escuque)",
            "Municipio José Felipe Márquez Cañizalez (El Paradero)",
            "Municipio Juan Vicente Campos Elías (Campo Elías)",
            "Municipio La Ceiba (Santa Apolonia)",
            "Municipio Miranda (El Dividive)",
            "Municipio Pampán (Pampán)",
            "Municipio Trujillo (Trujillo)",
            "Municipio Andres Linares (San Lazaro)",
            "Municipio Pampanito (Pampanito)"],
        Vargas: ["Municipio Vargas (La Guaira)"],
        Yaracuy: ["Municipio Arístides Bastidas (San Pablo)",
            "Municipio Bolívar (Aroa)",
            "Municipio Bruzual (Chivacoa)",
            "Municipio Cocorote (Cocorote)",
            "Municipio Independencia (Independencia)"],
        Zulia: ["Municipio Almirante Padilla (El Toro)",
            "Municipio Baralt (San Timoteo)",
            "Municipio Cabimas (Cabimas)",
            "Municipio Catatumbo (Encontrados)",
            "Municipio Colón (San Carlos del Zulia)",
            "Municipio Francisco Javier Pulgar (Pueblo Nuevo-El Chivo)",
            "Municipio Jesús Enrique Losada (La Concepción)",
            "Municipio Jesús María Semprún (Casigua El Cubo)"]
    }
    return list[state];
}

function getBanks(){
    let raw = "BANCO NACIONAL DE CRÉDITO, C.A. BANCO UNIVERSAL.|BANCO PLAZA, C.A., BANCO UNIVERSAL.|BANCO DEL CARIBE C.A., BANCO UNIVERSAL (BANCARIBE).|BANCO SOFITASA BANCO UNIVERSAL, C.A.|DEL SUR BANCO UNIVERSAL, C.A.|BANCO DEL TESORO, C.A., BANCO UNIVERSAL.|BANCO EXTERIOR, C.A., BANCO UNIVERSAL.|BANCO INTERNACIONAL DE DESARROLLO, C.A BANCO UNIVERSAL.|BANCO DE LA FUERZA ARMADA NACIONAL BOLIVARIANA, BANCO UNIVERSAL, C.A. (BANFANB).|BFC BANCO FONDO COMUN, C.A. BANCO UNIVERSAL.|BANPLUS BANCO UNIVERSAL, C.A.|100% BANCO, BANCO UNIVERSAL, C.A.|BANCO PROVINCIAL, S.A. BANCO UNIVERSAL.|BANCO BICENTENARIO, DEL PUEBLO, DE LA CLASE OBRERA, MUJER Y COMUNAS, BANCO UNIVERSAL, C.A.|BANCO DE VENEZUELA, S.A. BANCO UNIVERSAL.|BANCO AGRÍCOLA DE VENEZUELA, C.A.|BANESCO BANCO UNIVERSAL, C.A.|BANCO CARONÍ, C.A., BANCO UNIVERSAL.|MERCANTIL, C.A., BANCO UNIVERSAL.|BANCO ACTIVO C.A., BANCO UNIVERSAL.|VENEZOLANO DE CRÉDITO, S.A., BANCO UNIVERSAL.|BANCAMIGA BANCO UNIVERSAL, C.A.|BANCO NACIONAL DE VIVIENDA Y HABITAT (BANAVIH).|INSTITUTO MUNICIPAL DE CRÉDITO POPULAR (I.M.C.P.).|BANCO INDUSTRIAL DE VENEZUELA C.A.|BANCO DE LA GENTE EMPRENDEDORA (BANGENTE) C.A.|BANCO DE DESARROLLO ECONÓMICO Y SOCIAL DE VENEZUELA (BANDES).|BANCO DE COMERCIO EXTERIOR, C.A. (BANCOEX).|MI BANCO, BANCO MICROFINANCIERO, C.A.|BANCRECER, S.A. BANCO MICROFINANCIERO.|Otro";
    let banks = raw.split("|");
    return banks;
}