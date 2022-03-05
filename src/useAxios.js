import { useState } from "react"
import axios from "axios";
import uuid from "uuid";


const useAxios = (baseUrl) => {
    const [cards, setCards] = useState([])

    const addCard = async (end_point='') => {
        const url = baseUrl+end_point
        const response = await axios.get(
            url
          );
          setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }
    return [cards, addCard]
}

export default useAxios;