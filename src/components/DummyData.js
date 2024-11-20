
export let dishes = [
    "Grilled Salmon with Quinoa and Steamed Vegetables",
    // "Spinach and Feta Stuffed Chicken Breast",
    "Lentil and Vegetable Stir-Fry with Brown Rice",
    // "Baked Sweet Potatoes with Black Beans and Avocado",
    // "Turkey and Spinach Meatballs with Whole Wheat Pasta",
    // "Vegetable and Chickpea Curry with Basmati Rice",
    // "Greek Yogurt and Spinach Stuffed Baked Potatoes",
    // "Tofu Stir-Fry with Mixed Vegetables and Soba Noodles",
    "Chicken and Broccoli Stir-Fry with Brown Rice",
    // "Egg and Avocado Salad on Whole Grain Toast",
  ];

// time data
export let year = new Date().getFullYear();
export let month = new Date().getMonth();
export let days = [];
export let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();
  let calendar = [];

  // Add empty cells for days before the first of the month
  for (let i = 0; i < startingDay; i++) {
    calendar.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    let day = new Date(year, month, i);
    calendar.push(new Date(year, month, i));
  }

  return calendar;
}


export const dates = ["11/18", "11/19", "11/20", "11/21", "11/22"];
//further implement here is just mocking data for chart
export let nutrientData = [120, 80, 50, 75, 100];
//daily tracking data
export const trackingData = {
    labels: dates,
    datasets: [
      {
        type: "line",
        label: "Weight(kg)",
        data: [51, 55, 60, 59, 61],
      },
      {
        type: "bar",
        label: "Sugar Level (mg/dL)",
        data: [85, 125, 135, 90, 110],
      },
    ],
  };
  // blood Sugar Data
export let currentSugar = 90;
export let rating = currentSugar < 90 ? "Low" : (currentSugar > 140 ? "High" : "Normal");
export let bloodSugar = [75, 140];
export const sugarChartData = {
datasets: [
    {
    label: "gram",
    data: [currentSugar, bloodSugar[1] - currentSugar],
    backgroundColor: ["rgba(250, 143, 146, 0.8)", "rgba(0, 0, 0, 0.2)"],
    borderColor: ["rgba(250, 143, 146, 0.8)", "rgba(0, 0, 0, 0.2)"],
    borderWidth: 1,
    cutout: "80%",
    circumference: 180,
    rotation: 270,
    },
],
};

// user Data:
export let userData = {
    "name": "Jennifer Louis",
    "dueDate" : "12/02/2024",
    "currentWeek" : 11,
    "weight" : 60,
    "sugarLevel" : rating,
}

import dish0 from "../images/0.png";
import dish1 from "../images/1.jpg"; 
import dish2 from "../images/2.jpg"; 
let dishImages = [dish0, dish1, dish2]


export let listOfDishes = [
    {
        'option': 0,
        'name': "Grilled Salmon with Quinoa and Steamed Vegetables",
        'ingredients': 
        [
            '2 salmon fillets',
            '1 cup quinoa',
            '2 cups water',
            '2 cups broccoli florets',
            '1 tbsp olive oil',
            '1 lemon',
        ],
        'imgLink': dish0 
    },
    {
        'option': 1,
        'name': "Lentil and Vegetable Stir-Fry with Brown Rice",
        'ingredients': 
        [
          '1 cup lentils',
          '1 tbsp olive oil',
          '1 onion',
          '2 carrots',
          '2 celery stalks',
          '3 garlic cloves',
          '6 cups vegetable broth ',
          '2 cups fresh spinach',
          '1 tsp cumin',
          '1 tsp turmeric',
          '1 bay leaf',
        ],
        'imgLink': dish1 
    },
    {
        'option': 2,
        'name': "Chicken and Vegetable Stir-Fry",
        'ingredients': 
        [
          '2 boneless, skinless chicken breasts',
          '1 bell pepper',
          '1 zucchini',
          '1 carrot',
          '1 onion',
          '1 cup snap peas',
          '2 tbsp olive oil',
          '3 tbsp soy sauce',
          '1 tbsp honey',
          '1 tbsp ginger',
          '2 garlic cloves',
          '1 tsp sesame oil',
          '1 tbsp sesame seeds',
          'Cooked brown rice or quinoa',
        ],
        'imgLink': dish2 
    }
]



export default generateCalendar;