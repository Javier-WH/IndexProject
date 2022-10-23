import { useRef } from "react";
import ReactToPrint from "react-to-print";
import LocalPrintshopTwoToneIcon from '@mui/icons-material/LocalPrintshopTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import logo from "../../../../logo.svg";
import Divider from '@mui/material/Divider';
import "./recipe.css";



export default function InscriptionRecipe({ student }) {
   
    const componentRef = useRef();

    if(student === false){
        return <h1></h1>
    }

    function getSchoolYear(){
        switch (student.schoolYear) {
            case 1:
                return "Primer año"
            case 2:
                return "Segundo año"
            case 3:
                return "Tercer año"
            case 4:
                return "Cuarto año"
            case 5:
                return "Quinto año"
        
            default:
                return "Indefinido"
        }
    }

    function getTutorInstruction(){
        switch (student.tutorInstruction) {
            case 1:
                return "Escuela Básica"
            case 2:
                return "Bachiller"
            case 3:
                return "Título Universitário"
            case 4:
                return "Postgrado"
            case 5:
                return "Doctorado"
        
            default:
                return "Ninguno"
        }
    }

    return <div>
        <ReactToPrint
            trigger={() => {
                return <Tooltip title="Imprimir Constancia de iscripción" arrow>
                    <Button variant="outlined" className={`btnIscrip`}><LocalPrintshopTwoToneIcon />imprimir</Button>
                </Tooltip>
            }
            }
            content={() => componentRef.current}
        />
        <div id="hideContainer">
            <div id="print" ref={componentRef}>
                <div id="recipeTitleContainerLogo">
                    <img src={logo} alt="" id="recipeLogo" />
                    <div id="recipetitleContainer">
                        <div id="recipeTitle"> ESCUELA TÉCNICA COMERCIAL LUIS RAZETTI</div>
                        <div id="recipeSubTitle"> INSCRIPCION ONLINE - PERIODO ESCOLAR <span id="recipePeriodo">2022-2023</span></div>
                    </div>
                </div>
                <Divider />
                <div id="recipeDataContainer">

                    <div className="boxDataContainer">
                        <div className="boxTitle">Datos del estudiante</div>
                        <div className="boxData">{`Nombres: ${student.names}`}</div>
                        <div className="boxData">{`Apellidos: ${student.lastNames}`}</div>
                        <div className="boxData">{`Cédula de identidad: ${student.ci}`}</div>
                        <div className="boxData">{`Genero: ${student.gender === "f" ? "Femenino": "Masculino"}`}</div>
                        <div className="boxData">{`Estado civíl: ${student.married === "s"? "soltero" : student.married === "C" ? "casado" : "divorciado"}`}</div>
                        <div className="boxData">{`Fecha de nacimiento: ${student.birthdate.split("T")[0]}`}</div>
                        <div className="boxData">{`Pais de nacimiento: ${student.birthCountry}`}</div>
                        <div className="boxData">{`Estado de nacimiento: ${student.birthState}`}</div>
                        <div className="boxData">{`Municipio: ${student.municipio}`}</div>
                        <div className="boxData">{`Parroquia: ${student.parroquia}`}</div>
                        <div className="boxData">{`Nacionalidad: ${student.nationality === "v" ? "Venezolano" : "Extrangero"}`}</div>
                        <div className="boxData">{`Email: ${student.studenEmail}`}</div> 
                        <div className="boxData">{`Teléfono: ${student.studentPhone}`}</div>
                        <div className="boxData">{`Institución de procedencia: ${student.previusSchool}`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Datos de la Inscripción</div>
                        <div className="boxData">{`Periodo escolar: ${student.period} - ${Number.parseInt(student.period) + 1}`}</div>
                        <div className="boxData">{`Grado: ${getSchoolYear()}`}</div>
                        <div className="boxData">{`Sección: ${student.section}`}</div>
                        <div className="boxData">{`Materias pendientes: Ninguna`}</div>
                        <div className="boxData">{`Repitiente: no`}</div>
                        <div className="boxData">{`Materias a repetir: Ninguina`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Redes Sociales</div>
                        <div className="boxData">{`Facebook: ${student.facebook}`}</div>
                        <div className="boxData">{`Whatsapp: ${student.whatsapp}`}</div>
                        <div className="boxData">{`Twitter: ${student.twitter}`}</div>
                        <div className="boxData">{`TikTok: ${student.tiktok}`}</div>
                        <div className="boxData">{`Instagram: ${student.instagram}`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información Domiciliaria del estudiante</div>
                        <div className="boxData">{`Estado: ${student.homeState}`}</div>
                        <div className="boxData">{`Municipio: ${student.municipio}`}</div>
                        <div className="boxData">{`Parroquia: ${student.parroquia}`}</div>
                        <div className="boxData">{`Población: ${student.town}`}</div>
                        <div className="boxData">{`Urbanización: ${student.urbanizacion}`}</div>
                        <div className="boxData">{`Dirección: ${student.stdAddres}`}</div>
                        <div className="boxData">{`Acompañantes en la residencia del estudiante: ${student.whoLive}`}</div>

                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información Antropométrica del estudiante</div>
                        <div className="boxData">{`Peso: ${student.weight} Kilogramos`}</div>
                        <div className="boxData">{`Estatura: ${student.height} metros`}</div>
                        <div className="boxData">{`Talla de la camisa: ${student.chessSize}`}</div>
                        <div className="boxData">{`Talla del pantalon: ${student.pantsSize}`}</div>
                        <div className="boxData">{`Talla de los zapatos: ${student.feetSize}`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información Médica del estudiante</div>
                        <div className="boxData">{`Se vacuna contra la gripe cada año: ${student.influenza ? "Si" : "No"}`}</div>
                        <div className="boxData">{`Padece de asma: ${student.asma ? "Si" : "No"}`}</div>
                        <div className="boxData">{`Padece de diabetes: ${student.diabetes ? "Si" : "No"}`}</div>
                        <div className="boxData">{`Padece de problemas del corazón: ${student.harth ? "Si" : "No"}`}</div>
                        <div className="boxData">{`Padece de epilepcias: ${student.epilepsia ? "Si" : "No"}`}</div>
                        <div className="boxData">{`Alergico a medicamentos: ${student.drugAllegies}`}</div>
                        <div className="boxData">{`Alergico a Alimentos: ${student.foodAllegies}`}</div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                   
                    <div className="boxDataContainer">
                        <div className="boxTitle">Gravidez y Lactancia</div>
                        <div className="boxData">{`La estudiaante está enbarazada: ${student.gravidez === "n" ? "No" : "Si"}`}</div>
                        <div className="boxData">{`Tiempo de embarazo: ${student.pregnancyTime === ""? "No está enbarazada" : student.pregnancyTime}`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información sobre la vivienda</div>
                        <div className="boxData">{`Tipo de vivienda de la casa: ${student.houseType}`}</div>
                        <div className="boxData">{`Condición de la vivienda: ${student.houseCondition}`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Contacto para emergencias</div>
                        <div className="boxData">{`Nombre del contacto: ${student.emergencyName}`}</div>
                        <div className="boxData">{`Numero de teléfono: ${student.emergencyPhone}`}</div>
                        <div className="boxData">{`Relación con el estudiante: ${student.emergencyRelation}`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información sobre las becas</div>
                        <div className="boxData">{`Posee una beca estudiantil: ${student.becaName === "" ? "No posee ninguna beca" : student.becaName}`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Representante legal del estudiante</div>
                        <div className="boxData">{`Nombres: ${student.tutorName}`}</div>
                        <div className="boxData">{`Apellidos: ${student.tutorLastName}`}</div>
                        <div className="boxData">{`Cédula: ${student.tutorCi}`}</div>
                        <div className="boxData">{`Naconalidad: ${student.tutorNationality === "v"? "Venezolano" : "Extrangero"}`}</div>
                        <div className="boxData">{`Nivel de instrucción: ${getTutorInstruction()}`}</div>
                        <div className="boxData">{`Teléfono: ${student.tutorPhone}`}</div>
                        <div className="boxData">{`Email: ${student.tutorEmail}`}</div>
                        <div className="boxData">{`Dirección: ${student.tutorAddress}`}</div>
                        <div className="boxData">{`Código del carnet de la patria: ${student.tutorPatriaCode}`}</div>
                        <div className="boxData">{`Serial del carnet de la patria: ${student.tutorPatriaSrial}`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Cuenta bancaria del representante legal del estudiante</div>
                        <div className="boxData">{`Nombre del banco: ${student.tutorBank}`}</div>
                        <div className="boxData">{`Tipo de cuenta: ${student.tutorBankAccounType}`}</div>
                        <div className="boxData">{`Numero de cuenta: ${student.tutorBankAccoun}`}</div>
                    </div>

                    <div className="boxDataContainer boxSubjectContaainer">
                        <div className="boxTitle">Materias inscritas</div>

                        {Object.keys(student.subjects).map(subject=>{
                             return <div className="boxData">{subject}</div>
                        })}
                    
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="boxDataContainer">
                        <div className="boxTitle">Recaudos</div>
                        <div className="boxDataOpt">Esta ficha solo debe ser llenada por el personal administrativo</div>

                        <div id="optFlex">

                            <div className="boxCheck">
                                <div className="boxData">Partida de nacimiento</div>
                                <div className="optCheck">
                                    <input type="checkbox" name="" id="" /> Si
                                    <input type="checkbox" name="" id="" /> No
                                </div>
                            </div>

                            <div className="boxCheck">
                                <div className="boxData">Fotos Carnet</div>
                                <div className="optCheck">
                                    <input type="checkbox" name="" id="" /> Si
                                    <input type="checkbox" name="" id="" /> No
                                </div>
                            </div>

                            <div className="boxCheck">
                                <div className="boxData">Certificado de calificaciones</div>
                                <div className="optCheck">
                                    <input type="checkbox" name="" id="" /> Si
                                    <input type="checkbox" name="" id="" /> No
                                </div>
                            </div>

                            <div className="boxCheck">
                                <div className="boxData">Certificado de calificaciones copia</div>
                                <div className="optCheck">
                                    <input type="checkbox" name="" id="" /> Si
                                    <input type="checkbox" name="" id="" /> No
                                </div>
                            </div>

                            <div className="boxCheck">
                                <div className="boxData">Certificado de salud</div>
                                <div className="optCheck">
                                    <input type="checkbox" name="" id="" /> Si
                                    <input type="checkbox" name="" id="" /> No
                                </div>
                            </div>

                            <div className="boxCheck">
                                <div className="boxData">Constancia de no poseer canaima</div>
                                <div className="optCheck">
                                    <input type="checkbox" name="" id="" /> Si
                                    <input type="checkbox" name="" id="" /> No
                                </div>
                            </div>

                            <div className="boxCheck">
                                <div className="boxData">Boleta de promoción de 6to grado</div>
                                <div className="optCheck">
                                    <input type="checkbox" name="" id="" /> Si
                                    <input type="checkbox" name="" id="" /> No
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">ADVERTENCIAS</div>
                        <div className="boxData">1 - Al hacer la inscripción en este plantel, representantes y estudiantes se comprometen formalmente a
                            acatar todas las disposiciones internas presentadas enel Proyecto Educativo Integral Comunitatio (PECI) y el reglamento interno</div>
                        <div className="boxData">2 - El representante se compromete a participar en la reunión de la (sociedad) de padres y representantes, asi
                            como acudir a aquellas citaciones que tengan relación con su representado</div>
                        <div className="boxData">3 - La responsabilidad del plantel con sus estudiantes se limita a las actividades escolares y aquellas otras que, de acuerdo
                            con los representantes, organice el plantel para el mejor logro de los objetivos educativos propuestos. La dirección no se hace responsable del estudiante
                            que no entra al plantel o se ausenta sin permiso</div>
                        <div className="boxData">4 - No se considera a un estudiante legalmente inscrito mientras no haya cumplido con todos los requisitos exigidos por la inscripción</div>
                        <div id="singsBox">
                            <div className="sing">
                                <div>______________________</div>
                                <div>Padre o Representante</div>
                            </div>
                            <div className="sing">
                                <div>______________________</div>
                                <div>Personal Revisor</div>
                            </div>
                            <div className="sing">
                                <div>______________________</div>
                                <div>Director</div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>

    </div>





}