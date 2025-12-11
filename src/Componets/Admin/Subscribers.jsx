import { useEffect, useState } from "react";

function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [email, setEmail] = useState("");
  const [editingSubscriber, setEditingSubscriber] = useState(null);

  const API_BASE = import.meta.env.VITE_BACKEND_URL;

  // Fetch All Subscribers
  const getSubscribers = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/subscribers`);
      const data = await res.json();
      setSubscribers(Array.isArray(data) ? data : []); // backend message check
    } catch (err) {
      console.error("Error fetching subscribers:", err);
    }
  };

  useEffect(() => {
    getSubscribers();
  }, []);

  // CREATE or UPDATE
  const handleSubmit = async () => {
    if (  !email) {
      alert("Please fill all fields.");
      return;
    }

    const subscriberData = {  email };
    let url = `${API_BASE}/api/admin/subscribers`;
    let method = "POST";

    if (editingSubscriber) {
      url = `${API_BASE}/api/admin/subscribers/${editingSubscriber.id}`;
      method = "PUT";
    }

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriberData),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", text);
        alert("Error while saving subscriber");
        return;
      }

      alert(editingSubscriber ? "Subscriber Updated!" : "Subscriber Added!");

      setEmail("");
      setEditingSubscriber(null);
      getSubscribers();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // DELETE
  const deleteSubscriber = async (id) => {
    if (!confirm("Are you sure?")) return;

    try {
      const res = await fetch(`${API_BASE}/api/admin/subscribers/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Delete error:", text);
        alert("Failed to delete subscriber");
        return;
      }

      getSubscribers();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // EDIT MODE
  const handleEdit = (subscriber) => {
    setEditingSubscriber(subscriber);
    setEmail(subscriber.email);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Subscriber Management</h1>

      {/* Form */}
      <div className="bg-white p-5 rounded shadow w-full md:w-1/2 mb-8">
        <h2 className="font-semibold text-lg mb-3">
          {editingSubscriber ? "Edit Subscriber" : "Add Subscriber"}
        </h2>


        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingSubscriber ? "Update" : "Add"}
        </button>

        {editingSubscriber && (
          <button
            onClick={() => {
              setEditingSubscriber(null);
              setEmail("");
            }}
            className="ml-3 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Subscriber Table */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Eail</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {subscribers.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan="3">
                  No Subscribers Found
                </td>
              </tr>
            ) : (
              subscribers.map((subscriber) => (
                <tr key={subscriber.id} className="border-b">
                  <td className="p-2">{subscriber.name}</td>
                  <td className="p-2">{subscriber.email}</td>
                  <td className="p-2 flex gap-3">
                    <button
                      onClick={() => handleEdit(subscriber)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSubscriber(subscriber.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Subscribers;
