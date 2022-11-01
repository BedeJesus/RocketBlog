import Button from "../Button"
import { Container, Logo, Menu, Input } from "./styles"

export default function Home() {
    return (
        <Container>

            <Menu>

                <Logo>The Blog.</Logo>

                
                    <Button text="Home" />
                    <Button text="Sobre" />
                    <Button text="Categorias" />
                    <Button text="Contato" />
                

                <Input placeholder="Buscar" />


            </Menu>


        </Container>
    )
}