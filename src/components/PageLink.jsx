import { pageLinks } from "./data";

const PageLink = () => {
    return (
        <div className="footer-links">
            {pageLinks.map((pageLink) => {
                const { id, title, link } = pageLink;
                return (
                    <div key={id} className="page-link">
                        <a href={link}>{title}</a>
                    </div>
                );
            })}
        </div>
    );
};

export default PageLink;
