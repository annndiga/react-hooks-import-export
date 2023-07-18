import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RockyMountain from "./parks/RockyMountain";


function ColoradoStateParks() {
  howManyParks (); // =>"42 parks!"
  RockyMountain.elevation(); // => "9583 ft"
  return <h1>Colorado State Parks!</h1>;
  
}
  
    console.log(RockyMountain.trees);
// => 'Aspen and Pine'

RockyMountain.wildlife();
// => 'Elk, Bighorn Sheep, Moose'

    export default ColoradoStateParks;