const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const sectionsUrl = [
    `https://content.guardianapis.com/books?api-key=${API_KEY}&show-fields=thumbnail`,
    `https://content.guardianapis.com/sport?api-key=${API_KEY}&show-fields=thumbnail`,
    `https://content.guardianapis.com/culture?api-key=${API_KEY}&show-fields=thumbnail`,
    `https://content.guardianapis.com/business?api-key=${API_KEY}&show-fields=thumbnail`
];

const NewsService = {
    getSectionData: async (sectionType) => {
        const response = await fetch(`https://content.guardianapis.com/${sectionType}?api-key=${API_KEY}&show-fields=thumbnail`);
        const data = await response.json();

        if (data?.response?.results.length) {
            return data.response.results;
        }

        return [];
    },
    getArticle: async (apiUrl) => {
        const response = await fetch(`${apiUrl}?api-key=${API_KEY}&show-fields=headline,body`);
        const data = await response.json();

        return data?.response?.content?.fields;
    },
    getMainPageSections: async function() {
        const booksResult = await this.getSectionData('books');
        const sportResult = await this.getSectionData('sport');
        const cultureResult = await this.getSectionData('culture');
        const businessResult = await this.getSectionData('business');

        const books = booksResult?.length > 2 && booksResult.slice(0, 3);
        const sport = booksResult?.length > 2 && sportResult.slice(0, 3);
        const culture = cultureResult?.length > 2 && cultureResult.slice(0, 3);
        const business = businessResult?.length > 2 && businessResult.slice(0, 3);

        return [books, sport, culture, business];
    }
};

export default NewsService;