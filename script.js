const ARTICLE_DATA = [
  {
    "title": "Why I Started The BioChem Chronicles",
    "slug": "biochem-chronicles-introduction",
    "category": "Science Communication",
    "status": "Research Note",
    "readingTime": "4 min read",
    "excerpt": "A short introduction to the purpose of this site: using student-built projects, clear writing, and honest documentation to make biotechnology and bioinformatics easier to approach.",
    "heroImage": "assets/diagrams/biochem-chronicles-introduction.svg",
    "tags": [
      "Science Communication",
      "Biotechnology",
      "Bioinformatics"
    ],
    "materials": [
      "Project notes",
      "Arduino project writeups",
      "Biotechnology and bioinformatics reading list",
      "GitHub Pages website files"
    ],
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub Pages"
    ],
    "skills": [
      "Science communication",
      "Portfolio writing",
      "Project documentation"
    ],
    "articleUrl": "articles/biochem-chronicles-introduction.html",
    "relatedProjects": [
      "blood-oxygen-heart-rate-monitor",
      "weather-station"
    ]
  },
  {
    "title": "Creating a Soil Moisture Meter",
    "slug": "soil-moisture-meter",
    "category": "Environmental Monitoring",
    "status": "Completed Prototype",
    "readingTime": "6 min read",
    "excerpt": "An Arduino-based soil moisture project that uses a capacitive sensor to understand watering needs and improve plant care decisions.",
    "heroImage": "assets/diagrams/soil-moisture-meter.svg",
    "tags": [
      "Arduino",
      "Environmental Monitoring",
      "Sensors"
    ],
    "materials": [
      "Arduino UNO",
      "Capacitive soil moisture sensor",
      "Breadboard",
      "Jumper wires",
      "LCD or OLED display",
      "USB cable or battery power source"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Sensor calibration",
      "Analog reading",
      "Environmental data collection"
    ],
    "articleUrl": "articles/soil-moisture-meter.html",
    "relatedProjects": [
      "weather-station",
      "air-quality-monitor"
    ]
  },
  {
    "title": "DIY Temperature Thermal Gun",
    "slug": "diy-thermal-gun",
    "category": "Health Monitoring",
    "status": "Completed Prototype",
    "readingTime": "6 min read",
    "excerpt": "A non-contact temperature project that uses an infrared sensor, Arduino, and display to explore how surface temperature can be measured.",
    "heroImage": "assets/diagrams/diy-thermal-gun.svg",
    "tags": [
      "Arduino",
      "Health Monitoring",
      "Infrared Sensor"
    ],
    "materials": [
      "Arduino UNO or compatible board",
      "Infrared temperature sensor such as MLX90614 or AMG8833",
      "OLED or LCD display",
      "Jumper wires",
      "Battery pack or USB power",
      "Optional enclosure",
      "Optional laser pointer for aiming"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Soldering iron if building a permanent version",
      "Multimeter if available"
    ],
    "skills": [
      "Infrared sensing",
      "Embedded programming",
      "Prototype testing"
    ],
    "articleUrl": "articles/diy-thermal-gun.html",
    "relatedProjects": [
      "blood-oxygen-heart-rate-monitor",
      "automatic-pill-dispenser"
    ]
  },
  {
    "title": "Blood Oxygen and Heart Rate Monitor",
    "slug": "blood-oxygen-heart-rate-monitor",
    "category": "Health Monitoring",
    "status": "Completed Prototype",
    "readingTime": "7 min read",
    "excerpt": "A MAX30102-based Arduino project that explores how pulse oximetry sensors estimate heart rate and blood oxygen trends.",
    "heroImage": "assets/diagrams/blood-oxygen-heart-rate-monitor.svg",
    "tags": [
      "Arduino",
      "Biosensors",
      "Health Monitoring"
    ],
    "materials": [
      "Arduino UNO R3",
      "MAX30102 pulse oximetry sensor module",
      "LCD 1602 or OLED display",
      "Breadboard",
      "Jumper wires",
      "USB cable or battery source"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Biosensor integration",
      "Signal interpretation",
      "Health data display"
    ],
    "articleUrl": "articles/blood-oxygen-heart-rate-monitor.html",
    "relatedProjects": [
      "diy-thermal-gun",
      "automatic-pill-dispenser"
    ]
  },
  {
    "title": "Automatic Pill Dispenser",
    "slug": "automatic-pill-dispenser",
    "category": "Assistive Technology",
    "status": "Completed Prototype",
    "readingTime": "7 min read",
    "excerpt": "A timer-based Arduino dispenser concept that uses a real-time clock, servo motor, display, buzzer, and LEDs to support medication reminders.",
    "heroImage": "assets/diagrams/automatic-pill-dispenser.svg",
    "tags": [
      "Arduino",
      "Assistive Technology",
      "Health Monitoring"
    ],
    "materials": [
      "Arduino UNO R3",
      "Pill organizer or compartment wheel",
      "Servo motor",
      "Real-time clock module",
      "LCD display",
      "Buzzer",
      "LEDs",
      "Jumper wires",
      "Power source"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Soldering iron if making a permanent build",
      "Multimeter if available"
    ],
    "skills": [
      "Timer logic",
      "Servo control",
      "Human-centered prototyping"
    ],
    "articleUrl": "articles/automatic-pill-dispenser.html",
    "relatedProjects": [
      "blood-oxygen-heart-rate-monitor",
      "smart-walking-stick"
    ]
  },
  {
    "title": "Building My Weather Station",
    "slug": "weather-station",
    "category": "Environmental Monitoring",
    "status": "Completed Prototype",
    "readingTime": "6 min read",
    "excerpt": "A local weather station using Arduino, a DHT11 sensor, RTC module, and display to track temperature and humidity.",
    "heroImage": "assets/diagrams/weather-station.svg",
    "tags": [
      "Arduino",
      "Environmental Monitoring",
      "Data Science"
    ],
    "materials": [
      "Arduino UNO",
      "DHT11 temperature and humidity sensor",
      "RTC module",
      "LCD or OLED display",
      "Breadboard",
      "Jumper wires",
      "USB cable or battery source"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Multi-sensor integration",
      "Time-stamped data",
      "Environmental data logging"
    ],
    "articleUrl": "articles/weather-station.html",
    "relatedProjects": [
      "soil-moisture-meter",
      "air-quality-monitor"
    ]
  },
  {
    "title": "Portable Air Quality Monitor",
    "slug": "air-quality-monitor",
    "category": "Environmental Monitoring",
    "status": "Completed Prototype",
    "readingTime": "7 min read",
    "excerpt": "An Arduino air quality monitoring prototype using DHT11 and MQ sensors to explore gas sensing, calibration, and environmental awareness.",
    "heroImage": "assets/diagrams/air-quality-monitor.svg",
    "tags": [
      "Arduino",
      "Environmental Monitoring",
      "Air Quality"
    ],
    "materials": [
      "Arduino UNO",
      "USB cable",
      "Breadboard",
      "Jumper wires",
      "DHT11 sensor",
      "MQ-3 sensor",
      "MQ-9 sensor",
      "MQ-135 sensor",
      "LCD or OLED display",
      "Optional buzzer or LED alert"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Gas sensor testing",
      "Calibration planning",
      "Environmental health awareness"
    ],
    "articleUrl": "articles/air-quality-monitor.html",
    "relatedProjects": [
      "weather-station",
      "soil-moisture-meter"
    ]
  },
  {
    "title": "Smart Walking Stick Using Arduino UNO",
    "slug": "smart-walking-stick",
    "category": "Assistive Technology",
    "status": "Completed Prototype",
    "readingTime": "7 min read",
    "excerpt": "An Arduino smart walking stick prototype that uses an HC-SR04 ultrasonic sensor, buzzer, and LED to detect nearby obstacles.",
    "heroImage": "assets/diagrams/smart-walking-stick.svg",
    "tags": [
      "Arduino",
      "Assistive Technology",
      "Ultrasonic Sensor"
    ],
    "materials": [
      "Arduino UNO",
      "HC-SR04 ultrasonic sensor",
      "DC buzzer",
      "LED",
      "9V battery with connector",
      "Jumper wires",
      "PVC pipe or walking stick",
      "Tape, glue, or mounting material"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Assistive technology prototyping",
      "Distance sensing",
      "Alert system design"
    ],
    "articleUrl": "articles/smart-walking-stick.html",
    "relatedProjects": [
      "automatic-pill-dispenser",
      "blood-oxygen-heart-rate-monitor"
    ]
  }
];

