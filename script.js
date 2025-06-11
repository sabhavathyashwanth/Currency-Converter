// API endpoint for currency conversion (using Exchange Rate API)
const API_KEY = '7db1a45afdadaf991966d166'; // Updated API key
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

// Fallback exchange rates (updated with latest rates from the API)
const fallbackRates = {
    USD: 1,
    EUR: 0.8751,
    GBP: 0.7402,
    JPY: 144.7742,
    AUD: 1.5330,
    CAD: 1.3677,
    CHF: 0.8222,
    CNY: 7.1877,
    INR: 85.6080,
    NZD: 1.6523,
    BRL: 5.5604,
    ZAR: 17.7052
};

// DOM Elements
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from');
const toCurrency = document.getElementById('to');
const fromSearch = document.getElementById('from-search');
const toSearch = document.getElementById('to-search');
const swapBtn = document.getElementById('swap-btn');
const result = document.getElementById('result');
const showHistoryBtn = document.getElementById('show-history');
const backToConverterBtn = document.getElementById('back-to-converter');
const clearHistoryBtn = document.getElementById('clear-history');
const historyList = document.getElementById('history-list');
const converterCard = document.querySelector('.converter-card');
const loadingSpinner = document.getElementById('loading');

// Currency codes for major currencies (expanded list)
const currencies = {
    USD: "United States Dollar",
    EUR: "Euro",
    GBP: "British Pound",
    JPY: "Japanese Yen",
    AUD: "Australian Dollar",
    CAD: "Canadian Dollar",
    CHF: "Swiss Franc",
    CNY: "Chinese Yuan",
    INR: "Indian Rupee",
    NZD: "New Zealand Dollar",
    BRL: "Brazilian Real",
    ZAR: "South African Rand",
    AED: "UAE Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillean Guilder",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Mark",
    BBD: "Barbadian Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BMD: "Bermudan Dollar",
    BND: "Brunei Dollar",
    BOB: "Bolivian Boliviano",
    BSD: "Bahamian Dollar",
    BTN: "Bhutanese Ngultrum",
    BWP: "Botswanan Pula",
    BYN: "Belarusian Ruble",
    BZD: "Belize Dollar",
    CDF: "Congolese Franc",
    CLP: "Chilean Peso",
    COP: "Colombian Peso",
    CRC: "Costa Rican Colón",
    CUP: "Cuban Peso",
    CVE: "Cape Verdean Escudo",
    CZK: "Czech Republic Koruna",
    DJF: "Djiboutian Franc",
    DKK: "Danish Krone",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Ethiopian Birr",
    FJD: "Fijian Dollar",
    GEL: "Georgian Lari",
    GHS: "Ghanaian Cedi",
    GMD: "Gambian Dalasi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    HKD: "Hong Kong Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Shekel",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Króna",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    KES: "Kenyan Shilling",
    KGS: "Kyrgystani Som",
    KHR: "Cambodian Riel",
    KMF: "Comorian Franc",
    KRW: "South Korean Won",
    KWD: "Kuwaiti Dinar",
    KYD: "Cayman Islands Dollar",
    KZT: "Kazakhstani Tenge",
    LAK: "Laotian Kip",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    LRD: "Liberian Dollar",
    LSL: "Lesotho Loti",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MKD: "Macedonian Denar",
    MMK: "Myanma Kyat",
    MNT: "Mongolian Tugrik",
    MOP: "Macanese Pataca",
    MRU: "Mauritanian Ouguiya",
    MUR: "Mauritian Rupee",
    MVR: "Maldivian Rufiyaa",
    MWK: "Malawian Kwacha",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NIO: "Nicaraguan Córdoba",
    NOK: "Norwegian Krone",
    NPR: "Nepalese Rupee",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Nuevo Sol",
    PGK: "Papua New Guinean Kina",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Złoty",
    PYG: "Paraguayan Guarani",
    QAR: "Qatari Rial",
    RON: "Romanian Leu",
    RSD: "Serbian Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwandan Franc",
    SAR: "Saudi Riyal",
    SCR: "Seychellois Rupee",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    SOS: "Somali Shilling",
    SRD: "Surinamese Dollar",
    SYP: "Syrian Pound",
    THB: "Thai Baht",
    TJS: "Tajikistani Somoni",
    TMT: "Turkmenistani Manat",
    TND: "Tunisian Dinar",
    TRY: "Turkish Lira",
    TTD: "Trinidad & Tobago Dollar",
    TWD: "New Taiwan Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistani Som",
    VES: "Venezuelan Bolívar",
    VND: "Vietnamese Dong",
    XAF: "Central African CFA Franc",
    XCD: "East Caribbean Dollar",
    XOF: "West African CFA Franc",
    YER: "Yemeni Rial",
    ZMW: "Zambian Kwacha"
};

