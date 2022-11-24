import { Link } from "react-router-dom";
import styles from "./Section.module.css";
import useFetchSectionData from "../../FetchDataHook";
import { formatArticleDate } from "../../helper/DateFormatHelper";

// Section component used for all the news categories

const Section = (props) => {
    const posts = useFetchSectionData(props.sectionType);

    return (
        <div>
            <h1 className={styles.newsTitle}>{props.sectionType.toUpperCase()}</h1>
            <div className={styles.news}>
                {posts.map((post) => {
                    return (
                        <article className={styles.newsArticle} key={post.id}>
                            <div className={styles.newsContainer}>
                                <h2>
                                    <Link to={`/Article/${post.webTitle}`} state={{ apiUrl: post.apiUrl }} className={styles.newsTitle}>{post.webTitle}</Link>
                                </h2>
                                <p className={styles.newsTime}>{formatArticleDate(post.webPublicationDate)}</p>
                            </div>
                            <img src={post.fields.thumbnail} alt={post.webTitle} className={styles.newsImage} />
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default Section;