const PROJECT_DATA = [
  {
    "title": "Creating a Soil Moisture Meter",
    "slug": "soil-moisture-meter",
    "category": "Environmental Monitoring",
    "status": "Completed Prototype",
    "readingTime": "6 min read",
    "excerpt": "An Arduino-based soil moisture project that uses a capacitive sensor to understand watering needs and improve plant care decisions.",
    "heroImage": "assets/diagrams/soil-moisture-meter.svg",
    "tags": [
      "Arduino",
      "Environmental Monitoring",
      "Sensors"
    ],
    "materials": [
      "Arduino UNO",
      "Capacitive soil moisture sensor",
      "Breadboard",
      "Jumper wires",
      "LCD or OLED display",
      "USB cable or battery power source"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Sensor calibration",
      "Analog reading",
      "Environmental data collection"
    ],
    "articleUrl": "articles/soil-moisture-meter.html",
    "relatedProjects": [
      "weather-station",
      "air-quality-monitor"
    ]
  },
  {
    "title": "DIY Temperature Thermal Gun",
    "slug": "diy-thermal-gun",
    "category": "Health Monitoring",
    "status": "Completed Prototype",
    "readingTime": "6 min read",
    "excerpt": "A non-contact temperature project that uses an infrared sensor, Arduino, and display to explore how surface temperature can be measured.",
    "heroImage": "assets/diagrams/diy-thermal-gun.svg",
    "tags": [
      "Arduino",
      "Health Monitoring",
      "Infrared Sensor"
    ],
    "materials": [
      "Arduino UNO or compatible board",
      "Infrared temperature sensor such as MLX90614 or AMG8833",
      "OLED or LCD display",
      "Jumper wires",
      "Battery pack or USB power",
      "Optional enclosure",
      "Optional laser pointer for aiming"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Soldering iron if building a permanent version",
      "Multimeter if available"
    ],
    "skills": [
      "Infrared sensing",
      "Embedded programming",
      "Prototype testing"
    ],
    "articleUrl": "articles/diy-thermal-gun.html",
    "relatedProjects": [
      "blood-oxygen-heart-rate-monitor",
      "automatic-pill-dispenser"
    ]
  },
  {
    "title": "Blood Oxygen and Heart Rate Monitor",
    "slug": "blood-oxygen-heart-rate-monitor",
    "category": "Health Monitoring",
    "status": "Completed Prototype",
    "readingTime": "7 min read",
    "excerpt": "A MAX30102-based Arduino project that explores how pulse oximetry sensors estimate heart rate and blood oxygen trends.",
    "heroImage": "assets/diagrams/blood-oxygen-heart-rate-monitor.svg",
    "tags": [
      "Arduino",
      "Biosensors",
      "Health Monitoring"
    ],
    "materials": [
      "Arduino UNO R3",
      "MAX30102 pulse oximetry sensor module",
      "LCD 1602 or OLED display",
      "Breadboard",
      "Jumper wires",
      "USB cable or battery source"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Biosensor integration",
      "Signal interpretation",
      "Health data display"
    ],
    "articleUrl": "articles/blood-oxygen-heart-rate-monitor.html",
    "relatedProjects": [
      "diy-thermal-gun",
      "automatic-pill-dispenser"
    ]
  },
  {
    "title": "Automatic Pill Dispenser",
    "slug": "automatic-pill-dispenser",
    "category": "Assistive Technology",
    "status": "Completed Prototype",
    "readingTime": "7 min read",
    "excerpt": "A timer-based Arduino dispenser concept that uses a real-time clock, servo motor, display, buzzer, and LEDs to support medication reminders.",
    "heroImage": "assets/diagrams/automatic-pill-dispenser.svg",
    "tags": [
      "Arduino",
      "Assistive Technology",
      "Health Monitoring"
    ],
    "materials": [
      "Arduino UNO R3",
      "Pill organizer or compartment wheel",
      "Servo motor",
      "Real-time clock module",
      "LCD display",
      "Buzzer",
      "LEDs",
      "Jumper wires",
      "Power source"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Soldering iron if making a permanent build",
      "Multimeter if available"
    ],
    "skills": [
      "Timer logic",
      "Servo control",
      "Human-centered prototyping"
    ],
    "articleUrl": "articles/automatic-pill-dispenser.html",
    "relatedProjects": [
      "blood-oxygen-heart-rate-monitor",
      "smart-walking-stick"
    ]
  },
  {
    "title": "Building My Weather Station",
    "slug": "weather-station",
    "category": "Environmental Monitoring",
    "status": "Completed Prototype",
    "readingTime": "6 min read",
    "excerpt": "A local weather station using Arduino, a DHT11 sensor, RTC module, and display to track temperature and humidity.",
    "heroImage": "assets/diagrams/weather-station.svg",
    "tags": [
      "Arduino",
      "Environmental Monitoring",
      "Data Science"
    ],
    "materials": [
      "Arduino UNO",
      "DHT11 temperature and humidity sensor",
      "RTC module",
      "LCD or OLED display",
      "Breadboard",
      "Jumper wires",
      "USB cable or battery source"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Multi-sensor integration",
      "Time-stamped data",
      "Environmental data logging"
    ],
    "articleUrl": "articles/weather-station.html",
    "relatedProjects": [
      "soil-moisture-meter",
      "air-quality-monitor"
    ]
  },
  {
    "title": "Portable Air Quality Monitor",
    "slug": "air-quality-monitor",
    "category": "Environmental Monitoring",
    "status": "Completed Prototype",
    "readingTime": "7 min read",
    "excerpt": "An Arduino air quality monitoring prototype using DHT11 and MQ sensors to explore gas sensing, calibration, and environmental awareness.",
    "heroImage": "assets/diagrams/air-quality-monitor.svg",
    "tags": [
      "Arduino",
      "Environmental Monitoring",
      "Air Quality"
    ],
    "materials": [
      "Arduino UNO",
      "USB cable",
      "Breadboard",
      "Jumper wires",
      "DHT11 sensor",
      "MQ-3 sensor",
      "MQ-9 sensor",
      "MQ-135 sensor",
      "LCD or OLED display",
      "Optional buzzer or LED alert"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Gas sensor testing",
      "Calibration planning",
      "Environmental health awareness"
    ],
    "articleUrl": "articles/air-quality-monitor.html",
    "relatedProjects": [
      "weather-station",
      "soil-moisture-meter"
    ]
  },
  {
    "title": "Smart Walking Stick Using Arduino UNO",
    "slug": "smart-walking-stick",
    "category": "Assistive Technology",
    "status": "Completed Prototype",
    "readingTime": "7 min read",
    "excerpt": "An Arduino smart walking stick prototype that uses an HC-SR04 ultrasonic sensor, buzzer, and LED to detect nearby obstacles.",
    "heroImage": "assets/diagrams/smart-walking-stick.svg",
    "tags": [
      "Arduino",
      "Assistive Technology",
      "Ultrasonic Sensor"
    ],
    "materials": [
      "Arduino UNO",
      "HC-SR04 ultrasonic sensor",
      "DC buzzer",
      "LED",
      "9V battery with connector",
      "Jumper wires",
      "PVC pipe or walking stick",
      "Tape, glue, or mounting material"
    ],
    "tools": [
      "Arduino IDE",
      "Computer",
      "Basic hand tools",
      "Multimeter if available"
    ],
    "skills": [
      "Assistive technology prototyping",
      "Distance sensing",
      "Alert system design"
    ],
    "articleUrl": "articles/smart-walking-stick.html",
    "relatedProjects": [
      "automatic-pill-dispenser",
      "blood-oxygen-heart-rate-monitor"
    ]
  }
];

