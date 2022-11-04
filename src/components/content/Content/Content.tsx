import Post from "./Posts/Big Post/BigPost";
import SidePost from "./Posts/Side Post/SidePost";
import SmallPost from "./Posts/Small Post/SmallPost";
import post_1 from '../../../assets/post-1.png'
import post_2 from '../../../assets/post-2.png'
import post_3 from '../../../assets/post-3.png'
import post_4 from '../../../assets/post-4.png'
import { Block, Container, Side,SmallBlock } from "./styles";


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

                <Side>

                    <SidePost

                        date="Janeiro 04, 2022"
                        title="Conheça as principais técnicas para 
                        conseguir uma vaga internacional em programação"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nibh nibh eu in aliquet ut adipiscing neque. 
                        Sed volutpat aenean sit vitae, sed tristique."
                    />

                    <SidePost

                        date="Janeiro 04, 2022"
                        title="Veja a evolução do Front-end na prática"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nibh nibh eu in aliquet ut adipiscing neque. "
                    />

                </Side>

            </Block>

            <SmallBlock>

                <SmallPost
                    image={post_2}
                    image_height={259.57}
                    image_width={370}
                    date="Janeiro 04, 2022"
                    title="10 dicas para conseguir a vaga desejada"
                    text="Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Nibh nibh eu in aliquet ut 
                    adipiscing neque. Sed volutpat aenean sit 
                    vitae, sed tristique. "
                />

                <SmallPost
                    image={post_3}
                    image_height={259.57}
                    image_width={370}
                    date="Janeiro 04, 2022"
                    title="Deixe seu código mais semântico com essas dicas"
                    text="Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Nibh nibh eu in aliquet ut 
                    adipiscing neque. Sed volutpat aenean sit 
                    vitae, sed tristique."
                />

                <SmallPost
                    image={post_4}
                    image_height={259.57}
                    image_width={370}
                    date="Janeiro 04, 2022"
                    title="Use essas dicas nas suas aplicações mobile"
                    text="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Nibh 
                    nibh eu in aliquet ut adipiscing 
                    neque. Sed volutpat aenean sit 
                    vitae, sed tristique."
                />



            </SmallBlock>



        </Container>
    )

}