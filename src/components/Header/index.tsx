import { useState } from 'react';
import SearchIcon from '../../assets/images/search.svg';
import { Container, Content, SearchBox, TitleBox } from "./styles";

interface HeaderProps {
    onSearch: (search: string) => void;
}

export function Header({onSearch}:HeaderProps){
    const [search, setSearch] = useState("");

    return(
        <Container>
            <Content>
                <TitleBox>
                    <h1>Codelândia</h1>
                    <a href="/">blog</a>
                </TitleBox>
                <SearchBox>
                    <img onClick={()=>onSearch(search)} src={SearchIcon} alt=""/>
                    <input onKeyPress={(e)=>e.key === 'Enter' && onSearch(search)} onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="Pesquisar no blog"/>
                </SearchBox>
            </Content>
        </Container>
    );
}