const EXPLAINER_DATA = [
  {
    "id": "blood-oxygen-heart-rate-monitor",
    "title": "Blood oxygen and heart rate sensor",
    "category": "Health Monitoring",
    "articleUrl": "articles/blood-oxygen-heart-rate-monitor.html",
    "materials": [
      "MAX30102 sensor",
      "Arduino",
      "Display",
      "Jumper wires"
    ],
    "simple": "Light readings from a fingertip are used to estimate pulse patterns.",
    "scientific": "The sensor collects photoplethysmography signals using red and infrared light. Motion and ambient light can make readings noisy.",
    "why": "It connects biology, optics, electronics, and health data in one small prototype.",
    "parts": [
      "Light emitter",
      "Photodetector",
      "Arduino processor",
      "Display output"
    ]
  },
  {
    "id": "soil-moisture-meter",
    "title": "Soil moisture system",
    "category": "Environmental Monitoring",
    "articleUrl": "articles/soil-moisture-meter.html",
    "materials": [
      "Capacitive sensor",
      "Arduino",
      "Display",
      "Soil sample"
    ],
    "simple": "A probe gives different readings in dry and wet soil.",
    "scientific": "The module output changes as the electrical properties around the probe change with moisture.",
    "why": "It shows how environmental conditions can be turned into useful data.",
    "parts": [
      "Soil probe",
      "Analog signal",
      "Arduino reading",
      "Moisture level"
    ]
  },
  {
    "id": "air-quality-monitor",
    "title": "Air quality monitor",
    "category": "Environmental Monitoring",
    "articleUrl": "articles/air-quality-monitor.html",
    "materials": [
      "DHT11 sensor",
      "MQ sensors",
      "Arduino",
      "Display"
    ],
    "simple": "Sensors respond to changes in the air and show rough air quality indicators.",
    "scientific": "MQ sensors change resistance in the presence of certain gases, but they need baseline calibration and careful interpretation.",
    "why": "Air quality links environmental data with public health awareness.",
    "parts": [
      "Air sample",
      "Gas sensor",
      "Baseline check",
      "Alert output"
    ]
  },
  {
    "id": "smart-walking-stick",
    "title": "Smart walking stick",
    "category": "Assistive Technology",
    "articleUrl": "articles/smart-walking-stick.html",
    "materials": [
      "HC-SR04 sensor",
      "Arduino",
      "Buzzer",
      "LED"
    ],
    "simple": "The sensor detects nearby objects and triggers an alert.",
    "scientific": "Ultrasonic pulses reflect from obstacles, and the echo time is used to estimate distance.",
    "why": "It shows how accessible technology can support safer movement when designed responsibly.",
    "parts": [
      "Obstacle",
      "Ultrasonic pulse",
      "Distance logic",
      "Alert"
    ]
  },
  {
    "id": "automatic-pill-dispenser",
    "title": "Automatic pill dispenser",
    "category": "Assistive Technology",
    "articleUrl": "articles/automatic-pill-dispenser.html",
    "materials": [
      "RTC module",
      "Servo motor",
      "Arduino",
      "Buzzer"
    ],
    "simple": "A schedule triggers a motor and reminder alert.",
    "scientific": "The real-time clock gives timing input, while the Arduino controls servo movement and user alerts.",
    "why": "It highlights how reliability and safety matter in health-support prototypes.",
    "parts": [
      "Schedule",
      "Controller",
      "Servo motion",
      "Reminder"
    ]
  },
  {
    "id": "weather-station",
    "title": "Weather station",
    "category": "Environmental Monitoring",
    "articleUrl": "articles/weather-station.html",
    "materials": [
      "DHT11 sensor",
      "RTC module",
      "Arduino",
      "Display"
    ],
    "simple": "The station reads temperature and humidity locally.",
    "scientific": "The sensor sends digital environmental data to the Arduino, and the RTC can attach a time stamp.",
    "why": "It turns everyday weather into a small data collection project.",
    "parts": [
      "Local air",
      "DHT11 sensor",
      "Time stamp",
      "Display"
    ]
  }
];

