
import { Container, Date, Title, Text } from './styles'

interface Props {
    date: string
    title: string
    text: string
}


export default function SidePost(props: Props) {

    return (
        <Container>

            <Date>{props.date}</Date>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>

        </Container>
    )

}