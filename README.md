# lyriks-spotify-clone

This is a web app built with React, Vite, and Redux that allows you to search for songs and artists using the Shazam API, and play music with lyrics.

## Getting Started

To get started with the app, you can follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/judemusyoki/lyriks-spotify-clone.git
```
2. Install the dependencies:
```
cd YOUR-REPOSITORY
yarn install
```
3. Create a .env file at the root of the project with your Shazam API credentials:
```
VITE_SHAZAM_API_KEY=YOUR_API_KEY
VITE_SHAZAM_API_SECRET=YOUR_API_SECRET
VITE_GEO_IPFY_API=YOUR_API
```
4. Start the development server:
```
yarn dev
```
5. Open ```http://localhost:3000``` in your browser to view the app.

## Features
The app allows you to:

- Search for songs and artists using the Shazam API.
- Find top charts and artists globally and around your location
- Play music with lyrics using the Web Audio API and the Musixmatch API.
- Control playback with play, pause, and seek functions.
- View song and artist information, including album artwork and social media links.

## Technologies Used
The app is built with:

- [React](https://reactjs.org/) - a JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - a build tool that focuses on speed and developer experience.
- [Redux](https://redux.js.org/) - a predictable state container for JavaScript apps.
- [Shazam API](https://rapidapi.com/shazam/api/shazam/) - a music identification service.
- [Geo-Ipify](https://geo.ipify.org/) - a tool that allows you to locate and identify precise IP address location
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - a high-level JavaScript API for processing and synthesizing audio in web applications.
- [Musixmatch API](https://developer.musixmatch.com/) - a lyrics database and music recognition platform.

## Contributing
Contributions are welcome! To contribute to the project, you can follow these steps:

- Fork the repository to your own GitHub account.
- Clone the forked repository to your local machine.
- Create a new branch for your changes.
- Make your changes and commit them with a descriptive commit message.
- Push your changes to your forked repository.
- Open a pull request from your forked repository to the original repository.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
