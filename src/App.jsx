import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, X, MapPin, Info, Tag } from 'lucide-react';
import { projectsData } from './data';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    projectsData.forEach((project) => project.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, []);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    return projectsData
      .filter((project) => {
        const matchesSearch =
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.every((tag) => project.tags.includes(tag));
        return matchesSearch && matchesTags;
      })
      .sort((a, b) => a.order - b.order);
  }, [searchTerm, selectedTags]);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowFullDescription(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowFullDescription(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <nav className="relative z-20 w-full px-6 pt-6 flex justify-end max-w-7xl mx-auto">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJS1l8bEX_ewBamPc-L-DfKMUUjIqLqT2qsnJjSP2oRpBd9A/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          Proponer proyecto
        </a>
      </nav>

      <header className="pt-8 pb-12 px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide">
            Juntos por Venezuela
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Iniciativas Tech <br /> <span className="text-primary">Venezuela</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Plataforma dedicada a dar visibilidad a los proyectos web y tecnológicos venezolanos creados para asistir y brindar apoyo tras los recientes eventos sísmicos.
          </p>

          <div className="relative max-w-xl mx-auto group mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-foreground/40 group-focus-within:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-border/50 glass-panel text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-lg shadow-lg shadow-primary/5"
              placeholder="Buscar proyectos, refugios, asistencia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20'
                    : 'bg-card text-foreground/70 border-border/50 hover:border-primary/50 hover:text-foreground'
                }`}
              >
                <Tag className="w-3.5 h-3.5" />
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="flex flex-wrap justify-center gap-8">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={project.id}
                  className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
                >
                  <div
                    onClick={() => openModal(project)}
                    className="glass-card rounded-3xl overflow-hidden cursor-pointer group h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:shadow-primary/10 border border-border/50"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-medium flex items-center gap-2">
                          <Info className="w-5 h-5" /> Ver detalles
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-start justify-between mb-3 gap-2">
                        <h3 className="text-2xl font-bold text-foreground leading-tight">{project.name}</h3>
                        {project.hasApi && (
                          <div className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-xs font-semibold border border-green-200" title="API Pública Disponible">
                            <span>✅ API</span>
                          </div>
                        )}
                      </div>
                      <p className="text-foreground/70 line-clamp-3 mb-4 flex-grow text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full py-20 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">No se encontraron proyectos</h3>
                <p className="text-foreground/60">Intenta con otros términos de búsqueda.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="relative z-10 w-full py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto text-center">
        <p className="text-foreground/70 font-medium text-sm">
          Desarrollado por{' '}
          <a
            href="https://github.com/WilterD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            WilterD
          </a>
        </p>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 overflow-y-auto z-50 pointer-events-none flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-3xl glass-card bg-card rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
              >
                <div className="relative h-64 sm:h-80 shrink-0">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedProject.name}</h2>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Iniciativa Nacional, Venezuela</span>
                      </div>
                    </div>
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-lg"
                      title="Visitar Proyecto"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <ExternalLink className="w-5 h-5 text-primary shrink-0" />
                        <a
                          href={selectedProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:underline truncate"
                        >
                          {selectedProject.url}
                        </a>
                      </div>

                      {selectedProject.hasApi && (
                        <div className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
                          <span className="text-lg shrink-0">✅</span>
                          <div className="flex flex-col overflow-hidden">
                            <span className="text-green-800 font-semibold text-sm">API Pública</span>
                            <a
                              href={selectedProject.apiUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-600 text-xs hover:underline truncate"
                            >
                              {selectedProject.apiUrl}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Sobre el proyecto</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {selectedProject.description}
                      </p>

                      <AnimatePresence>
                        {showFullDescription && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-foreground/80 leading-relaxed mt-4">
                              {selectedProject.fullDescription}
                            </p>

                            {selectedProject.images && selectedProject.images.length > 0 && (
                              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {selectedProject.images.map((img, idx) => (
                                  <img
                                    key={idx}
                                    src={img}
                                    alt={`Gallery ${idx + 1}`}
                                    className="w-full h-48 object-cover rounded-xl shadow-sm border border-border/50"
                                  />
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!showFullDescription && (
                        <button
                          onClick={() => setShowFullDescription(true)}
                          className="mt-4 text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                        >
                          Ver más detalles
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
