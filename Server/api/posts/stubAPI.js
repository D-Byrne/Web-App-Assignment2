import _ from 'lodash';

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
      ];


     const stubAPI = {
         getAll: () => {
            return posts;
          },
         add: (t, l) => {
              if (!(t && l)) return false;
              let id = 1;
              const last = _.last(posts);
              if (last) {
                 id = last.id + 1;
              }
              let len = posts.length;
              let newLen = posts.push({
                  'id': id,
                 'title': t, 'link': l, 'username': '', 'comments': [], 'upvotes': 0});
               return newLen > len?id:-1;
              },
         upvote: (id) => {
             const index = _.findIndex(posts,
                   (post) => {
                    return post.id == id;
                  } );
             if (index !== -1) {
                  posts[index].upvotes += 1;
                  return true;
                }
              return false;
           },
         getPost: (id) => {
            let result = null;
            const index = _.findIndex(posts,
                   (post) => {
                    return post.id == id;
                  } );
             if (index !== -1) {
                result = posts[index];
                    }
            return result;
            },
         addComment: (postId, c, n) => {
            let result = false;
            const post = stubAPI.getPost(postId);
            let id = 1;
            if (post) {
            const last = _.last(post.comments);
            if (last) {
               id = last.id + 1;
            }
            post.comments.push({'id': id,
                     'comment': c, 'author': n, 'upvotes': 0} );
            result = true;
            }
          return result;
            },
         upvoteComment: (postId, commentId) => {
            let result = false;
            const post = stubAPI.getPost(postId);
            if (post) {
            const index = _.findIndex(post.comments, (c) => {
                      return c.id == commentId;
                    });
             if (index !== -1) {
                 post.comments[index].upvotes += 1;
                 result = true;
                }
              }
            return result;
          },
      };
    export default stubAPI;