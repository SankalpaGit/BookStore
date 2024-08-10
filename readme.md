
# BookStore

BookStore is the web based system where user can book the favourite books from system. Not only booking the book user can donate the book as well if they want. This project is developed keeping the thought of library. 




### Developer
Sankalpa Shrestha 
[@SankalpaGit](https://github.com/SankalpaGit/)

(React.js | Django | Next.js)## Overview

| Category      | Used Tech                                               |
|---------------|-----------------------------------------------------|
| Stack    | Django, React.js, MySQL                            |
| Venv Library      | pillow, sqlparse, jazzmin, sqlclient, DRF          |
| Dependencies  | autoprefixer, axios, postcss, react-router-dom, tailwindcss |



## API References

### books API

| HTTP Method | Endpoint       | Description                         |
|-------------|----------------|-------------------------------------|
| GET         | `/books/`      | Retrieve a list of all books        |
| POST        | `/books/`      | Create a new book                   |
| GET         | `/books/{id}/` | Retrieve details of a specific book |
| PUT         | `/books/{id}/` | Update details of an existing book  |
| DELETE      | `/books/{id}/` | Delete a book                       |

### donation API

| HTTP Method | Endpoint       | Description                         |
|-------------|----------------|-------------------------------------|
| GET         | `/donations/`      | Retrieve a list of all donations        |
| POST        | `/donations/`      | Create a new donation                   |
| GET         | `/donations/{id}/` | Retrieve details of a specific donation |
| PUT         | `/donations/{id}/` | Update details of an existing donation  |
| DELETE      | `/donations/{id}/` | Delete a donation                     |


## Action of the user ( Admin and normal users)

| Admin |  Add delete edit books, accept ot reject donations     |
|-------------|-------------------------------------|
| Accept       | donate book, view the book list        |