// Initialize currency dropdowns
function initializeCurrencyDropdowns() {
    const currencyEntries = Object.entries(currencies);
    updateDropdown(fromCurrency, currencyEntries);
    updateDropdown(toCurrency, currencyEntries);

    // Set default values
    fromCurrency.value = 'USD';
    toCurrency.value = 'EUR';
}

// Update dropdown options based on search
function updateDropdown(dropdown, options) {
    dropdown.innerHTML = '';
    options.forEach(([code, name]) => {
        const option = new Option(`${code} - ${name}`, code);
        dropdown.add(option);
    });
}

// Filter currencies based on search input
function filterCurrencies(searchText) {
    const searchLower = searchText.toLowerCase();
    return Object.entries(currencies).filter(([code, name]) => 
        code.toLowerCase().includes(searchLower) || 
        name.toLowerCase().includes(searchLower)
    );
}

// Debounce function to limit API calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Convert currency function
async function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount <= 0) {
        showError('Please enter a valid amount');
        return;
    }

    try {
        loadingSpinner.classList.remove('hidden');
        result.style.visibility = 'hidden';

        const response = await fetch(`${BASE_URL}/${API_KEY}/pair/${from}/${to}/${amount}`);
        const data = await response.json();

        if (data.result === 'success') {
            const convertedAmount = data.conversion_result;
            const rate = data.conversion_rate;
            
            result.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
            result.style.color = 'var(--text-color)';
            
            // Add to history
            addToHistory(amount, from, to, convertedAmount);
        } else {
            showError('Conversion failed. Please try again.');
        }
    } catch (error) {
        showError('Error connecting to the server. Please try again.');
    } finally {
        loadingSpinner.classList.add('hidden');
        result.style.visibility = 'visible';
    }
}

// Debounced version of convertCurrency
const debouncedConvert = debounce(convertCurrency, 500);

// Show error message
function showError(message) {
    result.textContent = message;
    result.style.color = '#e74c3c';
}

// Swap currencies
function swapCurrencies() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    debouncedConvert();
}

// History management
function addToHistory(amount, from, to, convertedAmount) {
    const historyItem = {
        timestamp: new Date().toISOString(),
        amount,
        from,
        to,
        convertedAmount
    };

    let history = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
    history.unshift(historyItem);
    
    // Keep only last 10 items
    history = history.slice(0, 10);
    
    localStorage.setItem('conversionHistory', JSON.stringify(history));
    updateHistoryDisplay();
}

// Update history display
function updateHistoryDisplay() {
    const history = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
    historyList.innerHTML = '';

    history.forEach(item => {
        const date = new Date(item.timestamp).toLocaleString();
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div>${item.amount} ${item.from} → ${item.convertedAmount.toFixed(2)} ${item.to}</div>
            <small>${date}</small>
        `;
        historyList.appendChild(historyItem);
    });
}

// Event listeners
amountInput.addEventListener('input', debouncedConvert);
fromCurrency.addEventListener('change', debouncedConvert);
toCurrency.addEventListener('change', debouncedConvert);
swapBtn.addEventListener('click', swapCurrencies);
showHistoryBtn.addEventListener('click', () => {
    converterCard.classList.add('show-history');
    updateHistoryDisplay();
});
backToConverterBtn.addEventListener('click', () => {
    converterCard.classList.remove('show-history');
});
clearHistoryBtn.addEventListener('click', () => {
    localStorage.removeItem('conversionHistory');
    updateHistoryDisplay();
});

// Event listeners for search inputs
fromSearch.addEventListener('input', (e) => {
    const filtered = filterCurrencies(e.target.value);
    updateDropdown(fromCurrency, filtered);
});

toSearch.addEventListener('input', (e) => {
    const filtered = filterCurrencies(e.target.value);
    updateDropdown(toCurrency, filtered);
});

// Initialize the app
initializeCurrencyDropdowns();
// Initial conversion
debouncedConvert(); 