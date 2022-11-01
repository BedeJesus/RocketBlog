import { Buttonn } from "./styles"

interface Text{
    text:string;
}

export default function Button(props:Text) {

    return (
        <>

            <Buttonn>
                {props.text}
            </Buttonn>

        </>


    )
}