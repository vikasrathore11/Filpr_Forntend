import { useEffect, useState } from "react";

/**
 * Project.jsx
 * - Fetches projects from backend
 * - Shows skeleton while loading
 * - Responsive grid of cards with nicer design, hover overlay and CTA
 */

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/projects");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    // Simple skeleton loader grid
    return (
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-xl shadow p-4 h-64" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600">No projects available at the moment. Check back soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Our Projects</h2>
          <p className="text-sm text-gray-600">Hand-picked work & case studies</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* image container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.imageUrl || "/default-project.jpg"}
                  alt={project.name || "Project image"}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => (e.currentTarget.src = "/default-project.jpg")}
                />

                {/* overlay content on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <span className="inline-block bg-orange-500 text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                      {project.tag || "Featured"}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-sky-700 mb-1">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {project.description || "No description available."}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {project.location ? <span>{project.location}</span> : <span>Location N/A</span>}
                  </div>

                  <div className="flex gap-2 items-center">
                    <a
                      href={project.imageUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-sky-600 text-white px-3 py-1 rounded-lg hover:bg-sky-700 transition"
                    >
                
                    </a>
                    <button
                      type="button"
                      className="text-sm border border-sky-600 text-sky-600 px-3 py-1 rounded-lg hover:bg-sky-50 transition"
                      onClick={() => {
                        // placeholder for action (open modal / navigate)
                        window.alert(`Open details for "${project.name}"`);
                      }}
                    >
                     Read More
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
