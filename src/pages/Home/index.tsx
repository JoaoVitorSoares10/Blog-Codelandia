import { useEffect, useState } from "react";
import sr from 'scrollreveal';
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

interface cardItem {
    title: string, 
    text: string
}

export function Home() {
    useEffect(()=>{
        const config = {
            origin: 'top',
            duration: 1000,
            distance: '50px',
            scale: 1,
            easing: 'ease',
        }
        
        sr().reveal(".Card", config);
    }, [])

    const data:cardItem[] = [
        {   
            title: "Agora é oficial: o Windows 11 está vindo",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
        },
        {
            title: "Tim Berners-Lee vai leiloar código-fonte da web",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        },
        {
            title: "Tem Firefox novo no pedaço e você vai querer migrar",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
        },
        {
            title: "John McAfee, criador do antivírus McAfee, morre",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        },
    ]

    const [currentdata, setCurrentdata] = useState<cardItem[]>(data);

    function handleSearch(search: string):void{
        if(search.length === 0){
            setCurrentdata(data);
        }else{
            let newData:cardItem[] = [] as cardItem[];

            data.forEach((item)=>{
                if(item.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 || item.text.toLowerCase().indexOf(search.toLowerCase()) >= 0){
                   newData.push(item);
                }
            })

            setCurrentdata(newData);
        }
    }

    return (
        <Container>
                <Header
                    onSearch={handleSearch}
                />
                <Content>
                    {currentdata.length === 0 
                    ? <p>Nenhum resultado foi encontrado</p>
                    : currentdata.map((item) =>(
                        <Card 
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </Content>
        </Container>
    );
}