import postModel from './api/posts/postsModel';

const posts = [
  {
    id: 1,
    title: "Gotta Get Theroux This",
    year: 2019,
    link: "https://www.easons.com/gotta-get-theroux-this-louis-theroux-9781509880386",
    author: "Louis Theroux",
    comments: [],
    upvotes: 10
},
{
    id: 2,
    title: "Blue Moon",
    year: 1990,
    link: "https://www.easons.com/5637150827/all/books/fiction/crime-fiction/blue-moon-tpb/",
    author: "Lee Child",
    comments: [],
    upvotes: 14
},
{
    id: 3,
    title:
    "A Game of Thrones",
    year: 1996,
    link: "https://www.easons.com/a-game-of-thrones-george-r-r-martin-9780007448036",
    author: "George R. R Martin ",
    comments: [],
    upvotes: 12
},
{
    id: 4,
    title:
    "War And Peace",
    year: 1869,
    link: "https://www.easons.com/war-and-peace-leo-tolstoy-9780099512240",
    author: "Leo Tolstoy",
    comments: [],
    upvotes: 2
},
{
    id: 5,
    title: "The Count of Monte Cristo",
    year: 1844,
    link:
    "https://www.easons.com/the-count-of-monte-cristo-alexandre-dumas-9781841593203",
    author: "Alexandre Dumas",
    comments: [],
    upvotes: 8
},
{
    id: 6,
    title: "Ulysses",
    year: 1922,
    link: "https://www.easons.com/ulysses-james-joyce-9781847175908",
    author: "James Joyce",
    comments: [],
    upvotes: 10
},
{
    id: 7,
    title: "Moby-Dick",
    year: 1851,
    link: "https://www.easons.com/moby-dick-herman-melville-9780143124672",
    author: "Herman Melville",
    comments: [],
    upvotes: 20
},

  /*      
  {id: 1,
           title: 'India - Tiger population sees 30% increase.',
           link: 'http://www.bbc.com/news/world-asia-30896028',
           username: 'jbloggs',
            comments: [],
            upvotes: 10,
          },
         {
            id: 2,
            title: 'The button that is not.',
            link: 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
            username: 'notme',
            comments: [],
            upvotes: 12,
          },
          {
            id: 3,
            title: 'Google Nears $1B Investment in SpaceX',
            link: 'https://youtube.com',
            username: 'notme',
            comments: [],
            upvotes: 12,
          },
          {
            id: 4,
            title: 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
            link: 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
            username: 'psmith',
            comments: [],
            upvotes: 2,
          },
          */

      ];
export const loadPosts = () => {
postModel.find({}).remove(function() {
    postModel.collection.insert(posts, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Post Data`);
    } else {
      console.info(`${posts.length} posts were successfully stored.`);
    }
  });
});
};