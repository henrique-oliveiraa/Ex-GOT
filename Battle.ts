
import { House1 } from "./House1";
import { House2 } from "./House2";
import { House3 } from "./House3";
import { House4 } from "./House4";
import { House5 } from "./House5";




const daknessHouse = new House1("Stark","Winter is comming",1000,5,20000)
const lightOfHouse = new House2("Tyrion Lannister","Never forget what you are, the rest of the world will not",5000,4,10000)
const whatherOfHouse = new House3(" Lannisters","A Lannister always pays his debts",4000,6,40000)
const flameOfHouse = new House4("Cersei Lannister","When you play the game of thrones, you win or you die",6000,5,70000)
const House = new House5("Melisandre","The night is dark and full of terrors! ",7000,5<5000)

function battleOFtheHouses(
  darknessHouse: number,
  lightOfHouse: number,
  whatherOfHouse: number,
  flameOfHouse: number,
  comunHouse: number
): void {
  let phantomNumber: number = 0;
  let index: number;
  let armyNumber: Array<number> = [
    darknessHouse,
    lightOfHouse,
    whatherOfHouse,
    flameOfHouse,
    comunHouse,
  ];

  for (let i = 1; i < armyNumber.length; i++) {
    phantomNumber = armyNumber[i];
          index = i;

    while (index > 0 && armyNumber[index - 1] > phantomNumber) {
      armyNumber[index] = armyNumber[index - 1];
          index--;
    }
    armyNumber[index] = phantomNumber;
  }
         console.log(
    `The winner of the battle has won with the army number of ${armyNumber[5]}`
  );
}



battleOFtheHouses(
  darknessHouse.quantidadeSoldados,
  lightOfHouse.quantidadeSoldados,
  whatherOfHouse.quantidadeSoldados,
  flameOfHouse.quantidadeSoldados,
  comunHouse.quantidadeSoldados,
);



