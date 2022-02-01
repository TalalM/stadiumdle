import { useCallback, useState } from "react";

export interface SettingsData {
  noImageMode: boolean;
  rotationMode: boolean;
  distanceUnit: "km" | "miles";
}

const defaultSettingsData: SettingsData = {
  noImageMode: false,
  rotationMode: false,
  distanceUnit: "km",
};

function loadSettings(): SettingsData {
  const storedSettings = localStorage.getItem("settings");
  const settingsData = storedSettings != null ? JSON.parse(storedSettings) : {};
  return {
    ...defaultSettingsData,
    ...settingsData,
  };
}

export function useSettings(): [
  SettingsData,
  (newSettings: Partial<SettingsData>) => void
] {
  const [settingsData, setSettingsData] = useState<SettingsData>(
    loadSettings()
  );

  const updateSettingsData = useCallback(
    (newSettings: Partial<SettingsData>) => {
      const updatedSettings = {
        ...settingsData,
        ...newSettings,
      };

      setSettingsData(updatedSettings);
      localStorage.setItem("settings", JSON.stringify(updatedSettings));
    },
    []
  );

  return [settingsData, updateSettingsData];
}