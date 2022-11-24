import { useEffect, useState } from "react";
import styles from "./Article.module.css";
import { useLocation } from 'react-router-dom';
import NewsService from "../../services/NewsService";

const Article = (props) => {
    const location = useLocation();
    const [article, setArticle] = useState([]);

    useEffect(() => {
        NewsService.getArticle(location.state.apiUrl)
            .then((response) => {
                setArticle(response);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className={styles.articleContainer}>
            <div key={article.id}>
                <h1 className={styles.articleTitle}>{article.headline}</h1>
                <div className={styles.articleBody} dangerouslySetInnerHTML={{__html: article.body}}></div>
            </div>
        </div>
    );
};

export default Article;