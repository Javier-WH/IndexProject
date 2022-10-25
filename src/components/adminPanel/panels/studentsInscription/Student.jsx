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
import { useEffect, useState } from 'react';
import Message from "../../message/Message";
import checkSubjects from './auxFolder/checkSumbjects';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import { OpenModal } from "../../../modal/Modal";
import Recipe from "./recipe.jsx";

import infoVenezuela from "./auxFolder/getInfo"
import getMunicipios from './auxFolder/getMunicipios';
import Parroquias from "./auxFolder/getParroquias";
import getSubjects from './auxFolder/getSubjects';

export default function Inscription() {

    const [pensum, setPensum] = useState([]);
    const [inscriptionType, setInscriptionType] = useState("")
    const [stdFounded, setStdFounded] = useState(false);
    const [modal, setModal] = useState({ state: false })
    const [openMessage, setOpenMessage] = useState(false);
    const [messageParams, setMessageParams] = useState({
        type: "success",
        message: "Wololooo"
    })
    const [havFacebook, setHavFacebook] = useState(false);
    const [havTwitter, setHavTwitter] = useState(false);
    const [havWhatsapp, setHavWhatsapp] = useState(false);
    const [havTikTok, setHavTikTok] = useState(false);
    const [havInstagram, setHavInstagram] = useState(false);
    const [ci, setCi] = useState("");
    const [haveCi, setHaveCi] = useState(true);
    const [grade, setGrade] = useState("1");
    const [seccion, setSeccion] = useState("A");
    const [period, setPeriodo] = useState("2022");
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
    const [_ci, _setCi] = useState(false);
    const [photos, setPhotos] = useState(false);
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
    const [chessSize, setChessSize] = useState("M");
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
    const [becaName, setBecaName] = useState("")
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

    const handleHavFacebook = event => {
        if (event.target.checked) {
            setFacebook("No tiene");
        } else {
            setFacebook("");
        }
        setHavFacebook(event.target.checked)
    }
    const handleHavTwitter = event => {
        if (event.target.checked) {
            setTwitter("No tiene");
        } else {
            setTwitter("");
        }
        setHavTwitter(event.target.checked)
    }
    const handleHavWhatsapp = event => {
        if (event.target.checked) {
            setWhatsapp("No tiene");
        } else {
            setWhatsapp("");
        }
        setHavWhatsapp(event.target.checked)
    }
    const handleHavTikTok = event => {
        if (event.target.checked) {
            setTikTok("No tiene");
        } else {
            setTikTok("");
        }
        setHavTikTok(event.target.checked)
    }
    const handleHavInstagram = event => {
        if (event.target.checked) {
            setInstagram("No tiene");
        } else {
            setInstagram("");
        }
        setHavInstagram(event.target.checked)
    }

    const handleBecaName = (event) => {
        setBecaName(event.target.value)
    }

    const handleTutorBankAccoun = (event) => {
        setTutorBankAccoun(event.target.value);
    }
    const handleTutorBankAccounType = (event) => {
        setTutorBankAccounType(event.target.value);
    }
    const handleTutorBankAux = (event) => {
        setTutorBankAux(event.target.value);
    }
    const handleTutorBank = (event) => {
        setTutorBank(event.target.value);
    }
    const handleTutorPatriaSrial = (event) => {
        setTutorPatriaSrial(event.target.value);
    }
    const handleTutorPatriaCode = (event) => {
        setTutorPatriaCode(event.target.value);
    }
    const handleTutorAddress = (event) => {
        setTutorAddress(event.target.value);
    }
    const handleTutorEmail = (event) => {
        setTutorEmail(event.target.value);
    }
    const handleTutorPhone = (event) => {
        setTutorPhone(event.target.value);
    }
    const handleTutorInstruction = (event) => {
        setTutorInstruction(event.target.value);
    }
    const handleTutorNationality = (event) => {
        setTutorNationality(event.target.value);
    }
    const handleTutorCi = (event) => {
        setTutorCi(event.target.value);
    }
    const handleTutorLastName = (event) => {
        setTutorLastName(event.target.value);
    }
    const handleTutorName = (event) => {
        setTutorName(event.target.value);
    }
    const handleStudentPatriaSerial = (event) => {
        setStudentPatriaSerial(event.target.value);
    }
    const handleStudentPatriaCode = (event) => {
        setStudentPatriaCode(event.target.value);
    }
    const handleBecas = (event) => {
        setBecas(event.target.checked);
    }
    const handlePC = (event) => {
        setPC(event.target.checked);
    }
    const handleSmarthPhone = (event) => {
        setSmarthPhone(event.target.checked);
    }
    const handleTablet = (event) => {
        setTablet(event.target.checked);
    }
    const handleCanaima = (event) => {
        setCanaima(event.target.checked);
    }
    const handleEmergencyRelation = (event) => {
        setEmergencyRelation(event.target.value);
    }
    const handleEmergencyPhone = (event) => {
        setEmergencyPhone(event.target.value);
    }
    const handleEmergencyName = (event) => {
        setEmergencyName(event.target.value);
    }
    const handleHouseCondition = (event) => {
        setHouseCondition(event.target.value);
    }
    const handleHouseType = (event) => {
        setHouseType(event.target.value);
    }
    const handleFoodAllergies = (event) => {
        setFoodAllergies(event.target.value);
    }
    const handleDrugAllergies = (event) => {
        setDrugAllergies(event.target.value);
    }
    const handleHarth = (event) => {
        setHarth(event.target.checked);
    }
    const handleTension = (event) => {
        setTension(event.target.checked);
    }
    const handleEpilepsia = (event) => {
        setEpilepsia(event.target.checked);
    }
    const handleDiabetes = (event) => {
        setDiabetes(event.target.checked);
    }
    const handleAsma = (event) => {
        setAsma(event.target.checked);
    }
    const handleInflueza = (event) => {
        setInflueza(event.target.checked);
    }
    const handlePregnancyTime = (event) => {
        setPregnancyTime(event.target.value);
    }
    const handleGravidez = (event) => {
        setGravidez(event.target.value);
    }
    const handleFeetSize = (event) => {
        setFeetSize(event.target.value);
    }
    const handlePantsSize = (event) => {
        setPantsSize(event.target.value);
    }
    const handleChessSize = (event) => {
        setChessSize(event.target.value);
    }
    const handleHeight = (event) => {
        setheight(event.target.value);
    }
    const handleWeight = (event) => {
        setWeight(event.target.value);
    }
    const handleWhoLive = (event) => {
        setWhoLive(event.target.value);
    }
    const handleStdAddress = (event) => {
        setStdAddress(event.target.value);
    }
    const handleUrbanizacion = (event) => {
        setUrbanizacion(event.target.value);
    }
    const handleTown = (event) => {
        setTown(event.target.value);
    }
    const handleParroquia = (event) => {
        setParroquia(event.target.value);
    }
    const handleSiblinsNumer = (event) => {
        setSiblinsNumer(event.target.value);
    }
    const handleFatherPhone = (event) => {
        setFatherPhone(event.target.value);
    }
    const handleFatherCi = (event) => {
        setFatherCi(event.target.value);
    }
    const handleFatherLastName = (event) => {
        setFatherLastName(event.target.value);
    }
    const handleFatherName = (event) => {
        setFatherName(event.target.value);
    }
    const handleMotherPhone = (event) => {
        setMotherPhone(event.target.value);
    }
    const handleMotherCi = (event) => {
        setMotherCi(event.target.value);
    }
    const handleLastMotherName = (event) => {
        setMotherLastName(event.target.value);
    }
    const handleMotherName = (event) => {
        setMotherName(event.target.value);
    }
    const handleInstagram = (event) => {
        setInstagram(event.target.value);
    }
    const handleTikTok = (event) => {
        setTikTok(event.target.value);
    }
    const handleWhatsapp = (event) => {
        setWhatsapp(event.target.value);
    }
    const handleTwitter = (event) => {
        setTwitter(event.target.value);
    }
    const handleFacebook = (event) => {
        setFacebook(event.target.value);
    }
    const handleSixGrade = (event) => {
        setSixGrade(event.target.checked);
    }
    const handleCanainaRecipe = (event) => {
        setCanainaRecipe(event.target.checked);
    }
    const handleGradesCertificateCopy = (event) => {
        setGradesCertificateCopy(event.target.checked);
    }
    const handleGradesCertificate = (event) => {
        setGradesCertificate(event.target.checked);
    }
    const handlePhotos = (event) => {
        setPhotos(event.target.checked);
    }
    const handle_ci = (event) => {
        _setCi(event.target.checked);
    }
    const handleBirthActCopy = (event) => {
        setBirthActCopy(event.target.checked);
    }
    const handleBirthAct = (event) => {
        setBirthAct(event.target.checked);
    }
    const handleGender = (event) => {
        setGender(event.target.value);
    }
    const handleMarried = (event) => {
        setMarried(event.target.value);
    }
    const handleNationality = (event) => {
        setNationality(event.target.value);
    }
    const handlePreviusSchool = (event) => {
        setPreviusSchool(event.target.value);
    }
    const handleStudentEmail = (event) => {
        setStudenEmail(event.target.value);
    }
    const handleStudentPhone = (event) => {
        setStudentPhone(event.target.value);
    }
    const handleDate = (event) => {
        setDate(event.target.value);
    }
    const handleLastNames = (event) => {
        setLastNames(event.target.value)
    }
    const handleNames = (event) => {
        setNames(event.target.value)
    }
    const handlePeriod = (event) => {
        setPeriodo(event.target.value);
    }
    const handleHaveCi = (event) => {
      
        setHaveCi(!event.target.checked);
        if (event.target.checked) {
            let number = "99" + getRandom(10);
            setCi(number);
            setModal({
                state: true,
                buttons: 1,
                title: "Advertencia",
                message: `Se ha asignado una cédula provicional, esta cédula provicional puede ser cambiada a futuro cuando obtenga una cédula legal. Por los momentos guarde bien este numero ${number}, ya que es necesario para imprimir la planilla de inscripción`,
                type: "warning"
            })
            setInscriptionType('Nuevo Ingreso');
            setStdFounded(false);
            cleanData();
        } else {
            setCi("");
            setInscriptionType("")
        }
    }
    const handleCi = (event) => {
        setInscriptionType('');
        setStdFounded(false);
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
    const handleSearch = () => {

        fetch(`/student?ci=${ci}`).then(response => response.json())
            .then(student => {

                if (student.error) {
                    setInscriptionType('Nuevo Ingreso')
                    setStdFounded(false);
                    cleanData();
                    return
                }
                setInscriptionType('Estudiante encontrado')
                setStdFounded(student);
                setNation(student.birthCountry);
                setGrade(student.schoolYear);
                setSeccion(student.section);
                setPeriodo(student.period);
                setTutorNation(student.tutorNationality);
                setbirthState(student.birthState);
                setbirthPlace(student.birthPlace);
                setHomeState(student.homeState);
                setMunicipio(student.municipio); ////////////////////////////bug
                setNames(student.names);
                setLastNames(student.lastNames);
                setDate(student.birthdate.split("T")[0]);
                setStudentPhone(student.studentPhone);
                setStudenEmail(student.studenEmail);
                setPreviusSchool(student.previusSchool);
                setNationality(student.nationality);
                setMarried(student.married)
                setGender(student.gender);
                setBirthAct(student.birthAct);
                setBirthActCopy(student.birthActCopy);
                _setCi(student._ci);
                setPhotos(student.photos);
                setGradesCertificate(student.gradesCertificate);
                setGradesCertificateCopy(student.gradesCertificateCopy);
                setCanainaRecipe(student.canainaRecipe);
                setSixGrade(student.sixGrade);
                setFacebook(student.facebook);
                setTwitter(student.twitter);
                setWhatsapp(student.whatsapp);
                setTikTok(student.tikTok);
                setInstagram(student.instagram);
                setMotherName(student.motherName);
                setMotherLastName(student.motherLastName);
                setMotherCi(student.motherCi);
                setMotherPhone(student.motherPhone);
                setFatherName(student.fatherName);
                setFatherLastName(student.fatherLastName);
                setFatherCi(student.fatherCi);
                setFatherPhone(student.fatherPhone);
                setSiblinsNumer(student.siblinsNumber);
                setParroquia(student.parroquia);
                setTown(student.town);
                setUrbanizacion(student.urbanizacion);
                setStdAddress(student.stdAddres);
                setWhoLive(student.whoLive);
                setWeight(student.weight);
                setheight(student.height);
                setChessSize(student.chessSize);
                setPantsSize(student.pantsSize);
                setFeetSize(student.feetSize);
                setGravidez(student.gravidez);
                setPregnancyTime(student.pregnancyTime);
                setInflueza(student.influenza);
                setAsma(student.asma);
                setDiabetes(student.diabetes);
                setEpilepsia(student.epilepsia);
                setTension(student.tension);
                setHarth(student.harth);
                setDrugAllergies(student.drugAllegies);
                setFoodAllergies(student.foodAllegies);
                setHouseType(student.houseType);
                setHouseCondition(student.houseCondition);
                setEmergencyName(student.emergencyName);
                setEmergencyPhone(student.emergencyPhone);
                setEmergencyRelation(student.emergencyRelation);
                setCanaima(student.canaima);
                setTablet(student.tablet);
                setSmarthPhone(student.smarthPhone);
                setPC(student.pc);
                setBecas(student.becas);
                setBecaName(student.becaName);
                setStudentPatriaCode(student.studentPatriaCode);
                setStudentPatriaSerial(student.studentPatriaSerial);
                setTutorName(student.tutorName);
                setTutorLastName(student.tutorLastName);
                setTutorCi(student.tutorCi);
                setTutorNationality(student.tutorNationality);
                setTutorInstruction(student.tutorInstruction);
                setTutorPhone(student.tutorPhone);
                setTutorEmail(student.tutorEmail);
                setTutorAddress(student.tutorAddress);
                setTutorPatriaCode(student.tutorPatriaCode);
                setTutorPatriaSrial(student.tutorPatriaSrial);
                setTutorBank(student.tutorBank);
                setTutorBankAux(student.tutorBankAux);
                setTutorBankAccounType(student.tutorBankAccounType);
                setTutorBankAccoun(student.tutorBankAccoun);
            })

    }

    function checkMissingData() {

        if (ci === "") {
            return "Cédula"
        }
        if (period === "") {
            return "Peíodo escolar"
        }
        if (names === "") {
            return "Nombres del estudiante"
        }
        if (lastNames === "") {
            return "Apellidos del estudiante"
        }
        if (studentPhone === "") {
            return "Teléfono del estudiante"
        }
        if (studenEmail === "") {
            return "Email del estudiante"
        }
        if (previusSchool === "") {
            return "Escuela anterior del estudiante"
        }
        if (birthPlace === "") {
            return "Lugar de nacimiento del estudiante"
        }
        if (facebook === "") {
            return "Facebook"
        }
        if (twitter === "") {
            return "Twitter"
        }
        if (whatsapp === "") {
            return "Whatsapp"
        }
        if (tikTok === "") {
            return "TikTok"
        }
        if (instagram === "") {
            return "Instagram"
        }
        if (motherName === "") {
            return "Nombre de la Madre"
        }
        if (motherLastName === "") {
            return "Apellido de la Madre"
        }
        if (motherCi === "") {
            return "Cédula de la Madre"
        }
        if (motherPhone === "") {
            return "Teléfono de la Madre"
        }
        if (fatherName === "") {
            return "Nombre del Padre"
        }
        if (fatherLastName === "") {
            return "Apellido del Padre"
        }
        if (fatherCi === "") {
            return "Cédula del Padre"
        }
        if (fatherPhone === "") {
            return "Teléfono del Padre"
        }
        if (siblinsNumber === "") {
            return "Número de hermanos"
        }
        if (municipio === "") {
            return "Municipio"
        }
        if (parroquia === "") {
            return "Parroquia"
        }
        if (town === "") {
            return "Población"
        }
        if (urbanizacion === "") {
            return "Urbanización"
        }
        if (stdAddres === "") {
            return "Dirección del Estudiante"
        }
        if (whoLive === "") {
            return "¿Con quien vives?"
        }
        if (weight === "") {
            return "Peso"
        }
        if (height === "") {
            return "Estatura"
        }
        if (chessSize === "") {
            return "Talla de la Camisa"
        }
        if (pantsSize === "") {
            return "Talla del Pantalón"
        }
        if (feetSize === "") {
            return "Talla de los Zapatos"
        }
        if (gravidez === "y" && pregnancyTime === "") {
            return "Tiempo de embarazo"
        }
        if (drugAllegies === "") {
            return "Alergia a algun medicamento"
        }
        if (foodAllegies === "") {
            return "Alergia a algun alimento"
        }
        if (emergencyName === "") {
            return "Nombre de contacto de emergencias"
        }
        if (emergencyPhone === "") {
            return "Teléfono de contacto de emergencias"
        }
        if (emergencyRelation === "") {
            return "Relación con el contacto de emergencias"
        }
        if (becas && becaName === "") {
            return "Nombre de la beca"
        }
        if (studentPatriaCode === "") {
            return "Código del carnet de la patria del estudiante"
        }
        if (studentPatriaSerial === "") {
            return "Serial del carnet de la patria del estudiante"
        }
        if (tutorName === "") {
            return "Nombre del Tutor"
        }
        if (tutorLastName === "") {
            return "Apellido del Tutor"
        }
        if (tutorCi === "") {
            return "Cédula del tutor"
        }
        if (tutorPhone === "") {
            return "Teléfono del tutor"
        }
        if (tutorEmail === "") {
            return "Email del tutor"
        }
        if (tutorAddress === "") {
            return "Dirección del tutor"
        }
        if (tutorPatriaCode === "") {
            return "Código del carnet de la patria del tutor"
        }
        if (tutorPatriaSrial === "") {
            return "Serial del carnet de la patria del tutor"
        }
        if (tutorBank === "Otro" && tutorBankAux === "") {
            return "Banco del tutor"
        }
        if (tutorBankAccoun === "") {
            return "Cuenta bancaria del tutor"
        }
        return "none";
    }

    function cleanData() {

        setGrade("1");
        setSeccion("A");
        setPeriodo("2022");
        setNation("Venezuela");
        setTutorNation("Venezuela");
        setbirthState("Distrito Capital");
        setbirthPlace("");
        setHomeState("Distrito Capital");
        setMunicipio("");
        setNames("");
        setLastNames("");
        setDate("2022-01-01");
        setStudentPhone("");
        setStudenEmail("");
        setPreviusSchool("");
        setNationality("v");
        setMarried("s")
        setGender("f");
        setBirthAct(false);
        setBirthActCopy(false);
        _setCi(false);
        setPhotos(false);
        setGradesCertificate(false);
        setGradesCertificateCopy(false);
        setCanainaRecipe(false);
        setSixGrade(false);
        setFacebook("");
        setTwitter("");
        setWhatsapp("");
        setTikTok("");
        setInstagram("");
        setMotherName("");
        setMotherLastName("");
        setMotherCi("");
        setMotherPhone("");
        setFatherName("");
        setFatherLastName("");
        setFatherCi("");
        setFatherPhone("");
        setSiblinsNumer("");
        setParroquia("");
        setTown("");
        setUrbanizacion("");
        setStdAddress("");
        setWhoLive("");
        setWeight("");
        setheight("");
        setChessSize("");
        setPantsSize("");
        setFeetSize("");
        setGravidez("n");
        setPregnancyTime("");
        setInflueza(false);
        setAsma(false);
        setDiabetes(false);
        setEpilepsia(false);
        setTension(false);
        setHarth(false);
        setDrugAllergies("");
        setFoodAllergies("");
        setHouseType("CasaFamiliar");
        setHouseCondition("Media");
        setEmergencyName("");
        setEmergencyPhone("");
        setEmergencyRelation("");
        setCanaima(false);
        setTablet(false);
        setSmarthPhone(false);
        setPC(false);
        setBecas(false);
        setBecaName("");
        setStudentPatriaCode("");
        setStudentPatriaSerial("");
        setTutorName("");
        setTutorLastName("");
        setTutorCi("");
        setTutorNationality("v");
        setTutorInstruction("3");
        setTutorPhone("");
        setTutorEmail("");
        setTutorAddress("");
        setTutorPatriaCode("");
        setTutorPatriaSrial("");
        setTutorBank("BANCO DE VENEZUELA, S.A. BANCO UNIVERSAL.");
        setTutorBankAux("");
        setTutorBankAccounType("corriente");
        setTutorBankAccoun("");
    }

    function getData() {
        return {
            ci,
            names,
            lastNames,
            birthdate: date,
            studentPhone,
            studenEmail,
            grade,
            seccion,
            period,
            previusSchool,
            birthCountry: nation,
            birthState,
            birthPlace,
            nationality,
            married,
            gender,
            birthAct,
            birthActCopy,
            _ci,
            photos,
            gradesCertificate,
            gradesCertificateCopy,
            canainaRecipe,
            sixGrade,
            facebook,
            twitter,
            tikTok,
            instagram,
            motherName,
            motherLastName,
            motherCi,
            motherPhone,
            fatherName,
            fatherLastName,
            fatherCi,
            fatherPhone,
            siblinsNumber,
            parroquia,
            town,
            urbanizacion,
            stdAddres,
            whoLive,
            weight,
            height,
            chessSize,
            pantsSize,
            feetSize,
            gravidez,
            pregnancyTime,
            influenza,
            asma,
            diabetes,
            epilepsia,
            tension,
            harth,
            drugAllegies,
            foodAllegies,
            houseType,
            houseCondition,
            emergencyName,
            emergencyPhone,
            emergencyRelation,
            canaima,
            tablet,
            smarthPhone,
            pc,
            becas,
            becaName,
            studentPatriaCode,
            studentPatriaSerial,
            tutorName,
            tutorLastName,
            tutorCi,
            tutorNationality,
            tutorInstruction,
            tutorPhone,
            tutorEmail,
            tutorAddress,
            tutorPatriaCode,
            tutorPatriaSrial,
            tutorBank,
            tutorBankAux,
            tutorBankAccounType,
            tutorBankAccoun,
            municipio,
            homeState,
            whatsapp
        }
    }


    function handleSendData() {
        let missingData = checkMissingData();
        if (missingData !== "none") {
            setMessageParams({ type: "error", message: `No ha suministrado el campo: ${missingData}` })
            setOpenMessage(true)
        } else {
            let failedSubjects = checkSubjects(stdFounded);
            if (failedSubjects.length > 0) {
                let subjs = failedSubjects.join(", ");
                setModal({
                    state: true,
                    buttons: 2,
                    title: "Advertencia",
                    message: `Este estudiante tiene materias reprobadas de un periodo anterior, ${subjs}, solo inscribirá las materias reprobadas ¿desea inscribirlo de todos modos?`,
                    type: "warning",
                    handleCancel: () => setModal({ state: false }),
                    handleAccept: () => {
                        sendData()
                        setModal({ state: false })
                    }
                })
            }else{
                sendData()
            }

            function sendData(){
                let data = getData();

                fetch("/student", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*"
                    },
                    body: JSON.stringify(data)
                })
                    .then(answer => answer.json())
                    .then(response => {
                        if (response.error) {
                            setMessageParams({ type: "error", message: response.error })
                            setOpenMessage(true)
                        } else {
                            setMessageParams({ type: "success", message: `Se ha inscrito satisfactoriamente al estudiante` })
                            cleanData();
                            setHaveCi(true);
                            setCi("");
                            setOpenMessage(true)
                            setInscriptionType("");
                        }
    
                    })
                    .catch(err => {
                        setMessageParams({ type: "error", message: `Ocurrió un error, no se ha inscrito al estudiante` })
                        setOpenMessage(true)
                    })
    
            }
          
                ////
        }
    }


    useEffect(() => {
        fetch("/matricula").then(respose => respose.json())
            .then(matricula => { setPensum(matricula) });

    }, [])



    let countryKey = 0;
    return <div id="InscriptionContainer">
        <OpenModal modal={modal} setModal={setModal} />
        <Message open={openMessage} setOpen={setOpenMessage} data={messageParams} />
        <div id="divCi">
            <div id='ciContainer'>
                <TextField id="outlined-basic" label={haveCi ? "Cédula" : "Cédula provicional"} variant="outlined" type="number" autoComplete='off' value={ci} onChange={handleCi} />
                <Tooltip title="Esto genera un numero cédula provicional" arrow>
                    <FormControlLabel control={<Checkbox checked={!haveCi} onChange={handleHaveCi} />} label="No tiene cédula" />
                </Tooltip>
            </div>
            <Button variant="outlined" className={`btnIscrip  ${haveCi ? "" : "invisible"}`} onClick={handleSearch}> <PersonSearchTwoToneIcon /> Buscar</Button>
            <Recipe student={stdFounded} />
        </div>
        <div id="studentDataContainer" className={inscriptionType === "Nuevo Ingreso" || inscriptionType === "Estudiante encontrado" ? "" : "folded"} >
            <div id="inscriptionType">{inscriptionType}</div>
            <TextField id="outlined-basic" label="Nombres" variant="outlined" autoComplete='off' value={names} onChange={handleNames} />
            <TextField id="outlined-basic" label="Apellidos" variant="outlined" autoComplete='off' value={lastNames} onChange={handleLastNames} />
            <div className='auxContainer'>
                <TextField id="outlined-basic" label="Cumpleaños" variant="outlined" type="date" autoComplete='off' value={date} onChange={handleDate} />
                <TextField id="outlined-basic" label="Télefono" variant="outlined" type="number" autoComplete='off' value={studentPhone} onChange={handleStudentPhone} />
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

                <TextField id="outlined-basic" className='period' label="Inicio perído escolar" variant="outlined" autoComplete='off' type="number" value={period} onChange={handlePeriod} />
                <TextField id="outlined-basic" className='period' label="Fin período escolar" variant="outlined" autoComplete='off' value={isNaN(Number.parseInt(period)) ? " " : Number.parseInt(period) + 1} />

            </div>
            <TextField id="outlined-basic" label="Institución Anterior" variant="outlined" autoComplete='off' value={previusSchool} onChange={handlePreviusSchool} />

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
                        infoVenezuela(nation).map(register => {
                            let state = register.estado;
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
                        getMunicipios(birthState).map(municipio => {
                            return <MenuItem key={countryKey++} value={municipio}>{municipio}</MenuItem>
                        })
                    }

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
                    onChange={handleGender}
                    name="gender"
                >
                    <FormControlLabel value="f" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                </RadioGroup>
            </FormControl>

            <div id="requisites" className='list'>
                <FormControlLabel control={<Checkbox checked={birthAct} onChange={handleBirthAct} />} label="Partida de nacimiento original" />
                <FormControlLabel control={<Checkbox checked={birthActCopy} onChange={handleBirthActCopy} />} label="Partida de nacimiento copia" />
                <FormControlLabel control={<Checkbox checked={_ci} onChange={handle_ci} />} label="Cédula de identidad" />
                <FormControlLabel control={<Checkbox checked={photos} onChange={handlePhotos} />} label="Fotos tipo carnet" />
                <FormControlLabel control={<Checkbox checked={gradesCertificate} onChange={handleGradesCertificate} />} label="Certificado de calificaciones original" />
                <FormControlLabel control={<Checkbox checked={gradesCertificateCopy} onChange={handleGradesCertificateCopy} />} label="Certificado de calificaciones copia" />
                <FormControlLabel control={<Checkbox checked={canainaRecipe} onChange={handleCanainaRecipe} />} label="Constancia de no poseer canaima" />
                <FormControlLabel control={<Checkbox checked={sixGrade} onChange={handleSixGrade} />} label="Boleta de promocion de 6to grado" />
            </div>
            <div id="socialNetworking" className='list'>
                <div className="networkingContainer">
                    <TextField id="outlined-basic" label="Facebook" value={facebook} onChange={handleFacebook} variant="outlined" autoComplete='off' InputProps={{ readOnly: havFacebook }} />
                    <FormControlLabel control={<Checkbox checked={havFacebook} onChange={handleHavFacebook} />} label="No tiene Facebook" />
                </div>
                <div className="networkingContainer">
                    <TextField id="outlined-basic" label="Twitter" value={twitter} onChange={handleTwitter} variant="outlined" autoComplete='off' InputProps={{ readOnly: havTwitter }} />
                    <FormControlLabel control={<Checkbox checked={havTwitter} onChange={handleHavTwitter} />} label="No tiene Twitter" />
                </div>
                <div className="networkingContainer">
                    <TextField id="outlined-basic" label="Whatsapp" value={whatsapp} onChange={handleWhatsapp} variant="outlined" autoComplete='off' InputProps={{ readOnly: havWhatsapp }} />
                    <FormControlLabel control={<Checkbox checked={havWhatsapp} onChange={handleHavWhatsapp} />} label="No tiene Whatsapp" />
                </div>
                <div className="networkingContainer">
                    <TextField id="outlined-basic" label="TikTok" value={tikTok} onChange={handleTikTok} variant="outlined" autoComplete='off' InputProps={{ readOnly: havTikTok }} />
                    <FormControlLabel control={<Checkbox checked={havTikTok} onChange={handleHavTikTok} />} label="No tiene TikTok" />
                </div>
                <div className="networkingContainer">
                    <TextField id="outlined-basic" label="Instagram" value={instagram} onChange={handleInstagram} variant="outlined" autoComplete='off' InputProps={{ readOnly: havInstagram }} />
                    <FormControlLabel control={<Checkbox checked={havInstagram} onChange={handleHavInstagram} />} label="No tiene Instagram" />
                </div>
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
                            infoVenezuela().map(register => {
                                let state = register.estado;
                                return <MenuItem key={countryKey++} value={state}>{state}</MenuItem>
                            })
                        }

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
                            getMunicipios(homeState).map(municipio => {
                                return <MenuItem key={countryKey++} value={municipio}>{municipio}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Parroquias</InputLabel>
                    <Select
                        labelId="demo-simple-select-label-municipio"
                        id="demo-simple-select"
                        value={parroquia}
                        label="Municipio"
                        onChange={handleParroquia}
                    >
                        {
                            Parroquias(homeState, municipio).map(parroquia => {
                                return <MenuItem key={countryKey++} value={parroquia}>{parroquia}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Poblacíon</InputLabel>
                    <Select
                        labelId="demo-simple-select-label-camisaPoblacion"
                        id="demo-simple-selectcamisaPoblacion"
                        value={town}
                        label="Estado de nacimiento"
                        onChange={handleTown}
                    >
                        <MenuItem value="Rural">Poblacíon Rural</MenuItem>
                        <MenuItem value="Urbana">Poblacíon Urbana</MenuItem>

                    </Select>
                </FormControl>

                <TextField id="outlined-basic" label="Urbanización" value={urbanizacion} onChange={handleUrbanizacion} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Dirección" value={stdAddres} onChange={handleStdAddress} variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="¿Con quien vives?" value={whoLive} onChange={handleWhoLive} variant="outlined" autoComplete='off' />
            </div>
            <div id="studentBody" className='list'>
                <TextField id="outlined-basic" label="Peso(Kg)" value={weight} onChange={handleWeight} variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Estatura(m)" value={height} onChange={handleHeight} variant="outlined" autoComplete='off' type="number" />

                <div id='chessSize'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Talla de la camisa</InputLabel>
                        <Select
                            labelId="demo-simple-select-label-camisa"
                            id="demo-simple-selectcamisa"
                            value={chessSize}
                            label="Estado de nacimiento"
                            onChange={handleChessSize}
                        >
                            <MenuItem value="XS">XS</MenuItem>
                            <MenuItem value="S">S</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                            <MenuItem value="XXL">XXL</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <TextField id="outlined-basic" label="Talla del pantalon" value={pantsSize} onChange={handlePantsSize} variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Talla de los zapatos" value={feetSize} onChange={handleFeetSize} variant="outlined" autoComplete='off' type="number" />
            </div>
            <div id="gravidez" className='list'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">¿Está enbarazada/o?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={gravidez}
                        onChange={handleGravidez}
                        name="gravidez"
                    >
                        <FormControlLabel value="y" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <TextField id="outlined-basic" className={gravidez === "y" ? "" : "invisible"} label="Tiempo de embarazo (meses)" value={pregnancyTime} onChange={handlePregnancyTime} variant="outlined" autoComplete='off' type="number" />
            </div>

            <div id="medicalData" className='list'>
                <FormControlLabel control={<Checkbox checked={influenza} onChange={handleInflueza} />} label="¿Se vacuna contra la gripe anualmente?" />
                <FormControlLabel control={<Checkbox checked={asma} onChange={handleAsma} />} label="Asma" />
                <FormControlLabel control={<Checkbox checked={diabetes} onChange={handleDiabetes} />} label="Diabetes" />
                <FormControlLabel control={<Checkbox checked={epilepsia} onChange={handleEpilepsia} />} label="Epilepcias" />
                <FormControlLabel control={<Checkbox checked={tension} onChange={handleTension} />} label="Hipertenso" />
                <FormControlLabel control={<Checkbox checked={harth} onChange={handleHarth} />} label="Problemas con el corazón" />
                <TextField className='allergies' id="outlined-basic" value={drugAllegies} onChange={handleDrugAllergies} label="Alergias a Medicamentos" variant="outlined" autoComplete='off' />
                <TextField className='allergies' id="outlined-basic" value={foodAllegies} onChange={handleFoodAllergies} label="Alergias a Alimentos" variant="outlined" autoComplete='off' />
            </div>

            <div id="houseData" className='list'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Tipo de vivienda</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={houseType}
                        onChange={handleHouseType}
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
                <FormControlLabel control={<Checkbox checked={canaima} onChange={handleCanaima} />} label="Canaima" />
                <FormControlLabel control={<Checkbox checked={tablet} onChange={handleTablet} />} label="Tablet" />
                <FormControlLabel control={<Checkbox checked={smarthPhone} onChange={handleSmarthPhone} />} label="Teléfono inteligente" />
                <FormControlLabel control={<Checkbox checked={pc} onChange={handlePC} />} label="Computador de escritorio" />
            </div>

            <div id="documents" className='list'>
                <div id="becaContainer">
                    <FormControlLabel control={<Checkbox checked={becas} onChange={handleBecas} />} label="Tiene becas" />
                    <TextField id="outlined-basic" value={becaName} onChange={handleBecaName} className={becas ? "" : "invisible"} label="Nombre de la beca" variant="outlined" autoComplete='off' />
                </div>
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
                        onChange={handleTutorNationality}
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

                <div id="banckNameContainer">
                    <div id="banckName">
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
                    </div>

                    <TextField id="outlined-basic" className={tutorBank === "Otro" ? "" : "invisible"} value={tutorBankAux} onChange={handleTutorBankAux} label="Nombre del banco" variant="outlined" autoComplete='off' />
                </div>


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

            <div id="subjecsList" className='list'>
                {
                    getSubjects(pensum, grade).map(subject => {
                        return <div className="subjects">{subject}</div>
                    })
                }
            </div>
            <div id="MateriaPendiete" className={`list ${inscriptionType === "Nuevo Ingreso" ? "folded" : ""}`}>
                {
                    checkSubjects(stdFounded).map(subject => {
                        return <div className="subjects">{subject}</div>
                    })
                }
            </div>

            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendData}>Inscribir</Button>
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


function getBanks() {
    let raw = "BANCO NACIONAL DE CRÉDITO, C.A. BANCO UNIVERSAL.|BANCO PLAZA, C.A., BANCO UNIVERSAL.|BANCO DEL CARIBE C.A., BANCO UNIVERSAL (BANCARIBE).|BANCO SOFITASA BANCO UNIVERSAL, C.A.|DEL SUR BANCO UNIVERSAL, C.A.|BANCO DEL TESORO, C.A., BANCO UNIVERSAL.|BANCO EXTERIOR, C.A., BANCO UNIVERSAL.|BANCO INTERNACIONAL DE DESARROLLO, C.A BANCO UNIVERSAL.|BANCO DE LA FUERZA ARMADA NACIONAL BOLIVARIANA, BANCO UNIVERSAL, C.A. (BANFANB).|BFC BANCO FONDO COMUN, C.A. BANCO UNIVERSAL.|BANPLUS BANCO UNIVERSAL, C.A.|100% BANCO, BANCO UNIVERSAL, C.A.|BANCO PROVINCIAL, S.A. BANCO UNIVERSAL.|BANCO BICENTENARIO, DEL PUEBLO, DE LA CLASE OBRERA, MUJER Y COMUNAS, BANCO UNIVERSAL, C.A.|BANCO DE VENEZUELA, S.A. BANCO UNIVERSAL.|BANCO AGRÍCOLA DE VENEZUELA, C.A.|BANESCO BANCO UNIVERSAL, C.A.|BANCO CARONÍ, C.A., BANCO UNIVERSAL.|MERCANTIL, C.A., BANCO UNIVERSAL.|BANCO ACTIVO C.A., BANCO UNIVERSAL.|VENEZOLANO DE CRÉDITO, S.A., BANCO UNIVERSAL.|BANCAMIGA BANCO UNIVERSAL, C.A.|BANCO NACIONAL DE VIVIENDA Y HABITAT (BANAVIH).|INSTITUTO MUNICIPAL DE CRÉDITO POPULAR (I.M.C.P.).|BANCO INDUSTRIAL DE VENEZUELA C.A.|BANCO DE LA GENTE EMPRENDEDORA (BANGENTE) C.A.|BANCO DE DESARROLLO ECONÓMICO Y SOCIAL DE VENEZUELA (BANDES).|BANCO DE COMERCIO EXTERIOR, C.A. (BANCOEX).|MI BANCO, BANCO MICROFINANCIERO, C.A.|BANCRECER, S.A. BANCO MICROFINANCIERO.|Otro";
    let banks = raw.split("|");
    return banks;
}