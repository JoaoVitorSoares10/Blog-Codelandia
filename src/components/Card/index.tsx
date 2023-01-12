import { useState } from "react";
import HeartIcon from "../../assets/images/heart.svg";
import FilledHeartIcon from "../../assets/images/filled_heart.svg";
import { CardData, CardInfo, Container } from "./styles";

interface CardProps {
    title: string, 
    text: string
}

export function Card({title, text}:CardProps){
    const [isFavorited, setIsFavorited] = useState(false);

    function handleFavorited():void{
        setIsFavorited(!isFavorited);
    }

    return(
        <Container className="Card">
            <CardInfo>
                <p>02 de Julho de 2021</p>
                <img onClick={handleFavorited} src={isFavorited ? FilledHeartIcon : HeartIcon} alt=""/>      
            </CardInfo>
            <CardData>
                <h2>{title}</h2>
                <article>{text}</article>
            </CardData>
        </Container>
    );
}