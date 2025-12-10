import { useEffect, useState } from "react";

function HappyClient() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/clients");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading clients...</div>;
  }

  if (clients.length === 0) {
    return <div className="text-center py-16">No clients found.</div>;
  }

  return (
    <section className="flex flex-wrap justify-center gap-10 py-16 px-4 bg-gray-50">
      {clients.map((client, i) => (
        <div
          key={i}
          className="bg-white w-56 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center p-4"
        >
          <div className="w-28 h-28 mx-auto mb-3">
            <img
              src={client.imageUrl || "/default-client.jpg"}
              alt={client.name}
              className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow"
            />
          </div>
          <h4 className="text-blue-600 font-semibold text-lg">{client.name}</h4>
          <p className="text-gray-600 text-sm mb-3">{client.description}</p>
          <button className="bg-orange-500 text-white font-bold px-4 py-1 rounded-full hover:bg-orange-600 transition text-sm">
            Read More
          </button>
        </div>
      ))}
    </section>
  );
}

export default HappyClient;
