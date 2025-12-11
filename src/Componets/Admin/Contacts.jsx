import { useEffect, useState } from "react";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [editingContact, setEditingContact] = useState(null);

  const API_BASE = import.meta.env.VITE_BACKEND_URL;

  // Fetch All Contacts
  const getContacts = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/contacts`);
      if (res.status === 204) {
        setContacts([]);
        return;
      }
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  // CREATE or UPDATE
  const handleSubmit = async () => {
    if (!fullName || !email || !phone || !city) {
      alert("Please fill all fields.");
      return;
    }

    const contactData = { fullName, email, phone, city };
    let url = `${API_BASE}/api/admin/contacts`;
    let method = "POST";

    if (editingContact) {
      url = `${API_BASE}/api/admin/contacts/${editingContact.id}`;
      method = "PUT";
    }

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", text);
        alert("Error while saving contact");
        return;
      }

      const responseData = await res.json();
      alert(editingContact ? "Contact Updated!" : responseData.message || "Contact Added!");

      setFullName("");
      setEmail("");
      setPhone("");
      setCity("");
      setEditingContact(null);
      getContacts();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // DELETE
  const deleteContact = async (id) => {
    if (!confirm("Are you sure?")) return;

    try {
      const res = await fetch(`${API_BASE}/api/admin/contacts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Delete error:", text);
        alert("Failed to delete contact");
        return;
      }

      alert("Deleted successfully!");
      getContacts();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // EDIT MODE
  const handleEdit = (contact) => {
    setEditingContact(contact);
    setFullName(contact.fullName);
    setEmail(contact.email);
    setPhone(contact.phone);
    setCity(contact.city);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Management</h1>

      {/* Form */}
      <div className="bg-white p-5 rounded shadow w-full md:w-1/2 mb-8">
        <h2 className="font-semibold text-lg mb-3">
          {editingContact ? "Edit Contact" : "Add Contact"}
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded mb-3"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone"
          className="w-full p-3 border rounded mb-3"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          className="w-full p-3 border rounded mb-3"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingContact ? "Update" : "Add"}
        </button>

        {editingContact && (
          <button
            onClick={() => {
              setEditingContact(null);
              setFullName("");
              setEmail("");
              setPhone("");
              setCity("");
            }}
            className="ml-3 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Contact Table */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Full Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">City</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan="5">
                  No Contacts Found
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact.id} className="border-b">
                  <td className="p-2">{contact.fullName}</td>
                  <td className="p-2">{contact.email}</td>
                  <td className="p-2">{contact.phone}</td>
                  <td className="p-2">{contact.city}</td>
                  <td className="p-2 flex gap-3">
                    <button
                      onClick={() => handleEdit(contact)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteContact(contact.id)}
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

export default Contacts;
