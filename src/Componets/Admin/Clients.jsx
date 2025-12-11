// import { useEffect, useState } from "react";

// function Clients() {
//   const [clients, setClients] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [image, setImage] = useState(null);
//   const [description, setDescription] = useState("");
//   const [editingClient, setEditingClient] = useState(null);

//   const API_BASE = import.meta.env.VITE_BACKEND_URL;

//   // Fetch All Clients
//   const getClients = async () => {
//     const res = await fetch(`${API_BASE}/api/clients`);
//     const data = await res.json();
//     setClients(data);
//   };

//   useEffect(() => {
//     getClients();
//   }, []);

//   // CREATE or UPDATE
//   const handleSubmit = async () => {
//   if (!name || !email) {
//     alert("Please fill all fields.");
//     return;
//   }

// const formData = new FormData();

// // अगर description, email और name चाहिए तो सब include करो
// const clientJson = JSON.stringify({ name, email, description });

// // Append only once
// formData.append("client", clientJson);

// // Optional: image
// if (image) formData.append("image", image);


//   if (image) formData.append("image", image);

//   let url = `${API_BASE}/api/admin/clients`;
//   let method = "POST";

//   if (editingClient) {
//     url = `${API_BASE}/api/admin/clients/${editingClient.id}`;
//     method = "PUT";
//   }

//   try {
//     const res = await fetch(url, {
//       method,
//       body: formData, // ✅ No Content-Type header!
//     });

//     if (!res.ok) {
//       const text = await res.text();
//       console.error("Backend error:", text);
//       alert("Error while saving client");
//       return;
//     }

//     alert(editingClient ? "Client Updated!" : "Client Added!");

//     setName("");
//     setEmail("");
//     setImage(null);
//     setEditingClient(null);
//     getClients();
//   } catch (err) {
//     console.error(err);
//     alert("Something went wrong");
//   }
// };


//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Client Management</h1>

//       {/* Form */}
//       <div className="bg-white p-5 rounded shadow w-full md:w-1/2 mb-8">
//         <h2 className="font-semibold text-lg mb-3">
//           {editingClient ? "Edit Client" : "Add Client"}
//         </h2>

//         <input
//           type="text"
//           placeholder="Enter Name"
//           className="w-full p-3 border rounded mb-3"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Enter Email"
//           className="w-full p-3 border rounded mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <textarea
//   placeholder="Enter Description"
//   className="w-full p-3 border rounded mb-3"
//   value={description}
//   onChange={(e) => setDescription(e.target.value)}
// />


//         <input
//           type="file"
//           className="w-full p-2 border rounded mb-3"
//           onChange={(e) => setImage(e.target.files[0])}
//         />

//         <button
//           onClick={handleSubmit}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           {editingClient ? "Update" : "Add"}
//         </button>

//         {editingClient && (
//           <button
//             onClick={() => {
//               setEditingClient(null);
//               setName("");
//               setEmail("");
//               setImage(null);
//             }}
//             className="ml-3 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//         )}
//       </div>

//       {/* Client Table */}
//       <div className="bg-white p-4 rounded shadow overflow-x-auto">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="border-b">
//               <th className="p-2">Image</th>
//               <th className="p-2">Name</th>
//               <th className="p-2">Email</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {clients.length === 0 ? (
//               <tr>
//                 <td className="p-4 text-center" colSpan="4">
//                   No Clients Found
//                 </td>
//               </tr>
//             ) : (
//               clients.map((client) => (
//                 <tr key={client.id} className="border-b">
//                   <td className="p-2">
//                     {client.imageUrl ? (
//                       <img
//                         src={client.imageUrl}
//                         alt="client"
//                         className="h-12 w-12 rounded object-cover"
//                       />
//                     ) : (
//                       "No Image"
//                     )}
//                   </td>

//                   <td className="p-2">{client.name}</td>
//                   <td className="p-2">{client.email}</td>

//                   <td className="p-2 flex gap-3">
//                     <button
//                       onClick={() => handleEdit(client)}
//                       className="text-blue-600 hover:underline"
//                     >
//                       Edit
//                     </button>

//                     <button
//                       onClick={() => deleteClient(client.id)}
//                       className="text-red-600 hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Clients;


import { useEffect, useState } from "react";

function Clients() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editingClient, setEditingClient] = useState(null);

  const API_BASE = import.meta.env.VITE_BACKEND_URL;

  // Fetch All Clients
  const getClients = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/clients`);
      const data = await res.json();
      setClients(data);
    } catch (err) {
      console.error("Error fetching clients:", err);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  // CREATE or UPDATE
  const handleSubmit = async () => {
    if (!name) {
      alert("Please enter the name.");
      return;
    }

    const formData = new FormData();
    const clientJson = JSON.stringify({ name, description });
    formData.append("client", clientJson);

    if (image) formData.append("image", image);

    let url = `${API_BASE}/api/admin/clients`;
    let method = "POST";

    if (editingClient) {
      url = `${API_BASE}/api/admin/clients/${editingClient.id}`;
      method = "PUT";
    }

    try {
      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", text);
        alert("Error while saving client");
        return;
      }

      alert(editingClient ? "Client Updated!" : "Client Added!");

      // Reset form
      setName("");
      setDescription("");
      setImage(null);
      setEditingClient(null);
      getClients();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // DELETE
  const deleteClient = async (id) => {
    if (!confirm("Are you sure?")) return;

    try {
      await fetch(`${API_BASE}/api/admin/clients/${id}`, {
        method: "DELETE",
      });
      getClients();
    } catch (err) {
      console.error(err);
      alert("Failed to delete client");
    }
  };

  // EDIT MODE
  const handleEdit = (client) => {
    setEditingClient(client);
    setName(client.name);
    setDescription(client.description || "");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Client Management</h1>

      {/* Form */}
      <div className="bg-white p-5 rounded shadow w-full md:w-1/2 mb-8">
        <h2 className="font-semibold text-lg mb-3">
          {editingClient ? "Edit Client" : "Add Client"}
        </h2>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-3 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Enter Description"
          className="w-full p-3 border rounded mb-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="file"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingClient ? "Update" : "Add"}
        </button>

        {editingClient && (
          <button
            onClick={() => {
              setEditingClient(null);
              setName("");
              setDescription("");
              setImage(null);
            }}
            className="ml-3 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Client Table */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Description</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan="4">
                  No Clients Found
                </td>
              </tr>
            ) : (
              clients.map((client) => (
                <tr key={client.id} className="border-b">
                  <td className="p-2">
                    {client.imageUrl ? (
                      <img
                        src={client.imageUrl}
                        alt="client"
                        className="h-12 w-12 rounded object-cover"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="p-2">{client.name}</td>
                  <td className="p-2">{client.description}</td>
                  <td className="p-2 flex gap-3">
                    <button
                      onClick={() => handleEdit(client)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteClient(client.id)}
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

export default Clients;