const EXPLAINER_COMPONENTS = {
  "blood-oxygen-heart-rate-monitor": [
    { "name": "MAX30102 sensor", "type": "sensor", "detail": "red and infrared light module" },
    { "name": "Arduino UNO", "type": "board", "detail": "microcontroller board" },
    { "name": "LCD display", "type": "display", "detail": "shows heart rate and SpO2 trends" },
    { "name": "Jumper wires", "type": "wires", "detail": "connects sensor, board, and display" }
  ],
  "soil-moisture-meter": [
    { "name": "Capacitive probe", "type": "probe", "detail": "sits in the soil sample" },
    { "name": "Arduino UNO", "type": "board", "detail": "reads the sensor signal" },
    { "name": "OLED or LCD", "type": "display", "detail": "shows the moisture reading" },
    { "name": "Breadboard", "type": "breadboard", "detail": "keeps the prototype rewritable" }
  ],
  "air-quality-monitor": [
    { "name": "MQ gas sensors", "type": "gas", "detail": "detects rough gas changes" },
    { "name": "DHT11 sensor", "type": "sensor", "detail": "tracks temperature and humidity" },
    { "name": "Arduino UNO", "type": "board", "detail": "processes all sensor readings" },
    { "name": "Alert output", "type": "alert", "detail": "display, LED, or buzzer" }
  ],
  "smart-walking-stick": [
    { "name": "HC-SR04 sensor", "type": "ultrasonic", "detail": "checks obstacle distance" },
    { "name": "Arduino UNO", "type": "board", "detail": "runs the distance logic" },
    { "name": "Buzzer and LED", "type": "alert", "detail": "warns when something is close" },
    { "name": "Walking stick body", "type": "enclosure", "detail": "holds the prototype parts" }
  ],
  "automatic-pill-dispenser": [
    { "name": "RTC module", "type": "clock", "detail": "keeps schedule time" },
    { "name": "Servo motor", "type": "servo", "detail": "moves the dispenser" },
    { "name": "Pill organizer", "type": "pill", "detail": "stores dose compartments" },
    { "name": "Buzzer and display", "type": "alert", "detail": "reminds the user" }
  ],
  "weather-station": [
    { "name": "DHT11 sensor", "type": "sensor", "detail": "reads temperature and humidity" },
    { "name": "RTC module", "type": "clock", "detail": "adds a time stamp" },
    { "name": "Arduino UNO", "type": "board", "detail": "processes local weather data" },
    { "name": "LCD or OLED", "type": "display", "detail": "shows current readings" }
  ]
};

