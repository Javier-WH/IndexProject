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

import "./student.css"
import { useState } from 'react';

export default function Inscription() {
    const [nation, setNation] = useState("Venezuela");
    const [tutorNation, setTutorNation] = useState("Venezuela");

    const handleNation = (event) => {
        setNation(event.target.value);
    };
    const handleTutorNation = (event) => {
        setTutorNation(event.target.value);
    };

    let countryKey = 0;
    return <div id="InscriptionContainer">
        <div id="divCi">
            <TextField id="outlined-basic" label="Cédula" variant="outlined" type="number" />
            <Button variant="outlined">Buscar</Button>
        </div>
        <div id="studentDataContainer">
            <TextField id="outlined-basic" label="Nombres" variant="outlined" autoComplete='off' />
            <TextField id="outlined-basic" label="Apellidos" variant="outlined" autoComplete='off' />
            <div className='auxContainer'>
                <TextField id="outlined-basic" label="Cumpleaños" variant="outlined" type="date" autoComplete='off' />
                <TextField id="outlined-basic" label="Télefono" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" autoComplete='off' />
            </div>
            <TextField id="outlined-basic" label="Institución Anterior" variant="outlined" autoComplete='off' />
            <TextField id="outlined-basic" label="Lugar de nacimiento" variant="outlined" autoComplete='off' />
            <TextField id="outlined-basic" label="Estado de nacimiento" variant="outlined" autoComplete='off' />

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

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Nacionalidad</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="v"
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
                    defaultValue="s"
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
                    defaultValue="f"
                    name="gender"
                >
                    <FormControlLabel value="f" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                </RadioGroup>
            </FormControl>

            <div id="requisites" className='list'>
                <FormControlLabel control={<Checkbox />} label="Partida de nacimiento original" />
                <FormControlLabel control={<Checkbox />} label="Partida de nacimiento copia" />
                <FormControlLabel control={<Checkbox />} label="Cédula de identidad" />
                <FormControlLabel control={<Checkbox />} label="Fotos tipo carnet" />
                <FormControlLabel control={<Checkbox />} label="Certificado de calificaciones original" />
                <FormControlLabel control={<Checkbox />} label="Certificado de calificaciones copia" />
                <FormControlLabel control={<Checkbox />} label="Constancia de no poseer canaima" />
                <FormControlLabel control={<Checkbox />} label="Boleta de promocion de 6to grado" />
            </div>
            <div id="socialNetworking" className='list'>
                <TextField id="outlined-basic" label="Facebook" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Twitter" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Whatsapp" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="TikTok" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Instagram" variant="outlined" autoComplete='off' />
            </div>
            <div id="familly" className='list'>
                <TextField id="outlined-basic" label="Nombres de la Madre" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Cédula de la Madre" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Télefono de la Madre" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Nombres de el Padre" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Cédula de el Padre" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Télefono de el Padre" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Numero de hermanos" variant="outlined" type="number" autoComplete='off' />
            </div>
            <div id="adress" className='list'>
                <TextField id="outlined-basic" label="Estado" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Municipio" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Parroquia" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Poblacíon" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Urbanización" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Dirección" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="¿Con quien vives?" variant="outlined" autoComplete='off' />
            </div>
            <div id="studentBody" className='list'>
                <TextField id="outlined-basic" label="Peso" variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Estatura" variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Talla de la camisa" variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Talla del pantalon" variant="outlined" autoComplete='off' type="number" />
                <TextField id="outlined-basic" label="Talla de los zapatos" variant="outlined" autoComplete='off' type="number" />
            </div>
            <div id="gravidez" className='list'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">¿Está enbarazada/o?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="n"
                        name="gravidez"
                    >
                        <FormControlLabel value="y" control={<Radio />} label="Si" />
                        <FormControlLabel value="n" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <TextField id="outlined-basic" label="Tiempo de embarazo" variant="outlined" autoComplete='off' type="number" />
            </div>

            <div id="medicalData" className='list'>
                <FormControlLabel control={<Checkbox />} label="¿Se vacuna contra la gripe anualmente?" />
                <FormControlLabel control={<Checkbox />} label="Asma" />
                <FormControlLabel control={<Checkbox />} label="Diabetes" />
                <FormControlLabel control={<Checkbox />} label="Epilepcias" />
                <FormControlLabel control={<Checkbox />} label="Hipertenso" />
                <FormControlLabel control={<Checkbox />} label="Problemas con el corazón" />
                <TextField id="outlined-basic" label="Alergias a Medicamentos" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Alergias a Alimentos" variant="outlined" autoComplete='off' />
            </div>

            <div id="houseData" className='list'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Tipo de vivienda</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="CasaFamiliar"
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
                        defaultValue="CasaFamiliar"
                        name="Media"
                    >
                        <FormControlLabel value="Mala" control={<Radio />} label="Mala" />
                        <FormControlLabel value="Media" control={<Radio />} label="Media" />
                        <FormControlLabel value="Buena" control={<Radio />} label="Buena" />

                    </RadioGroup>
                </FormControl>

                <FormControlLabel control={<Checkbox />} label="Servicio Telefónico" />
                <FormControlLabel control={<Checkbox />} label="Servicio de Internet" />
                <FormControlLabel control={<Checkbox />} label="Servicio de Eléctrico" />
                <FormControlLabel control={<Checkbox />} label="Servicio de Agua" />
            </div>

            <div id="emergency" className='list'>
                <TextField id="outlined-basic" label="Nombre del contacto" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Numero de Teléfono" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Relación con el estudiante" variant="outlined" autoComplete='off' />
            </div>

            <div id="resourses" className='list'>
                <FormControlLabel control={<Checkbox />} label="Canaima" />
                <FormControlLabel control={<Checkbox />} label="Tablet" />
                <FormControlLabel control={<Checkbox />} label="Teléfono inteligente" />
                <FormControlLabel control={<Checkbox />} label="Computador de escritorio" />
            </div>

            <div id="documents" className='list'>
                <FormControlLabel control={<Checkbox />} label="Tiene becas" />
                <TextField id="outlined-basic" label="Nombre de la beca" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Código del carnet de la patria" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Serial del carnet de la patria" variant="outlined" type="number" autoComplete='off' />
            </div>

            <div id="tutor" className='list'>
                <TextField id="outlined-basic" label="Nombres del tutor" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Apellidos del tutor" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Cédula del tutor" variant="outlined" type="number" autoComplete='off' />

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Nacionalidad del tutor</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="v"
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
                        defaultValue="v"
                        name="instructionLevel"
                    >
                        <FormControlLabel value="1" control={<Radio />} label="Escuela Basica" />
                        <FormControlLabel value="2" control={<Radio />} label="Bachiller" />
                        <FormControlLabel value="3" control={<Radio />} label="Título Universitário" />
                        <FormControlLabel value="4" control={<Radio />} label="Postgrado" />
                        <FormControlLabel value="5" control={<Radio />} label="Doctorado" />
                        <FormControlLabel value="5" control={<Radio />} label="Ninguno" />
                    </RadioGroup>
                </FormControl>

                <TextField id="outlined-basic" label="Télefono" variant="outlined" type="number" autoComplete='off' />
                <TextField id="outlined-basic" label="Email" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Dirección" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Código del carnet de la patría"  type="number" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Serial del carnet de la patría"  type="number" variant="outlined" autoComplete='off' />

                <TextField id="outlined-basic" label="Banco del representante"  type="number" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Tipo de cuenta" variant="outlined" autoComplete='off' />
                <TextField id="outlined-basic" label="Cuenta Bancaría del Representante"  type="number" variant="outlined" autoComplete='off' />

            </div>

        </div>

    </div>
}

