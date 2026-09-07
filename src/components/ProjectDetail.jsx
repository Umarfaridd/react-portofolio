import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from './Projects';

export default function ProjectDetail({ projectId }) {
  const project = projects[Number(projectId)];

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-20 text-center text-gray-800">
        <h1 className="mb-6 text-3xl font-bold">Project tidak ditemukan</h1>
        <button onClick={() => window.history.back()} className="text-blue-600 hover:text-blue-800">
          Kembali ke portfolio
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 text-gray-800">
      <div className="mx-auto max-w-4xl">
        <button onClick={() => window.history.back()}
          className="mb-8 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft size={18} />
          Kembali ke projects
        </button>

        <article className="overflow-hidden rounded-xl bg-white shadow-lg">
          <img src={project.image} alt={project.title} className="h-80 w-full object-cover" />
          <div className="p-8">
            <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
            <p className="mb-6 text-gray-600">{project.description}</p>
            {project.detail && <p className="mb-6 leading-relaxed text-gray-700">{project.detail}</p>}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.features?.length > 0 && (
                  <div>
                    <h2 className="mb-3 text-xl font-bold">Fitur Project</h2>
                    <ul className="mb-8 list-disc space-y-2 pl-5 text-gray-700">
                      {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                  </div>
                )}
                {project.demo && (
                  <div>
                    <h2 className="mb-3 text-xl font-bold">Demo Project</h2>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-8 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                      <ExternalLink size={16} />
                      Link to Demo Project
                    </a>
                  </div>
                )}
            </div>
            {project.gallery?.length > 0 && (
              <div>
                <h2 className="mb-3 text-xl font-bold">Foto Project</h2>
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((photo, index) => (
                    <img key={`${project.title}-${index}`} src={photo} alt={`${project.title} ${index + 1}`} className="h-auto w-full rounded-lg object-cover" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
