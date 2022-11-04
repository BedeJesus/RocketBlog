
import { Container, Image, Date, Title, Text } from './styles'

interface Props {
    image?: string
    image_height?: number;
    image_width?: number;
    date: string
    title: string
    text: string
}


export default function BigPost(props: Props) {

    return (
        <Container>

            <Image src={props.image}
                height={props.image_height}
                width={props.image_width}
            />

            <Date>{props.date}</Date>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>

        </Container>
    )

}