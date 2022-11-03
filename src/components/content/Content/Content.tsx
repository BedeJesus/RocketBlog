import Post from "../Post/Post";
import post_1 from '../../../assets/post-1.png'
import { Block, Container, SidePost } from "./styles";


export default function Content() {

    return (
        <Container>

            <Block>

                <Post
                    image={post_1}
                    image_height={342.43}
                    image_width={569}
                    date="Janeiro 04, 2022"
                    title="Começando no ReactJS em 2022"
                    text="Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Nibh nibh eu in aliquet ut 
                 adipiscing neque. Sed volutpat aenean sit vitae,
                 sed tristique nibh nibh eu in aliquet ut 
                 adipiscing neque. Sed volutpat aenean sit vitae,
                 sed tristique. Sed volutpat aenean."
                />

                <SidePost>

                    <Post

                        date="Janeiro 04, 2022"
                        title="Conheça as principais técnicas para 
                        conseguir uma vaga internacional em programação"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nibh nibh eu in aliquet ut adipiscing neque. 
                        Sed volutpat aenean sit vitae, sed tristique."
                    />

                    <Post

                        date="Janeiro 04, 2022"
                        title="Veja a evolução do Front-end na prática"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nibh nibh eu in aliquet ut adipiscing neque. "
                    />

                </SidePost>

            </Block>



        </Container>
    )

}