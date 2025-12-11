import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editingProject, setEditingProject] = useState(null);

  const API_BASE = import.meta.env.VITE_BACKEND_URL;

  // Fetch all projects
  const getProjects = async () => {
    const res = await fetch(`${API_BASE}/api/admin/projects`);
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  // Create or Update
  const handleSubmit = async () => {
    if (!name) {
      alert("Project name is required");
      return;
    }

    const formData = new FormData();
    const projectJson = JSON.stringify({ name, description });
    formData.append("project", projectJson);
    if (image) formData.append("image", image);

    let url = `${API_BASE}/api/admin/projects`;
    let method = "POST";

    if (editingProject) {
      url = `${API_BASE}/api/admin/projects/${editingProject.id}`;
      method = "PUT";
    }

    try {
      const res = await fetch(url, { method, body: formData });
      if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", text);
        alert("Error while saving project");
        return;
      }

      alert(editingProject ? "Project updated!" : "Project added!");
      setName("");
      setDescription("");
      setImage(null);
      setEditingProject(null);
      getProjects();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // Delete
  const deleteProject = async (id) => {
    if (!confirm("Are you sure?")) return;
    await fetch(`${API_BASE}/api/admin/projects/${id}`, { method: "DELETE" });
    getProjects();
  };

  // Edit mode
  const handleEdit = (project) => {
    setEditingProject(project);
    setName(project.name);
    setDescription(project.description || "");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Project Management</h1>

      {/* Form */}
      <div className="bg-white p-5 rounded shadow w-full md:w-1/2 mb-8">
        <h2 className="font-semibold text-lg mb-3">
          {editingProject ? "Edit Project" : "Add Project"}
        </h2>

        <input
          type="text"
          placeholder="Project Name"
          className="w-full p-3 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
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
          {editingProject ? "Update" : "Add"}
        </button>

        {editingProject && (
          <button
            onClick={() => {
              setEditingProject(null);
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

      {/* Projects Table */}
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
            {projects.length === 0 ? (
              <tr>
                <td className="p-4 text-center" colSpan="4">
                  No projects found
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project.id} className="border-b">
                  <td className="p-2">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="h-12 w-12 rounded object-cover"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="p-2">{project.name}</td>
                  <td className="p-2">{project.description}</td>
                  <td className="p-2 flex gap-3">
                    <button
                      onClick={() => handleEdit(project)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
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

export default Projects;