const ARTICLE_FLOW_STEPS = {
  "blood-oxygen-heart-rate-monitor": [
    { title: "Finger contact", role: "Input", detail: "The fingertip sits steadily on the MAX30102 sensor so light can pass into the tissue and reflect back." },
    { title: "Light signal", role: "Sensor", detail: "Red and infrared light readings change with pulse-related blood volume changes." },
    { title: "Arduino processing", role: "Controller", detail: "The Arduino reads the sensor data and estimates heart rate and oxygen trend values for learning." },
    { title: "LCD reading", role: "Output", detail: "The display shows the values, with a reminder that this is not a medical device." }
  ],
  "soil-moisture-meter": [
    { title: "Soil sample", role: "Input", detail: "The probe is placed into soil so dry, damp, and wet conditions can be compared." },
    { title: "Moisture signal", role: "Sensor", detail: "The capacitive probe changes its output as moisture around it changes." },
    { title: "Arduino reading", role: "Controller", detail: "The Arduino reads the sensor value and converts it into a simple moisture level." },
    { title: "Display result", role: "Output", detail: "The screen shows a rough plant-care reading, with calibration notes kept in the project writeup." }
  ],
  "diy-thermal-gun": [
    { title: "Surface target", role: "Input", detail: "The sensor is pointed at a surface from a steady distance." },
    { title: "Infrared reading", role: "Sensor", detail: "The infrared sensor detects emitted heat from the surface." },
    { title: "Arduino conversion", role: "Controller", detail: "The Arduino converts the sensor output into a temperature reading." },
    { title: "Display check", role: "Output", detail: "The screen shows an approximate value for learning and comparison, not diagnosis." }
  ],
  "automatic-pill-dispenser": [
    { title: "Schedule set", role: "Input", detail: "The real-time clock provides the time for a reminder event." },
    { title: "Arduino logic", role: "Controller", detail: "The Arduino checks the schedule and decides when to trigger the dispenser." },
    { title: "Servo movement", role: "Action", detail: "The servo moves the organizer or compartment mechanism." },
    { title: "Reminder alert", role: "Output", detail: "The buzzer, LEDs, or display remind the user, with safety checks kept central." }
  ],
  "weather-station": [
    { title: "Local air", role: "Input", detail: "The sensor is placed in the environment being measured, away from direct heat or moisture." },
    { title: "DHT11 reading", role: "Sensor", detail: "The DHT11 captures temperature and humidity values." },
    { title: "Time stamp", role: "Controller", detail: "The Arduino and optional RTC organize readings with time context." },
    { title: "Display data", role: "Output", detail: "The screen shows current readings, which can later become logged data." }
  ],
  "air-quality-monitor": [
    { title: "Air sample", role: "Input", detail: "The sensors respond to the nearby air conditions around the prototype." },
    { title: "Gas response", role: "Sensor", detail: "MQ sensors change resistance when exposed to gases, but they need warm-up and calibration." },
    { title: "Arduino baseline", role: "Controller", detail: "The Arduino compares readings against a baseline instead of treating them as exact values." },
    { title: "Alert or display", role: "Output", detail: "The output gives a rough air-quality indicator for environmental awareness." }
  ],
  "smart-walking-stick": [
    { title: "Obstacle nearby", role: "Input", detail: "An object comes within range of the front-facing ultrasonic sensor." },
    { title: "Echo timing", role: "Sensor", detail: "The HC-SR04 sends a pulse and measures how long the echo takes to return." },
    { title: "Distance logic", role: "Controller", detail: "The Arduino estimates distance and checks whether it crosses the alert threshold." },
    { title: "Buzzer or LED", role: "Output", detail: "The alert warns that something is close, while testing stays supervised and safe." }
  ]
};

