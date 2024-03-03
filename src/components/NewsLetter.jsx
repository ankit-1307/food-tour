const NewsLetter = () => {
    return (
        <form action="#" name="newsletter" className="newsletter">
            <div className="newsletter-container">
                <h3 style={{ color: "#fff" }}>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" id="email"></input>
                </div>
                <div>
                    <label htmlFor="fName">First Name</label>
                    <input type="text" id="fName"></input>
                </div>
                <div>
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" id="lName"></input>
                </div>
                <div className="newsletter-date">
                    <div>
                        <label htmlFor="birth-day">Date</label>
                        <input
                            type="number"
                            id="birth-day"
                            max={31}
                            min={1}
                        ></input>
                    </div>
                    <p>/</p>
                    <div>
                        <label htmlFor="birth-month">Month</label>
                        <input
                            type="number"
                            id="birth-month"
                            max={12}
                            min={1}
                        ></input>
                    </div>
                </div>
                <button type="submit">Subscribe</button>
            </div>
        </form>
    );
};

export default NewsLetter;
