const http = require('http');
const url = require('url');
const querystring = require('querystring');
const movies = require('./movies');

const server = http.createServer((request, response) => {
    const urlObject = url.parse(request.url);
    const data = querystring.parse(urlObject.query);
    let payload = {};

    response.setHeader('Content-Type', 'application/json');

    switch (urlObject.pathname) {
        case '/api/movies/list':
            payload = {
                endpoint: 'list',
                description: 'List all movies',
            };
            break;
        case '/api/movies/add':
            payload = {
                endpoint: 'add',
                description: 'Add a movie',
            };

            if (data.title) {
                let movie = movies.addMovie(data.title, data.body);
                if (movie) {
                    payload['movie'] = movie;
                } else {
                    payload['error'] = 'Movie title already taken';
                }
            }
            break;
        case '/api/movies/delete':
            payload = {
                endpoint: 'delete',
                description: 'Delete a movie',
            };
            break;
        default:
            payload = {
                api: 'Movies 0.0.1',
                endpoints: 'add, list, delete',
            };
    }

    response.end(JSON.stringify(payload));
});
server.listen(3001);