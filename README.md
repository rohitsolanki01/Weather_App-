# Weather App ⛅

A modern and responsive weather application built with React and Vite that provides real-time weather information for any location worldwide.

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Search Functionality**: Search for weather information by city name
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Clean UI**: Modern and intuitive user interface
- **Fast Performance**: Built with Vite for lightning-fast development and build times
- **Weather Details**: Display temperature, humidity, wind speed, and weather conditions
- **Location-based Weather**: Get weather information for your current location

## 🚀 Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling and responsive design
- **Weather API** - Real-time weather data (OpenWeatherMap or similar)
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohitsolanki01/Weather_App-.git
   cd Weather_App-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your weather API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## 🌐 API Setup

This project uses a weather API to fetch real-time weather data. To get started:

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. Add your API key to the `.env` file as shown in the installation steps
3. The app will automatically use this key to fetch weather data

## 🏗️ Project Structure

```
Weather_App-/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── LoadingSpinner.jsx
│   ├── services/
│   │   └── weatherAPI.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎯 How to Use

1. **Search for a City**: Enter a city name in the search bar and press Enter or click the search button
2. **View Weather Details**: The app will display current weather conditions including:
   - Current temperature
   - Weather description
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure
3. **Responsive Experience**: Use the app on any device - it's fully responsive!

## 🔮 Future Enhancements

- [ ] 7-day weather forecast
- [ ] Weather maps integration
- [ ] Favorite locations
- [ ] Temperature unit conversion (Celsius/Fahrenheit)
- [ ] Dark/Light theme toggle
- [ ] Weather notifications
- [ ] Geolocation-based weather
- [ ] Weather charts and graphs

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Rohit Solanki**
- GitHub: [@rohitsolanki01](https://github.com/rohitsolanki01)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/rohit-solanki-495860348/)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- Weather icons and design inspiration from various sources

## 📸 Screenshots

![Weather App Screenshot](screenshot.png)
*Add a screenshot of your app here*

## 🐛 Known Issues

- None at the moment. If you find any bugs, please report them in the Issues section.

---

⭐ **If you found this project helpful, please give it a star!** ⭐
