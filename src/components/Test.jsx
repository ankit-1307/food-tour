const data = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "./images/book-1.jpg",
        id: 1,
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
        id: 2,
    },
];
export function BookList() {
    return (
        <section className="booklist">
            {data.map((book) => {
                const { img, id, title, author } = book;

                <Book img={img} id={id} title={title} author={author} />;
            })}
        </section>
    );
}
const Book = (props) => {
    console.log(props);
    // let { img, id, title, author } = props;
    return (
        <article className="book">
            <img src="" alt="" />
            {/* <h2>{title}</h2> */}
            {/* <h4>{author} </h4> */}
        </article>
    );
};
