import { useState, useEffect } from 'react';
import NewsService from './services/NewsService';

const useFetchSectionData = (sectionType) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        NewsService.getSectionData(sectionType)
            .then((response) => {
                setData(response);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [sectionType]);

    return data;
};

export default useFetchSectionData;
