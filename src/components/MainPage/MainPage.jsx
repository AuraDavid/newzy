import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import { formatArticleDate } from "../../helper/DateFormatHelper";
import NewsService from '../../services/NewsService';

const MainPage = () => {
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    const [books, setBooks] = useState([]);
    const [sports, setSports] = useState([]);
    const [culture, setCulture] = useState([]);
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        NewsService.getMainPageSections()
            .then((data) => {
                setBooks(data[0]);
                setSports(data[1]);
                setCulture(data[2]);
                setBusiness(data[3]);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}><Link to={"books"}>Books</Link></h2>
                <div className={styles.sectionContainer}>
                    {books.map((book) => {
                        return (
                            <section className={styles.section} key={book.id}>
                                <article className={styles.firstArticle}>
                                    <h3><Link to={`./Article/${book.webTitle}`} state={{ apiUrl: book.apiUrl }} className={styles.articleTitle}>{book.webTitle}</Link></h3>
                                    <img src={book.fields.thumbnail} alt={book.webTitle} className={styles.articleImg} />
                                    <p className={styles.articleTime}>{formatArticleDate(book.webPublicationDate)}</p>
                                </article>
                            </section>
                        );
                    })}
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}><Link to={"sports"}>Sports</Link></h2>
                <div className={styles.sectionContainer}>
                    {sports.map((sport) => {
                        return (
                            <section className={styles.section} key={sport.id}>
                                <article className={styles.firstArticle}>
                                    <h3><Link to={`./Article/${sport.webTitle}`} state={{ apiUrl: sport.apiUrl }} className={styles.articleTitle}>{sport.webTitle}</Link></h3>
                                    <img src={sport.fields.thumbnail} alt={sport.webTitle} className={styles.articleImg} />
                                    <p className={styles.articleTime}>{formatArticleDate(sport.webPublicationDate)}</p>
                                </article>
                            </section>
                        );
                    })}
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}><Link to={"culture"}>Culture</Link></h2>
                <div className={styles.sectionContainer}>
                    {culture.map((cult) => {
                        return (
                            <section className={styles.section} key={cult.id}>
                                <article className={styles.firstArticle}>
                                    <h3><Link to={`./Article/${cult.webTitle}`} state={{ apiUrl: cult.apiUrl }} className={styles.articleTitle}>{cult.webTitle}</Link></h3>
                                    <img src={cult.fields.thumbnail} alt={cult.webTitle} className={styles.articleImg} />
                                    <p className={styles.articleTime}>{formatArticleDate(cult.webPublicationDate)}</p>
                                </article>
                            </section>
                        );
                    })}
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}><Link to={"business"}>Business</Link></h2>
                <div className={styles.sectionContainer}>
                    {business.map((bus) => {
                        return (
                            <section className={styles.section} key={bus.id}>
                                <article className={styles.firstArticle}>
                                    <h3><Link to={`./Article/${bus.webTitle}`} state={{ apiUrl: bus.apiUrl }} className={styles.articleTitle}>{bus.webTitle}</Link></h3>
                                    <img src={bus.fields.thumbnail} alt={bus.webTitle} className={styles.articleImg} />
                                    <p className={styles.articleTime}>{formatArticleDate(bus.webPublicationDate)}</p>
                                </article>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainPage;