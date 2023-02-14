import Card from './Card'
import TestimonialCard from './TestimonialCard'
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";

const menus = [
    {
        title: "Greek Salad",
        price: 12.99,
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        getImageSrc: () => require("../images/menu1.jpg"),
    },
    {
        title: "Bruchetta",
        price: 5.99,
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        getImageSrc: () => require("../images/menu2.jpg"),
    },
    {
        title: "Lemon Dessert",
        price: 5.00,
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../images/menu3.jpg"),
    },
];

const testimonials = [
    {
        rating: "Greek Salad",
        name: 12.99,
        review:
            "Mollit magna nulla ullamco elit quis deserunt mollit ut non proident consequat cupidatat. Cillum enim irure et veniam dolore sit proident in exercitation qui et amet. Exercitation adipisicing cillum elit esse anim dolore pariatur. Magna laborum aliquip pariatur officia velit fugiat proident adipisicing Lorem eu culpa velit enim consectetur. ",
        // getImageSrc: () => require(""),
    },
    {
        rating: "Bruchetta",
        name: 5.99,
        review:
            "Incididunt officia qui amet ipsum sint incididunt culpa ut consequat enim id. Ex tempor commodo consectetur do est nisi in Lorem ullamco cillum. Fugiat adipisicing sint ipsum quis sit cillum cillum ut nulla exercitation. Do esse nostrud incididunt duis irure.",
        // getImageSrc: () => require(""),
    },
    {
        rating: "Lemon Dessert",
        name: 5.00,
        review:
            "Cillum nisi minim ipsum voluptate aute aute labore ea. Commodo dolore occaecat minim elit fugiat do veniam excepteur adipisicing sint eu. Eu exercitation veniam duis duis voluptate mollit veniam proident dolor proident labore voluptate sit ex.",
        // getImageSrc: () => require(""),
    },
    {
        rating: "Lemon Dessert",
        name: 5.00,
        review:
            "Ea aute aute aute elit tempor adipisicing consectetur ea. Et ex exercitation incididunt non aliqua ipsum nisi dolore consequat laborum commodo voluptate. Minim eiusmod id dolore consectetur cupidatat veniam excepteur nisi ea excepteur id excepteur ea. Labore voluptate officia reprehenderit qui Lorem enim nulla laborum in anim quis ut officia dolore. Commodo eiusmod id culpa elit enim ut aute culpa duis ad et. Veniam elit aute ullamco voluptate ipsum cupidatat.",
        // getImageSrc: () => require(""),
    },
];



function Main() {

    return (
        <>
            <main>
                <section>
                    <article>
                        <Heading as="h1" id="reservations-section">
                            Little Lemon
                        </Heading>
                        <h3>Chicago</h3>
                        <p>Fugiat proident voluptate sint dolor ipsum sint dolor aliqua deserunt quis exercitation ullamco ipsum. Do id reprehenderit irure esse amet. Qui minim officia occaecat aliqua eiusmod sunt duis duis.</p>
                        <button>Reserve a Table</button>
                        <img src="" />
                    </article>
                </section>
                <section>
                    <Heading as="h1" id="orderonline-section">
                        Specials
                    </Heading>
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                    <article>
                        {menus.map((menu) => (
                            <Card
                                key={menu.title}
                                title={menu.title}
                                description={menu.description}
                                imageSrc={menu.getImageSrc()}
                            />
                        ))}
                    </article>
                </section>
                <section>
                    <Heading as="h1" id="review-section">
                        Testimonials
                    </Heading>
                    <article>
                        {testimonials.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.name}
                                rating={testimonial.rating}
                                name={testimonial.name}
                                review={testimonial.review}
                            />
                        ))}

                    </article>
                </section>
                <section>
                    <Heading as="h1" id="about-section">
                        Little Lemon
                    </Heading>
                    <h3>Chicago</h3>
                    <p>Fugiat proident voluptate sint dolor ipsum sint dolor aliqua deserunt quis exercitation ullamco ipsum. Do id reprehenderit irure esse amet. Qui minim officia occaecat aliqua eiusmod sunt duis duis.</p>
                    <img src="" />
                </section>
            </main>
        </>
    );
}

export default Main;