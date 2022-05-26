import React, {useState, useEffect} from "react"

import FeaturedPost from "../../components/featured-post";
import PostList from "../../components/post-list";

const mock = [
    {
        image: "https://i.pinimg.com/originals/10/6e/65/106e6554e445f91c2847ef7daffb0b17.jpg",
        date: "July 24, 2020",
        title: "Postagem",
        description: "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Aenean aliquam molestie leo, vitae iaculis nisl.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
    },
    
    {
        image: "https://images.hdqwalls.com/download/minimalist-landscape-to-1440x900.jpg",
        date: "July 22, 2020",
        title: "Meu Post",
        description: "Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Manduma pindureta quium dia nois paga.Paisis, filhis, espiritis santis.Quem manda na minha terra sou euzis!",
    },

    {
        image: "https://i.pinimg.com/originals/af/0d/7c/af0d7cb8d24f37fdd384317d929fcefd.jpg",
        date: "July 20, 2020",
        title: "Titulo de teste",
        description: "Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Aenean aliquam molestie leo, vitae iaculis nisl.",
    },
    {
        image: "https://steamuserimages-a.akamaihd.net/ugc/964233665630566597/B5B0BA5924C58DD388C85A7EF91FE4D4BFBC4DB3/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        date: "July 12, 2020",
        title: "Conclusão",
        description: "Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Aenean aliquam molestie leo, vitae iaculis nisl.",
    }
]

export default function Home() {

    const [posts, setPosts] = useState(mock);

    async function getPosts() {}

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            {posts && posts.length > 0 && <FeaturedPost post={posts[0]} />}

            <PostList posts={posts} />
        </div>
    );
}