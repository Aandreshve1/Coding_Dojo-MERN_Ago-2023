import { useState } from "react";
import Contador from "./components/contador/contador";
import MyEjecutor from "./components/myEjecutor/myEjecutor";
import PersonCard from "./components/personCard/personCard";
import Pokemon from "./components/pokemon/pokemon";
import { QueHaceres } from "./components/queHaceres/queHaceres";
import { CallApi } from "./components/callApi/callApi";
import { CallApiAxios } from "./components/callApiAxios/callApiAxios";
import { PokemonApi } from "./components/pokemonApi/pokemonApi";
import { MyList } from "./components/myLista/myList";

const App = () => {
    //const [number, setNumber] = useState(0);

    return (
      <div>

        {/*<MyList></MyList>*/}
        {/*<PokemonApi></PokemonApi>*/}
        {/*<CallApiAxios></CallApiAxios>*/}
        {/*<CallApi></CallApi>*/}
        {/*<QueHaceres></QueHaceres>*/}
        {/*El numero es {number}
        <Contador numero={number} metodoNumber={setNumber}></Contador>*/}
        {/*<Pokemon></Pokemon>*/}
      </div>
    );
}

export default App;