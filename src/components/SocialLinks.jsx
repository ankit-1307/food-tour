import { socialLinks } from "./data";
const SocialLinks = () => {
    return (
        <div className="footer-social-links">
            {socialLinks.map((links) => {
                const { id, title, img } = links;
                return (
                    <a key={id}>
                        <img src={img} alt={title} className="social-img" />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialLinks;
