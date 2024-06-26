# AJ News App - Milestone 2 (RevoU Full Stack Software Engineering Bootcamp)
AJ News App is a milestone 2 project developed during the RevoU bootcamp. It’s a news application that allows users to explore news articles, filter by category, and search for specific topics. The app is built using React, TypeScript, and integrates with a news API.

## Installation

1. Clone the Repository:
```git clone https://github.com/RevoU-FSSE-4/milestone-2-anojumisa.git```

2. Change Directory:
```cd milestone-2-anojumisa```

3. Install Dependencies:
```npm install```

    This command installs all the necessary dependencies (libraries) required for the project to run, such as React, Tailwind CSS, and any other dependencies used in the app.

4. Start the Development Server:
```npm start```

    This command starts a development server that serves the app and automatically reloads the browser whenever you make changes to the code. The app will typically be accessible at http://localhost:3000 (or a port specified in the configuration) in your web browser.


## Explore news articles
Articles are fetched from the [News API](https://newsapi.org/) and displayed on the Homepage, Category Pages, and Search Results Page.

Here is the preview of the page:
![News App Page](/public/images/news-app.png)

## Filter by category 
Users can choose a category from the navbar to navigate to a dedicated page displaying news for that category.

![Page navigation - category "Entertainment"](/public/images/category-1.png)

![Page navigation - category "Technology"](/public/images/category-2.png)

## Search for specific topics 
A dedicated search section allows users to search for news based on keywords entered in the search bar. The search results are filtered using ```JavaScript's slice method``` to display only the top 5 results.

![Search bar](/public/images/search-bar.png)

Here is the search results displayed upon completing the search:
![Search results](/public/images/search-results.png)

## Subscribe (optional) 
Users can enter their email address in a subscription section. Upon submission, a modal popup (created with React Modal) thanks the user for subscribing. The email address is stored in localStorage (for potential future backend integration).

The input section:
![Subscription input form](/public/images/subscription-form.png)

The pop-up window displayed upon subscribing:
![Subscription pop-up page upon completion](/public/images/pop-up.png)

The email being stored in the local storage:
![Email stored in the localStorage](/public/images/local-storage.png)

## Tech-Stack:

- Frontend: React, Typescript
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Routing: [React Router](https://reactrouter.com/en/main)
- API provider: [News API](https://newsapi.org/)
- Modals: React Modal 

#### Made with &hearts; by [Ano Jumisa](https://github.com/anojumisa)