function renderComponentScene(item) {
  const components = EXPLAINER_COMPONENTS[item.id] || [];
  return `
    <div class="component-scene" role="img" aria-label="3D-style material layout for ${escapeHtml(item.title)}">
      <div class="scene-base"></div>
      <div class="setup-wire wire-1" aria-hidden="true"></div>
      <div class="setup-wire wire-2" aria-hidden="true"></div>
      <div class="setup-wire wire-3" aria-hidden="true"></div>
      ${components.map((component, index) => `
        <button type="button" class="component-object component-${escapeHtml(component.type)} component-${index + 1}" data-explainer="${item.id}" data-index="${index}">
          <span class="component-shape" aria-hidden="true"></span>
          <span class="component-name">${escapeHtml(component.name)}</span>
          <span class="component-detail">${escapeHtml(component.detail)}</span>
        </button>`).join("")}
    </div>`;
}

function getCurrentArticleSlug() {
  const fileName = window.location.pathname.split("/").pop() || "";
  return fileName.replace(".html", "");
}

function getMaterialType(name) {
  const value = name.toLowerCase();
  if (value.includes("arduino")) return "board";
  if (value.includes("breadboard")) return "breadboard";
  if (value.includes("jumper") || value.includes("wire")) return "wires";
  if (value.includes("display") || value.includes("lcd") || value.includes("oled")) return "display";
  if (value.includes("battery") || value.includes("usb") || value.includes("power")) return "power";
  if (value.includes("rtc") || value.includes("clock")) return "clock";
  if (value.includes("servo")) return "servo";
  if (value.includes("buzzer") || value.includes("led") || value.includes("alert")) return "alert";
  if (value.includes("pill")) return "pill";
  if (value.includes("stick") || value.includes("pipe") || value.includes("enclosure") || value.includes("mount")) return "enclosure";
  if (value.includes("soil") || value.includes("probe")) return "probe";
  if (value.includes("sensor") || value.includes("max") || value.includes("dht") || value.includes("mq") || value.includes("mlx") || value.includes("hc-sr04")) return "sensor";
  return "tool";
}

function renderMaterialIcon(type) {
  return `
    <span class="material-art material-art-${escapeHtml(type)}" aria-hidden="true">
      <span class="art-piece art-main"></span>
      <span class="art-piece art-accent"></span>
      <span class="art-piece art-pin art-pin-1"></span>
      <span class="art-piece art-pin art-pin-2"></span>
      <span class="art-piece art-pin art-pin-3"></span>
    </span>`;
}

function renderMaterialCard(name, index) {
  const type = getMaterialType(name);
  return `
    <article class="material-card reveal" style="--delay:${index}">
      ${renderMaterialIcon(type)}
      <div>
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(materialDescription(type))}</p>
      </div>
    </article>`;
}

function materialDescription(type) {
  const descriptions = {
    board: "The microcontroller that runs the code and coordinates the parts.",
    breadboard: "A reusable base for testing connections before making anything permanent.",
    wires: "The small connections that carry power and signals between components.",
    display: "The output screen that makes readings visible during testing.",
    power: "The power source or cable that keeps the prototype running.",
    clock: "The timing module used for schedules or time-stamped readings.",
    servo: "A small motor used to move part of the build.",
    alert: "A buzzer or light that turns sensor output into a visible or audible warning.",
    pill: "The storage part of the medication reminder prototype.",
    enclosure: "The physical body or mounting part that holds the build together.",
    probe: "The sensing part that touches the sample or environment.",
    sensor: "The part that detects a physical condition and turns it into data.",
    tool: "A supporting material used to build, mount, or document the prototype."
  };
  return descriptions[type] || descriptions.tool;
}

function renderArticleSetupScene(article) {
  const components = (EXPLAINER_COMPONENTS[article.slug] || article.materials.slice(0, 4).map((name) => ({
    name,
    type: getMaterialType(name),
    detail: materialDescription(getMaterialType(name))
  }))).slice(0, 4);
  return `
    <div class="article-setup-stage setup-${escapeHtml(article.slug)}" role="img" aria-label="3D-style construction view for ${escapeHtml(article.title)}">
      <div class="setup-floor"></div>
      <div class="setup-breadboard" aria-hidden="true"></div>
      <div class="setup-cable cable-a" aria-hidden="true"></div>
      <div class="setup-cable cable-b" aria-hidden="true"></div>
      <div class="setup-cable cable-c" aria-hidden="true"></div>
      ${components.map((component, index) => `
        <div class="setup-part setup-part-${index + 1} setup-part-${escapeHtml(component.type || getMaterialType(component.name))}">
          ${renderMaterialIcon(component.type || getMaterialType(component.name))}
          <strong>${escapeHtml(component.name)}</strong>
          <span>${escapeHtml(component.detail || materialDescription(component.type || getMaterialType(component.name)))}</span>
        </div>`).join("")}
    </div>`;
}

function getFlowSteps(article) {
  return ARTICLE_FLOW_STEPS[article.slug] || [
    { title: "Input", role: "Start", detail: "The project begins with a physical condition or user action." },
    { title: "Sensor reading", role: "Measure", detail: "The sensor turns that condition into a signal." },
    { title: "Arduino logic", role: "Process", detail: "The Arduino reads the signal and applies the project code." },
    { title: "Output", role: "Result", detail: "The display, alert, or data record shows the result." }
  ];
}

