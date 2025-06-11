# 3D Currency Converter

![Currency Converter](https://img.shields.io/badge/Currency-Converter-2ecc71?style=for-the-badge) 
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

A modern, animated currency converter web application featuring real-time exchange rates, 3D animations, and support for over 100 currencies worldwide.

## ✨ Features

### Core Functionality
- 💱 Real-time currency conversion using ExchangeRate API
- 🌍 Support for 100+ global currencies
- 🔄 Automatic conversion as you type
- 📊 Historical conversion tracking
- 🔍 Currency search functionality

### User Interface
- 🎨 Modern 3D animated design
- 🌙 Dark mode interface
- 💫 Smooth transitions and animations
- 📱 Fully responsive layout
- 🎯 Intuitive user experience

### Technical Features
- ⚡ Debounced API calls for better performance
- 💾 Local storage for conversion history
- 🔒 Error handling and fallback options
- 🔄 Automatic currency updates
- 🔍 Fast currency search and filtering

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection for real-time conversion rates

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
```

2. Get your API key:
   - Sign up for a free API key at [ExchangeRate-API](https://www.exchangerate-api.com/)
   - Copy your API key

3. Configure the API key:
   - Open `script.js`
   - Replace the API key placeholder:
   ```javascript
   const API_KEY = 'YOUR_API_KEY';
   ```

4. Launch the application:
   - Open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🎯 Usage

### Basic Conversion
1. Enter the amount you want to convert
2. Select or search for your source currency
3. Select or search for your target currency
4. View the converted amount instantly

### Currency Search
- Use the search boxes above currency dropdowns
- Search by currency code (e.g., "USD") or name (e.g., "Dollar")
- Results update in real-time as you type

### Conversion History
- Click "Show History" to view past conversions
- History shows timestamp and conversion details
- Clear history using the "Clear History" button
- History persists across browser sessions

### Currency Swapping
- Use the swap button (↔️) to quickly switch currencies
- Conversion updates automatically after swapping

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic structure and layout
- **CSS3** - Modern styling features:
  - CSS Grid and Flexbox
  - 3D Transforms
  - CSS Variables
  - Animations and Transitions
- **JavaScript (ES6+)** - Core functionality:
  - Async/Await for API calls
  - Local Storage API
  - DOM Manipulation
  - Event Handling

### API Integration
The application uses the ExchangeRate-API v6 which provides:
- Real-time exchange rates
- Support for 100+ currencies
- Regular rate updates
- Reliable uptime and performance

### Performance Optimizations
- Debounced API calls (500ms delay)
- Efficient DOM updates
- Optimized animations
- Minimal dependencies
- Cached conversion history

## 📱 Responsive Design

The application is fully responsive and works on:
- 💻 Desktop computers
- 💪 Tablets
- 📱 Mobile phones
- 🖥️ Various screen sizes and orientations

## 🔒 Security

- API keys should be kept secure
- No sensitive data is stored locally
- All API calls use HTTPS
- Input validation implemented

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [ExchangeRate-API](https://www.exchangerate-api.com/) for providing exchange rate data
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for the Poppins font family

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made with ❤️ by [Your Name] 