function getCountries() {
    const raw = "Afganistán|Albania|Alemania|Andorra|Angola|Antigua y Barbuda|Arabia Saudita|Argelia|Argentina|Armenia|Australia|Austria|Azerbaiyán|Bahamas|Bangladés|Barbados|Baréin|Bélgica|Belice|Benín|Bielorrusia|Birmania|Bolivia|Bosnia-Herzegovina|Botsuana|Brasil|Brunéi|Bulgaria|Burkina Faso|Burundi|Bután|Cabo Verde|Camboya|Camerún|Canadá|Catar|Chad|Chile|China|Chipre|Colombia|Comoras|Congo|Corea del Norte|Corea del Sur|Costa de Marfil|Costa Rica|Croacia|Cuba|Dinamarca|Dominica|Ecuador|Egipto|El Salvador|Emiratos Árabes Unidos|Eritrea|Eslovaquia|Eslovenia|España|Estados Unidos|Estonia|Esuatini|Etiopía|Filipinas|Finlandia|Fiyi|Francia|Gabón|Gambia|Georgia|Ghana|Granada|Grecia|Guatemala|Guinea|Guinea Ecuatorial|Guinea-Bisáu|Guyana|Haití|Honduras|Hungría|India|Indonesia|Irak|Irán|Irlanda|Islandia|slas Marshall|Islas Salomón|Israel|Italia|Jamaica|Japón|Jordania|Kazajistán|Kenia|Kirguistán|Kiribati|Kosovo|Kuwait|Laos|Lesoto|Letonia|Líbano|Liberia|Libia|Liechtenstein|Lituania|Luxemburgo|Macedonia del Norte|Madagascar|Malasia|Malaui|Maldivas|Malí|Malta|Marruecos|Mauricio|Mauritania|México|Micronesia|Moldavia|Mónaco|Mongolia|Montenegro|Mozambique|Namibia|Nauru|Nepal|Nicaragua|Níger|Nigeria|Noruega|Nueva Zelanda|Omán|Países Bajos|Pakistán|Palaos|Palestina|Panamá|Papúa Nueva Guinea|Paraguay|Perú|Polonia|Portugal|Reino Unido|República Centroafricana|República Checa|República Democrática del Congo|República Dominicana|Ruanda|Rumania|Rusia|Samoa|San Cristóbal y Nieves|San Marino|San Vicente y las Granadinas|Santa Lucía|Santo Tomé y Príncipe|Senegal|Serbia|Seychelles|Sierra Leona|Singapur|Siria|Somalia|Sri Lanka|Sudáfrica|Sudán|Sudán del Sur|Suecia|Suiza|Surinam|Tailandia|Taiwán|Tanzania|Tayikistán|Timor Oriental|Togo|Tonga|Trinidad y Tobago|Túnez|Turkmenistán|Turquía|Tuvalu|Ucrania|Uganda|Uruguay|Uzbekistán|Vanuatu|Vaticano|Venezuela|Vietnam|Yemen|Yibuti|Zambia|Zimbabue"
    const countrines = raw.split("|")
    return countrines;
}