import { FiThumbsUp } from "react-icons/fi";
import PostImage from "../../assets/post.png";

import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo,
} from "./styles";

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={PostImage} />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/79718740?s=400&u=a81131afdb7fd141923534501830af3a059cc4cf&v=4" />
                    <div>
                        <h4>Marcus Vieira</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS </h4>
                    <p>
                        Projeto feito no curso de html e css no bootcamp da dio
                        do Global avanade...<strong>Saiba Mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp />
                        10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
};

export { Card };