function renderInteractiveFlow(article) {
  const steps = getFlowSteps(article);
  return `
    <div class="interactive-flow" data-flow="${escapeHtml(article.slug)}">
      <div class="flow-steps" aria-label="Clickable build flow for ${escapeHtml(article.title)}">
        ${steps.map((step, index) => `
          <button type="button" class="flow-step ${index === 0 ? "active" : ""}" data-flow-step="${index}" aria-pressed="${index === 0 ? "true" : "false"}">
            <span class="flow-number">${index + 1}</span>
            <span class="flow-role">${escapeHtml(step.role)}</span>
            <strong>${escapeHtml(step.title)}</strong>
          </button>`).join("")}
      </div>
      <div class="flow-detail" id="flowDetail-${escapeHtml(article.slug)}" aria-live="polite">
        <span>${escapeHtml(steps[0].role)}</span>
        <h3>${escapeHtml(steps[0].title)}</h3>
        <p>${escapeHtml(steps[0].detail)}</p>
      </div>
    </div>`;
}

function setupInteractiveFlow(root, article) {
  const flow = root.querySelector(".interactive-flow");
  if (!flow) return;
  const detail = flow.querySelector(".flow-detail");
  const steps = getFlowSteps(article);
  flow.addEventListener("click", (event) => {
    const button = event.target.closest(".flow-step");
    if (!button) return;
    const index = Number(button.dataset.flowStep);
    const step = steps[index];
    if (!step || !detail) return;
    flow.querySelectorAll(".flow-step").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    detail.innerHTML = `<span>${escapeHtml(step.role)}</span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.detail)}</p>`;
  });
}

function setupArticleVisualSections() {
  if (!document.body.classList.contains("article-page")) return;
  if (document.querySelector(".article-materials-section")) return;
  const slug = getCurrentArticleSlug();
  const article = ARTICLE_DATA.find((item) => item.slug === slug);
  if (!article || slug === "biochem-chronicles-introduction") return;

  const heroFigure = document.querySelector(".article-figure");
  if (heroFigure) {
    heroFigure.classList.add("article-hero-materials");
    heroFigure.innerHTML = `
      <div class="hero-material-panel" aria-label="Animated materials preview for ${escapeHtml(article.title)}">
        ${article.materials.slice(0, 4).map((name, index) => renderMaterialCard(name, index)).join("")}
      </div>
      <figcaption>Animated material preview for this build. The full setup view appears below.</figcaption>`;
  }

  const articleBody = document.querySelector(".article-body");
  if (!articleBody) return;
  const buildSection = [...articleBody.querySelectorAll("section")].find((section) => {
    const heading = section.querySelector("h2");
    return heading && heading.textContent.toLowerCase().includes("step-by-step");
  });
  if (!buildSection) return;

  const visualBlock = document.createElement("div");
  visualBlock.className = "article-visual-inserts";
  visualBlock.innerHTML = `
    <section class="article-materials-section">
      <h2>Materials used</h2>
      <p>These are animated component-style visuals, not copied product photos. They are designed to show what each part does without using copyrighted product images.</p>
      <div class="material-showcase">
        ${article.materials.map((name, index) => renderMaterialCard(name, index)).join("")}
      </div>
    </section>
    <section class="article-setup-section">
      <h2>3D setup view</h2>
      <p>This construction view shows how the main parts sit together in the prototype: board, sensor, display or alert output, wires, and power.</p>
      ${renderArticleSetupScene(article)}
    </section>
    <section class="article-flow-section">
      <h2>Clickable build flow</h2>
      <p>Click each stage to see what happens at that point in the project.</p>
      ${renderInteractiveFlow(article)}
    </section>`;
  articleBody.insertBefore(visualBlock, buildSection);
  setupInteractiveFlow(visualBlock, article);
}


const CATEGORY_ALL = "All";

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function imagePathForPage(path) {
  const isArticlePage = document.body.classList.contains("article-page");
  return isArticlePage ? `../${path}` : path;
}

function renderArticleCard(article, options = {}) {
  const url = options.prefix ? options.prefix + article.articleUrl : article.articleUrl;
  const img = imagePathForPage(article.heroImage);
  return `
    <article class="article-card reveal" data-category="${escapeHtml(article.category)}" data-search="${escapeHtml((article.title + ' ' + article.category + ' ' + article.tags.join(' ') + ' ' + article.excerpt).toLowerCase())}">
      <a class="card-cover" href="${url}" aria-label="Read ${escapeHtml(article.title)}">
        <img src="${img}" alt="System diagram for ${escapeHtml(article.title)}" width="828" height="360" loading="lazy" />
      </a>
      <div class="card-content">
        <div class="card-meta"><span>${escapeHtml(article.category)}</span><span>${escapeHtml(article.status)}</span></div>
        <h3><a href="${url}">${escapeHtml(article.title)}</a></h3>
        <p>${escapeHtml(article.excerpt)}</p>
        <div class="tag-row small">${article.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <div class="card-footer"><span>${escapeHtml(article.readingTime)}</span><a class="text-link" href="${url}">Read article</a></div>
      </div>
    </article>`;
}

function renderFeaturedArticles() {
  const grid = document.getElementById("featuredArticlesGrid");
  if (!grid) return;
  const featured = ARTICLE_DATA.slice(0, 4);
  grid.innerHTML = featured.map((article) => renderArticleCard(article)).join("");
}

function statusClass(status) {
  if (status.toLowerCase().includes("completed")) return "status-completed";
  if (status.toLowerCase().includes("planned")) return "status-planned";
  return "status-progress";
}

