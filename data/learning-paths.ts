export const LEARNING_PATHS = [
  {
    id: 1,
    name: "Foundations",
    description:
      "Welcome to our foundational Parkour lesson, where safety and fundamental skills take center stage. Explore the essential techniques with a strong emphasis on safety.",
    skills: [
      {
        id: 1,
        name: "Precision jump",
        description:
          "Learn the art of making precise jumps from one point to another.",
        mainImage: "precision_jump.jpg",
        taskImages: [
          require("../assets/images/placeholder.jpg"),
          require("../assets/images/placeholder.jpg"),
        ],
        tasks: [
          {
            name: "Drop to a 90 degree squat while bringing your arms behind you",
            completed: false,
          },
          { name: "Balance on the balls of your feet", completed: false },
        ],
        rating: null,
      },
      {
        id: 2,
        name: "Parkour roll",
        description:
          "Master the technique of rolling safely after a jump or fall.",
        mainImage: "parkour_roll.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
      {
        id: 3,
        name: "Cat Hang",
        description:
          "Learn how to hang from a ledge with your hands and feet, and how to safely drop down from a height.",
        mainImage: "cat_hang.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
      {
        id: 4,
        name: "Height Drop",
        description:
          "Learn how to safely drop from a height, and absorb your landing.",
        mainImage: "height_drop.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
      {
        id: 5,
        name: "Balance",
        description:
          "Learn how to balance on a rail, ledge, or other narrow surface.",
        mainImage: "balance.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
    ],
  },
  {
    id: 2,
    name: "Beginner",
    description:
      "Start your Parkour journey with the basics. Learn the most common ways to clear obstacles in your path.",
    skills: [
      {
        id: 1,
        name: "Kong vault",
        description:
          "Learn the most common vault technique, the Kong vault, which is used to clear obstacles in your path.",
        mainImage: "kong_vault.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
      {
        id: 2,
        name: "Wall run",
        description:
          "Learn how to run up a wall and use it to propel yourself to a higher point.",
        mainImage: "wall_run.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
      {
        id: 3,
        name: "Speed vault",
        description:
          "Learn how to clear an obstacle by vaulting over it with one hand.",
        mainImage: "speed_vault.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
      {
        id: 4,
        name: "Underbar",
        description:
          "Learn how to clear an obstacle by passing under it with your feet first.",
        mainImage: "underbar.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
      {
        id: 5,
        name: "Dash vault",
        description:
          "Learn how to clear an obstacle by vaulting over it with both hands.",
        mainImage: "dash_vault.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
      {
        id: 6,
        name: "Lazy vault",
        description:
          "Learn how to clear an obstacle by vaulting over it with one hand.",
        mainImage: "lazy_vault.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
      {
        id: 7,
        name: "Reverse vault",
        description:
          "Learn how to clear an obstacle by vaulting over it with one hand.",
        mainImage: "reverse_vault.jpg",
        taskImages: [],
        tasks: [
          { name: "Task 1", completed: false },
          { name: "Task 2", completed: false },
        ],
        rating: null,
      },
    ],
  },
  {
    id: 3,
    name: "Intermediate",
    skills: [],
  },
  {
    id: 4,
    name: "Advanced",
    skills: [],
  },
];
