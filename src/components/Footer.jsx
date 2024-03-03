import PageLink from "./PageLink";
import SocialLinks from "./SocialLinks";
import NewsLetter from "./NewsLetter";

const Footer = () => {
    console.log(PageLink);
    return (
        <footer className="section footer">
            <PageLink />
            <div className="page-links"></div>
            <SocialLinks />
            <NewsLetter />
        </footer>
    );
};

export default Footer;
