import { useNavigate } from "react-router-dom";
import Banner from "../../assets/banner.png";
import { Container, TextContent, Title, TitleHighlight } from "./style";
import { Header } from "../../components/header";
import Button from "../../components/button";

const Home = () => {

    const navigate = useNavigate();
    const handleClickSingIn = () => navigate('./login');

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>Implemente</TitleHighlight> <br />o seu
                        futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais
                        inovadoras do mundo e encare seu novo desafio
                        profissional, evoluindo em comunidade com os melhores
                        experts.
                    </TextContent>

                    <Button title="Começar agora" variant="secundary" onClick={handleClickSingIn}/>
                </div>
                <div>
                    <img src={Banner} alt="Imagem principal" />
                </div>
            </Container>
        </>
    );
};

export { Home };