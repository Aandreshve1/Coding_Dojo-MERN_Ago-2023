import { useState } from "react";

export const MyList = (props) => {
    const [listaTareas, setListaTareas] = useState([{
                                                        name: "Barrer",
                                                        person: "Juan",
                                                        year: 2,
                                                        checked: true
                                                    },
                                                    {
                                                        name: "Saltar",
                                                        person: "Ricardo",
                                                        year: 3,
                                                        checked: false
                                                    },
                                                    {
                                                        name: "Lavar",
                                                        person: "Carlos",
                                                        year: 4,
                                                        checked: true
                                                    }
                                                ]);
    const [tarea, setTarea] = useState("");
    const [persona, setPersona] = useState("");

    const add = () => {
        var listaTareasTemp = [...listaTareas];
        listaTareasTemp.push(
            {
                name: tarea,
                person: persona,
                year: 5,
                checked: false
            });
        
        setListaTareas(listaTareasTemp);
    }

    const eliminar = (indice) => {
        var listaTareasTemp = listaTareas.filter((item, index) => index != indice);
        setListaTareas(listaTareasTemp);
    }

    const modificarYears = (indice) => {
        var tareObjetoTemporal = {...listaTareas[indice]};
        tareObjetoTemporal.year = 0;

        var listaTareasTemp = [...listaTareas];
        listaTareasTemp[indice] = tareObjetoTemporal;
        setListaTareas(listaTareasTemp);
    } 

    return (
        <div>
            <div>
                <label>Tarea</label>
                <input type="text" value={tarea} onChange={(e) => {setTarea(e.target.value)}}/>

                <label>Persona</label>
                <input type="text" value={persona} onChange={(e) => {setPersona(e.target.value)}}/>

                <button onClick={add}>Agregar</button>
            </div>
            <br />

            {
                listaTareas.map((item, index) => {
                    return <div>
                                <label>{index}</label>
                                <label>La tarea: {item.name}, lo realizará: {item.person} y tiene: {item.year} años</label>
                                <button onClick={() => {eliminar(index)}}>Eliminar</button>
                                <button onClick={() => {modificarYears(index)}}>Poner 0 años</button>
                                <input type="checkbox" checked={item.checked} />
                            </div>
                })
            }
        </div>
    );
};