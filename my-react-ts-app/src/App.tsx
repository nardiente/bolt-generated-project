// App.tsx
import React, { useState } from 'react';
import ModerationSettings from './components/ModerationSettings'; // Adjust path if needed
import { ModerationSetting, ModerationOption } from './components/settings'; // Adjust path if needed

const App: React.FC = () => {
  // ... (State variables for settings and options remain the same as before) ...

  const handleSettingChange = (setting: ModerationSetting) => {
    setSettings((prevSettings) =>
      prevSettings.map((s) => (s.label === setting.label ? setting : s))
    );
  };

  const handleOptionChange = (option: ModerationOption) => {
    setOptions((prevOptions) =>
      prevOptions.map((o) => (o.label === option.label ? option : o))
    );
  };

  return (
    <div className="App">
      <ModerationSettings
        settings={settings}
        options={options}
        onSettingChange={handleSettingChange}
        onOptionChange={handleOptionChange}
      />
    </div>
  );
};

export default App;