function renderProjectFilters() {
  const bar = document.getElementById("projectFilterBar");
  if (!bar) return;
  const categories = [CATEGORY_ALL, ...new Set(PROJECT_DATA.map((project) => project.category))];
  bar.innerHTML = categories.map((category, index) => `<button type="button" class="filter-chip ${index === 0 ? 'active' : ''}" data-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("");
  bar.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    bar.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = filter !== CATEGORY_ALL && card.dataset.category !== filter;
    });
  });
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = PROJECT_DATA.map((project) => `
    <article class="project-card reveal" data-category="${escapeHtml(project.category)}">
      <div class="project-topline">
        <span>${escapeHtml(project.category)}</span>
        <span class="status-badge ${statusClass(project.status)}">${escapeHtml(project.status)}</span>
      </div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.excerpt)}</p>
      <div class="mini-list"><strong>Materials:</strong> ${project.materials.slice(0, 4).map(escapeHtml).join(', ')}</div>
      <div class="mini-list"><strong>Tools:</strong> ${project.tools.slice(0, 3).map(escapeHtml).join(', ')}</div>
      <div class="tag-row small">${project.skills.slice(0, 3).map((skill) => `<span>${escapeHtml(skill)}</span>`).join("")}</div>
      <p class="honesty-line">Prototype documentation. Not a professional or clinically validated device.</p>
      <a class="btn btn-secondary full-width" href="${project.articleUrl}">View full project</a>
    </article>`).join("");
}

function renderExplainers() {
  const list = document.getElementById("explainersList");
  if (!list) return;
  list.innerHTML = EXPLAINER_DATA.map((item) => `
    <article class="explainer-card reveal">
      <div class="explainer-model">
        ${renderComponentScene(item)}
      </div>
      <div class="explainer-copy">
        <p class="eyebrow">${escapeHtml(item.category)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.simple)}</p>
        <div class="explainer-detail" id="detail-${item.id}">
          <strong>Scientific explanation</strong>
          <p>${escapeHtml(item.scientific)}</p>
          <strong>Why it matters</strong>
          <p>${escapeHtml(item.why)}</p>
          <strong>Materials involved</strong>
          <p>${item.materials.map(escapeHtml).join(', ')}</p>
        </div>
        <a class="text-link" href="${item.articleUrl}">Open full article</a>
      </div>
    </article>`).join("");

  list.addEventListener("click", (event) => {
    const button = event.target.closest(".component-object");
    if (!button) return;
    const item = EXPLAINER_DATA.find((entry) => entry.id === button.dataset.explainer);
    if (!item) return;
    const component = (EXPLAINER_COMPONENTS[item.id] || [])[Number(button.dataset.index)];
    if (!component) return;
    const detail = document.getElementById(`detail-${item.id}`);
    detail.innerHTML = `<strong>${escapeHtml(component.name)}</strong><p>${escapeHtml(component.detail)}</p><strong>How this part fits in</strong><p>${escapeHtml(item.simple)}</p><strong>Scientific explanation</strong><p>${escapeHtml(item.scientific)}</p><strong>Why it matters</strong><p>${escapeHtml(item.why)}</p>`;
    button.closest(".component-scene").querySelectorAll(".component-object").forEach((componentButton) => componentButton.classList.remove("active"));
    button.classList.add("active");
  });
}

function setupArticleIndex() {
  const grid = document.getElementById("articleIndexGrid");
  const search = document.getElementById("articleSearch");
  const filterBar = document.getElementById("articleFilterBar");
  const empty = document.getElementById("articleEmptyState");
  if (!grid || !search || !filterBar || !empty) return;

  const categories = [CATEGORY_ALL, ...new Set(ARTICLE_DATA.map((article) => article.category))];
  filterBar.innerHTML = categories.map((category, index) => `<button type="button" class="filter-chip ${index === 0 ? 'active' : ''}" data-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("");

  let activeFilter = CATEGORY_ALL;
  function update() {
    const term = search.value.trim().toLowerCase();
    const matches = ARTICLE_DATA.filter((article) => {
      const matchesFilter = activeFilter === CATEGORY_ALL || article.category === activeFilter;
      const text = `${article.title} ${article.category} ${article.tags.join(' ')} ${article.excerpt}`.toLowerCase();
      const matchesSearch = !term || text.includes(term);
      return matchesFilter && matchesSearch;
    });
    grid.innerHTML = matches.map((article) => renderArticleCard(article)).join("");
    empty.hidden = matches.length > 0;
    setupReveal();
  }

  search.addEventListener("input", update);
  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    filterBar.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    update();
  });
  update();
}

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function setupBackToTop() {
  const button = document.getElementById("backToTop");
  if (!button) return;
  window.addEventListener("scroll", () => button.classList.toggle("show", window.scrollY > 600));
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupReadingProgress() {
  const bar = document.getElementById("readingProgress");
  if (!bar) return;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = `${pct}%`;
  }
  window.addEventListener("scroll", update);
  update();
}

function setupCopyLink() {
  const button = document.querySelector(".copy-link");
  if (!button) return;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      button.textContent = "Link copied";
      setTimeout(() => { button.textContent = "Copy article link"; }, 1800);
    } catch (error) {
      button.textContent = "Copy failed";
      setTimeout(() => { button.textContent = "Copy article link"; }, 1800);
    }
  });
}

function setupYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedArticles();
  renderProjectFilters();
  renderProjects();
  renderExplainers();
  setupArticleIndex();
  setupArticleVisualSections();
  setupNav();
  setupBackToTop();
  setupReadingProgress();
  setupCopyLink();
  setupYear();
  setupReveal();
});
