import React from 'react';

const SettingsTabs = ({
    activeTab,
    setActiveTab
}) => {
    return (
        <div className={"tg-settings-edit__tab-box"}>
      <div
        className={
          activeTab === "profile_settings"
            ? "tg-settings-edit__tab--active"
            : "tg-settings-edit__tab"
        }
        onClick={() => {
          setActiveTab("profile_settings");
        }}
      >
        Account Settings
      </div>
      <div
        className={
          activeTab === "user_settings"
            ? "tg-settings-edit__tab--active"
            : "tg-settings-edit__tab"
        }
        onClick={() => {
          setActiveTab("user_settings");
        }}
      >
        User Settings
      </div>
    </div>
    )
}

export default SettingsTabs;
