import tictactoe from "../assets/images/tic.png";
import stopwatch from "../assets/images/stop.png";
import calculator from "../assets/images/calculator.png";
import weather from "../assets/images/weather.png";
import bookhub from "../assets/images/bookhub.png";
import car from "../assets/images/car.png";
import portfolio from "../assets/images/portfolio.png";

const projectData = [
    {
        id:1,
        title:"Tic Tac Toe",
        level:"basic",
        description:"The Tic Tac Toe game is a classic two-player strategy game implemented using HTML, CSS, and JavaScript. Players take turns marking a 3x3 grid with their symbol (X or O), aiming to align three symbols horizontally, vertically, or diagonally. The game is simple yet engaging, providing a great mix of logic and fun.",
        github:"https://github.com/ismaeelkhaleel/Tic-Tac-Toe",
        technology:"HTML, CSS & JavaScript",
        img:tictactoe,
        demo:"https://ismaeelkhaleel.github.io/Tic-Tac-Toe/",
    },
    {
        id:2,
        title:"Stop Watch",
        level:"basic",
        description:"The Stopwatch application is a lightweight and user-friendly tool for measuring time intervals. Developed using HTML, CSS, and JavaScript, it provides essential features for starting, stopping, and resetting the timer, making it a handy utility for various time-tracking needs.",
        github:"https://github.com/ismaeelkhaleel/stopwatch",
        technology:"HTML, CSS & JavaScript",
        img:stopwatch,
        demo:"https://ismaeelkhaleel.github.io/stopwatch/",
    },
    {
        id:3,
        title:"Weather Application",
        level:"basic",
        description:"The Weather Application allows users to check the current weather conditions of any location. Developed using HTML, CSS, and JavaScript, it retrieves real-time weather data from an API and displays important information like temperature, humidity, wind speed, and weather conditions in a user-friendly interface.",
        github:"https://github.com/ismaeelkhaleel/weather-application",
        technology:"HTML, CSS & JavaScript",
        img:weather,
        demo:"https://ismaeelkhaleel.github.io/weather-application/",
    },
    {
        id:4,
        title:"Simple Calculator",
        level:"basic",
        description:"The Calculator App is a simple, interactive tool designed to perform basic arithmetic operations like addition, subtraction, multiplication, and division. Built using HTML, CSS, and JavaScript, this app provides an intuitive user interface with a clean and responsive design. It allows users to input numbers and operations using a virtual keypad, providing immediate results.",
        github:"https://github.com/ismaeelkhaleel/Calculator",
        technology:"HTML, CSS & JavaScript",
        img:calculator,
        demo:"https://ismaeelkhaleel.github.io/Calculator/",
    },
    {
        id:5,
        title:"BookHub",
        level:"medium",
        description:"AMU Book Store is a free, online platform developed using the MySQL, Express.js, React.js, and Node.js for Aligarh Muslim University (AMU) students and faculty. The platform allows users to view, download, and manage books relevant to their courses and departments. Users can sign up, access personalized accounts, and interact with the book catalog by searching for books, providing feedback, and suggesting new books.",
        github:"https://github.com/ismaeelkhaleel/Amu-BookStore",
        technology:"React.js, Node.js, Express.js, Bootstrap, Rest Api and MySQL",
        img:bookhub,
        demo:"",
    },
    {
        id:6,
        title:"PortFolio",
        level:"medium",
        description:"",
        github:"https://github.com/ismaeelkhaleel/Ismaeel-s-Portfolio",
        technology:"HTML, CSS, Bootstrap, JavaScript & React.js ",
        img:portfolio,
        demo:"/",
    },
    {
        id:7,
        title:"Linkedin Clone",
        level:"advance",
        description:"",
        github:"",
        technology:"HTML, CSS, Bootstrap, Node.js, Express.js, Rest API, MongoDB & React.js",
        img:"",
        demo:"",
    },
    {
        id:8,
        title:"Car Price Prediction",
        level:"medium",
        description:"The Car Price Prediction application predicts the price of a car based on various input features such as model, year, mileage, fuel type, and other attributes. Built using Python, Jupyter, Scikit-learn for machine learning, and Matplotlib and Seaborn for data visualization, this project utilizes linear regression for accurate price prediction. The user interface is created with HTML and CSS to provide an interactive and simple platform for entering car details and getting predicted prices.",
        github:"https://github.com/ismaeelkhaleel/Car_Price_Prediction",
        technology:"Python, Scikit-learn, Matplotlib, Seaborn, HTML & CSS",
        img:car,
        demo:"",
    },
];

export default projectData