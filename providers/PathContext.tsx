import React, { createContext, useContext, useState } from "react";
import { LEARNING_PATHS } from "../data/learning-paths";

type LearningPath = {
  id: number;
  description?: string;
  name: string;
  skills: any[];
};

type PathContextType = {
  selectedPath: LearningPath | null;
  selectPath: (pathId: number) => void;
};

const PathContext = createContext<PathContextType>({
  selectedPath: null,
  selectPath: () => {},
});

export function PathProvider({ children }: { children: React.ReactNode }) {
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);

  const selectPath = (pathId: number) => {
    const path = LEARNING_PATHS.find((path) => path.id === pathId) || null;
    setSelectedPath(path);
  };

  return (
    <PathContext.Provider value={{ selectedPath, selectPath }}>
      {children}
    </PathContext.Provider>
  );
}

export function usePath() {
  return useContext(PathContext);
}
