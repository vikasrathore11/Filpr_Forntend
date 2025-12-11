import { useState } from "react";

function AdminSettings() {
  const [adminName, setAdminName] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    // API call to save settings
    console.log({ adminName, email, password, darkMode, notifications });
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>

      {/* Profile Settings */}
      <section className="mb-6 bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
        <input
          type="text"
          placeholder="Admin Name"
          className="w-full p-3 border rounded mb-3"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full p-3 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 border rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </section>

      {/* Preferences */}
      <section className="mb-6 bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
        <label className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="w-4 h-4"
          />
          Enable Dark Mode
        </label>
        <label className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-4 h-4"
          />
          Email Notifications
        </label>
      </section>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Save Settings
      </button>
    </div>
  );
}

export default AdminSettings;
