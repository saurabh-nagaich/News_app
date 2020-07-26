import {
  artical_url,
  _api_key,
  category,
  country_code,
} from '../config/rest_consfig';

export async function getArticles(cat = category) {
  try {
    let data = await fetch(
      `${artical_url}?country=${country_code}&category=${cat}`,
      {
        headers: {
          'X-API-KEY': _api_key,
        },
      },
    );
    let result = await data.json();
    articles = null;
    // console.log(result.articles);
    return result.articles;
  } catch (error) {
    throw error;
  }
}
