import Button from "../Button"
import { Container, Menu, Input, Buttons, Content, Title, SubTitle, Text, Image, InputWrap, MagGlass, More, MoreText } from "./styles"
import Photo from '../../../assets/featured-image.png'
import Logo from '../../../assets/logo.svg'
import Search from '../../../assets/search.svg'
import Arrow from '../../../assets/arrow-right.svg'

export default function Home() {
    return (
        <Container>
            <Menu>

                <Image src={Logo} />

                <Buttons>
                    <Button text="Home" />
                    <Button text="Sobre" />
                    <Button text="Categorias" />
                    <Button text="Contato" />
                </Buttons>

                <InputWrap>
                    <Input placeholder="Buscar" />
                    <MagGlass><Image src={Search} /></MagGlass>
                </InputWrap>

            </Menu>

            <Content>

                <Text>
                    <Title>
                        Veja o guia definitivo para conquistar
                        seus objetivos como DEV em 2022
                    </Title>

                    <SubTitle>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.<br></br> Nibh nibh eu in aliquet
                        ut adipiscing neque. Sed volutpat aenean
                        sit vitae, sed tristique placerat hac.
                    </SubTitle>

                    <More>
                        <MoreText>Veja mais</MoreText>
                        <Image src={Arrow} />
                    </More>

                </Text>

                <Image src={Photo} />

            </Content>

        </Container>
    )
}