export const TEST_DATA = {
  vaults: {
    beginner: [
      {
        name: "Safety Vault",
        level: "Beginner",
        prerequisite: "None",
        description:
          "The safety vault is a basic vault used to clear obstacles smoothly.",
        tasks: [
          "Approach the obstacle at a moderate running pace.",
          "Place one hand on the obstacle's edge, palm down.",
          "Swing your legs over the obstacle, keeping your body horizontal.",
          "Clear the obstacle and land on your feet on the other side.",
        ],
      },
      {
        name: "Lazy Vault",
        level: "Beginner",
        prerequisite: "Safety Vault",
        description:
          "The lazy vault is a beginner vault that builds upon the safety vault.",
        tasks: [
          "Approach the obstacle at a moderate running pace.",
          "Execute a safety vault but let your trailing leg follow behind.",
          "Clear the obstacle and land on your feet on the other side.",
        ],
      },
      {
        name: "Kong Vault",
        level: "Beginner",
        prerequisite: "None",
        description:
          "The kong vault is an intermediate vault used to clear longer obstacles.",
        tasks: [
          "Approach the obstacle at a moderate running pace.",
          "Dive over the obstacle with both hands, tucking your knees close to your chest.",
          "Kick your legs out as you pass over the obstacle, keeping your body parallel to the ground.",
          "Clear the obstacle and land on your feet on the other side.",
        ],
      },
    ],
  },
};
