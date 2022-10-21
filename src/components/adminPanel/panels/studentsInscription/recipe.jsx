import { useRef } from "react";
import ReactToPrint from "react-to-print";
import LocalPrintshopTwoToneIcon from '@mui/icons-material/LocalPrintshopTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import logo from "../../../../logo.svg";
import Divider from '@mui/material/Divider';
import "./recipe.css";

export default function InscriptionRecipe(/*{ci}*/) {
    const componentRef = useRef();


    return <div>

        <ReactToPrint
            trigger={() => <Tooltip title="Imprimir Constancia de iscripción" arrow>
                <Button variant="outlined" className='btnIscrip'><LocalPrintshopTwoToneIcon />imprimir</Button>
            </Tooltip>}
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
                        <div className="boxData">{`Nombres: Juan Alberto`}</div>
                        <div className="boxData">{`Apellidos: Flores Martinez`}</div>
                        <div className="boxData">{`Cédula de identidad: V-1547845`}</div>
                        <div className="boxData">{`Genero: Masculino`}</div>
                        <div className="boxData">{`Estado civíl: soltero`}</div>
                        <div className="boxData">{`Fecha de nacimiento: 2003-01-01`}</div>
                        <div className="boxData">{`Pais de nacimiento: Venezuela`}</div>
                        <div className="boxData">{`Estado de nacimiento: Caracas`}</div>
                        <div className="boxData">{`Municipio: Libertador`}</div>
                        <div className="boxData">{`Parroquia: Caricuao`}</div>
                        <div className="boxData">{`Nacionalidad: Venezolano`}</div>
                        <div className="boxData">{`Email: Juan@gmail.com`}</div>
                        <div className="boxData">{`Teléfono: 458775544`}</div>
                        <div className="boxData">{`Institución de procedencia: E.T.C. Luis Razetti`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Datos de la Inscripción</div>
                        <div className="boxData">{`Periodo escolar: 2022-2023`}</div>
                        <div className="boxData">{`Grado: Primer año`}</div>
                        <div className="boxData">{`Sección: A`}</div>
                        <div className="boxData">{`Genero: Masculino`}</div>
                        <div className="boxData">{`Materias pendientes: Ninguna`}</div>
                        <div className="boxData">{`Fecha de nacimiento: 2003-01-01`}</div>
                        <div className="boxData">{`Repitiente: no`}</div>
                        <div className="boxData">{`Materias a repetir: Ninguina`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Redes Sociales</div>
                        <div className="boxData">{`Facebook: Aleska Aleska`}</div>
                        <div className="boxData">{`Whatsapp: 01457854`}</div>
                        <div className="boxData">{`Twitter: No tiene`}</div>
                        <div className="boxData">{`TikTok: No tiene`}</div>
                        <div className="boxData">{`Instagram: alesklc`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información Domiciliaria del estudiante</div>
                        <div className="boxData">{`Estado: Distrito Capital`}</div>
                        <div className="boxData">{`Municipio: Libertador`}</div>
                        <div className="boxData">{`Parroquia: Antimano`}</div>
                        <div className="boxData">{`Población: Urbana`}</div>
                        <div className="boxData">{`Urbanización: Carapita`}</div>
                        <div className="boxData">{`Dirección: Intercomunal de Antimano, Caparipa, frente al perrero de la esquina`}</div>
                        <div className="boxData">{`Acompañantes en la residencia del estudiante: Mi mamá y mis hermanos`}</div>

                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información Antropométrica del estudiante</div>
                        <div className="boxData">{`Peso: 68Kg`}</div>
                        <div className="boxData">{`Estatura: 1.70m`}</div>
                        <div className="boxData">{`Talla de la camisa: L`}</div>
                        <div className="boxData">{`Talla del pantalon: 18`}</div>
                        <div className="boxData">{`Talla de los zapatos: 41`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información Médica del estudiante</div>
                        <div className="boxData">{`Se vacuna contra la gripe cada año: No`}</div>
                        <div className="boxData">{`Padece de asma: No`}</div>
                        <div className="boxData">{`Padece de diabetes: No`}</div>
                        <div className="boxData">{`Padece de problemas del corazón: No`}</div>
                        <div className="boxData">{`Padece de epilepcias: No`}</div>
                        <div className="boxData">{`Alergico a medicamentos: No`}</div>
                        <div className="boxData">{`Alergico a Alimentos: No`}</div>
                    </div>
                    <br />
                    <br />
                    <div className="boxDataContainer">
                        <div className="boxTitle">Gravidez y Lactancia</div>
                        <div className="boxData">{`La estudiaante está enbarazada: No`}</div>
                        <div className="boxData">{`Tiempo de embarazo: Ninguno`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información sobre la vivienda</div>
                        <div className="boxData">{`Tipo de vivienda de la casa: Casa Familiar`}</div>
                        <div className="boxData">{`Condición de la vivienda: Buena`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Contacto para emergencias</div>
                        <div className="boxData">{`Nombre del contacto: Raiza Mata`}</div>
                        <div className="boxData">{`Numero de teléfono: 0424457877885`}</div>
                        <div className="boxData">{`Relación con el estudiante: Madre`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Información sobre las becas</div>
                        <div className="boxData">{`Posee una beca estudiantil: no`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Representante legal del estudiante</div>
                        <div className="boxData">{`Nombres: Raiza Josefina`}</div>
                        <div className="boxData">{`Apellidos: Mata Carreño`}</div>
                        <div className="boxData">{`Cédula: 100545174`}</div>
                        <div className="boxData">{`Naconalidad: Venezolana`}</div>
                        <div className="boxData">{`Pais de nacimiento: Venezuela`}</div>
                        <div className="boxData">{`Nivel de instrucción: Doctorado`}</div>
                        <div className="boxData">{`Teléfono: 0467855545`}</div>
                        <div className="boxData">{`Email: Raiza@gmail.com`}</div>
                        <div className="boxData">{`Dirección: Intercomunal de Antimano, Caparipa, frente al perrero de la esquina`}</div>
                        <div className="boxData">{`Código del carnet de la patria: 6523654654`}</div>
                        <div className="boxData">{`Serial del carnet de la patria: 86745326`}</div>
                    </div>

                    <div className="boxDataContainer">
                        <div className="boxTitle">Cuenta bancaria del representante legal del estudiante</div>
                        <div className="boxData">{`Nombre del banco: Banco de Venezuela`}</div>
                        <div className="boxData">{`Tipo de cuenta: Corriente`}</div>
                        <div className="boxData">{`Numero de cuenta: 1063135135165315350545174`}</div>
                    </div>

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