# 3D Currency Converter

A modern, animated currency converter web application featuring real-time exchange rates, 3D animations, and support for over 100 currencies worldwide.

## ✨ Features

### Core Functionality
- 💱 Real-time currency conversion using ExchangeRate API
- 🌍 Support for 100+ global currencies
- 🔄 Automatic conversion as you type
- 📊 Historical conversion tracking
- 🔍 Currency search functionality

### Technical Features
- ⚡ Debounced API calls for better performance
- 💾 Local storage for conversion history
- 🔒 Error handling and fallback options
- 🔄 Automatic currency updates
- 🔍 Fast currency search and filtering

## 🚀 Quick Start

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

---

Made with ❤️ by Sabhavath Yashwanth
