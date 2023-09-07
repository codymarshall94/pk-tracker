import React, { createContext, useContext, useState } from "react";

type SkillContextType = {
  selectedSkill: any;
  selectSkill: (skill: any) => void;
};

const SkillContext = createContext<SkillContextType>({
  selectedSkill: null,
  selectSkill: () => {},
});

export function SkillProvider({ children }: { children: React.ReactNode }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const selectSkill = (skill: any) => {
    setSelectedSkill(skill);
  };

  return (
    <SkillContext.Provider value={{ selectedSkill, selectSkill }}>
      {children}
    </SkillContext.Provider>
  );
}

export function useSkill() {
  return useContext(SkillContext);
}
