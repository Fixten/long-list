import { ItemList } from "../ItemList";

const getRandomCount = () => Math.round(Math.random() * 10);

const getArrayFromNumber = (number: number): null[] =>
  new Array(number).fill(null);

export const getListItems = (): ItemList =>
  getArrayFromNumber(10000).map((v, nodeIndex) => ({
    node: (
      <>
        {getArrayFromNumber(getRandomCount()).map((v, iitemIndex) => (
          <p key={iitemIndex}>Test row № {iitemIndex}</p>
        ))}
      </>
    ),
    id: nodeIndex,
  }));
