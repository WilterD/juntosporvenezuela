import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Code, Database, ExternalLink, Info, MapPin, Search, SlidersHorizontal, X } from 'lucide-react';
import { projectsData } from './data';
import './index.css';

const staticSubcategories = [
  'Familiar',
  'Rescatista',
  'Damnificado',
  'Voluntario',
  'Médico',
  'Psicólogo',
  'Ingeniero',
  'Veterinario',
  'Operador',
  'Donante',
];


const apiFields = [
  ['id', 'number', 'Identificador único del proyecto.'],
  ['name', 'string', 'Nombre visible de la iniciativa.'],
  ['thumbnail', 'string', 'Ruta pública de la imagen principal para renderizar tarjetas.'],
  ['description', 'string', 'Resumen corto para tarjetas y listados.'],
  ['fullDescription', 'string', 'Descripción extendida para páginas de detalle.'],
  ['url', 'string', 'Enlace oficial del proyecto.'],
  ['hasApi', 'boolean', 'Indica si la iniciativa declara API o integración pública.'],
  ['apiUrl', 'string', 'URL de documentación, bot, repositorio o endpoint API cuando existe.'],
  ['images', 'string[]', 'Galería pública de imágenes del proyecto.'],
  ['category', 'string', 'Categoría principal.'],
  ['subcategories', 'string[]', 'Tipos de personas beneficiadas o roles relacionados.'],
  ['order', 'number', 'Prioridad de ordenamiento sugerida.'],
  ['tags', 'string[]', 'Etiquetas libres para búsqueda y filtros.'],
];

function ApiDocumentation({ categories, subcategories, tags }) {
  const apiBaseUrl = `${window.location.origin}/api/projects.json`;
  const exampleProject = projectsData.find((project) => project.hasApi) || projectsData[0];

  return (
    <div className="app-shell min-h-screen bg-background relative overflow-hidden">
      <div className="safari-blur absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="safari-blur absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <nav className="relative z-20 w-full px-6 pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between max-w-7xl mx-auto">
        <a href="#/" className="inline-flex items-center justify-center px-5 py-2.5 bg-white/80 text-primary font-semibold rounded-full border border-primary/20 shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors">
          ← Volver al directorio
        </a>
        <a href={apiBaseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
          <Database className="w-4 h-4" /> Abrir JSON
        </a>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <section className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide">
            <Code className="w-4 h-4" /> API pública
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-5">
            Documentación API de Juntos por Venezuela
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Consume el catálogo completo para mostrar tarjetas, detalles, categorías, subcategorías, etiquetas y metadatos de las iniciativas en otras aplicaciones, mapas, bots o agregadores humanitarios.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="glass-card rounded-3xl p-6 border border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-4">Endpoint disponible</h2>
            <div className="rounded-2xl bg-foreground text-white p-4 overflow-x-auto text-sm font-mono mb-5">
              GET {apiBaseUrl}
            </div>
            <p className="text-foreground/70 leading-relaxed mb-4">
              La respuesta es JSON estático y no requiere autenticación. Puedes descargarla desde navegador, frontend, backend, workflows o herramientas de automatización.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-primary/5 p-4 border border-primary/10">
                <p className="text-3xl font-extrabold text-primary">{projectsData.length}</p>
                <p className="text-sm text-foreground/60 font-semibold">proyectos</p>
              </div>
              <div className="rounded-2xl bg-primary/5 p-4 border border-primary/10">
                <p className="text-3xl font-extrabold text-primary">{categories.length}</p>
                <p className="text-sm text-foreground/60 font-semibold">categorías</p>
              </div>
              <div className="rounded-2xl bg-primary/5 p-4 border border-primary/10">
                <p className="text-3xl font-extrabold text-primary">{tags.length}</p>
                <p className="text-sm text-foreground/60 font-semibold">etiquetas</p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-3xl p-6 border border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ejemplo rápido</h2>
            <pre className="rounded-2xl bg-slate-950 text-slate-100 p-4 overflow-x-auto text-xs leading-relaxed">{`const res = await fetch('${apiBaseUrl}');
const data = await res.json();

const cards = data.projects.map((project) => ({
  title: project.name,
  image: project.thumbnail,
  url: project.url,
  tags: project.tags,
}));`}</pre>
          </section>
        </div>

        <section className="glass-card rounded-3xl p-6 border border-border/50 mt-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Estructura de respuesta</h2>
          <pre className="rounded-2xl bg-slate-950 text-slate-100 p-4 overflow-x-auto text-xs leading-relaxed">{JSON.stringify({
            meta: { name: 'Juntos por Venezuela API', version: '1.0.0', totalProjects: projectsData.length },
            categories,
            subcategories,
            tags: tags.slice(0, 6),
            projects: [exampleProject],
          }, null, 2)}</pre>
        </section>

        <section className="glass-card rounded-3xl p-6 border border-border/50 mt-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Campos de cada proyecto</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-foreground/60 uppercase tracking-wide text-xs border-b border-border">
                <tr><th className="py-3 pr-4">Campo</th><th className="py-3 pr-4">Tipo</th><th className="py-3">Descripción</th></tr>
              </thead>
              <tbody className="divide-y divide-border/70">
                {apiFields.map(([field, type, description]) => (
                  <tr key={field}>
                    <td className="py-3 pr-4 font-mono font-bold text-primary">{field}</td>
                    <td className="py-3 pr-4 font-mono text-foreground/70">{type}</td>
                    <td className="py-3 text-foreground/70">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3 mt-6">
          {[
            ['Categorías', categories],
            ['Subcategorías', subcategories],
            ['Etiquetas', tags],
          ].map(([title, values]) => (
            <div key={title} className="glass-card rounded-3xl p-6 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => <span key={value} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">{value}</span>)}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedSubcategory, setSelectedSubcategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isApiDocumentation = currentHash === '#/api';

  const allCategories = useMemo(() => Array.from(new Set(projectsData.map((p) => p.category).filter(Boolean))).sort(), []);
  const allSubcategories = useMemo(() => Array.from(new Set(projectsData.flatMap((p) => p.subcategories || []))).sort(), []);
  const allTags = useMemo(() => Array.from(new Set(projectsData.flatMap((p) => p.tags || []))).sort(), []);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return projectsData
      .filter((project) => {
        const matchesSearch = [
          project.name,
          project.description,
          project.fullDescription,
          project.category,
          ...(project.subcategories || []),
        ]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(normalizedSearch));

        const matchesCategory =
          selectedCategory === 'Todas' || project.category === selectedCategory;

        const matchesSubcategory =
          selectedSubcategory === 'Todos' ||
          (project.subcategories || []).includes(selectedSubcategory);

        return matchesSearch && matchesCategory && matchesSubcategory;
      })
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  if (isApiDocumentation) {
    return (
      <ApiDocumentation
        categories={allCategories}
        subcategories={allSubcategories}
        tags={allTags}
      />
    );
  }

  const hasActiveFilters =
    searchTerm || selectedCategory !== 'Todas' || selectedSubcategory !== 'Todos';

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Todas');
    setSelectedSubcategory('Todos');
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowFullDescription(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowFullDescription(false);
  };

  return (
    <div className="app-shell min-h-screen bg-background relative overflow-hidden">
      <div className="safari-blur absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="safari-blur absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <nav className="relative z-20 w-full px-6 pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between max-w-7xl mx-auto">
        <a
          href="#/api"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/80 text-primary font-semibold rounded-full border border-primary/20 shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          Documentación API
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJS1l8bEX_ewBamPc-L-DfKMUUjIqLqT2qsnJjSP2oRpBd9A/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          Proponer proyecto
        </a>
      </nav>

      <header className="pt-8 pb-12 px-6 relative z-10 text-center">
        <div className="hero-content max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide">
            Juntos por Venezuela
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Iniciativas Tech <br /> <span className="text-primary">Venezuela</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Plataforma dedicada a dar visibilidad a los proyectos web y tecnológicos venezolanos creados para asistir y brindar apoyo tras los recientes eventos sísmicos.
          </p>

          <div className="max-w-5xl mx-auto glass-panel rounded-[2rem] p-4 sm:p-5 shadow-xl shadow-primary/5 border border-border/50">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-foreground/40 group-focus-within:text-primary transition-colors">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-border/50 bg-white/80 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-lg"
                placeholder="Buscar por proyecto, categoría o etiqueta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="mt-5 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70">
                  <SlidersHorizontal className="w-4 h-4 text-primary" />
                  Filtros rápidos para clasificar iniciativas
                </div>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors self-start sm:self-auto"
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] font-bold text-foreground/50 mb-2">
                    Categoría
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Todas', ...allCategories].map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${selectedCategory === category
                            ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                            : 'bg-white/70 text-foreground/70 border-border hover:border-primary/40 hover:text-primary'
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] font-bold text-foreground/50 mb-2">
                    Tipo de persona beneficiada
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Todos', ...staticSubcategories].map((subcategory) => (
                      <button
                        key={subcategory}
                        type="button"
                        onClick={() => setSelectedSubcategory(subcategory)}
                        className={`px-3.5 py-2 rounded-full text-sm font-semibold border transition-all ${selectedSubcategory === subcategory
                            ? 'bg-foreground text-white border-foreground shadow-lg shadow-foreground/10'
                            : 'bg-white/70 text-foreground/70 border-border hover:border-foreground/30 hover:text-foreground'
                          }`}
                      >
                        {subcategory}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-foreground/60">
                Mostrando <span className="font-bold text-foreground">{filteredProjects.length}</span> de{' '}
                <span className="font-bold text-foreground">{projectsData.length}</span> iniciativas.
              </p>
            </div>
          </div>
        </div>
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
                  className="project-card w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
                  style={{ '--card-index': index }}
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
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.category && (
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                            {project.category}
                          </span>
                        )}
                        {(project.subcategories || [])
                          .slice(0, 3)
                          .map((subcategory) => (
                            <span
                              key={subcategory}
                              className="px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/60 text-xs font-semibold"
                            >
                              {subcategory}
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
                <p className="text-foreground/60">Intenta con otros términos de búsqueda o limpia los filtros activos.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="relative z-10 w-full py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <a href="#/api" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
            <BookOpen className="w-4 h-4" /> Documentación API
          </a>
          <span className="hidden sm:inline text-foreground/30">•</span>
          <p className="text-foreground/70 font-medium">
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
        </div>
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
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.category && (
                        <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">
                          {selectedProject.category}
                        </span>
                      )}
                      {(selectedProject.subcategories || []).map((subcategory) => (
                        <span
                          key={subcategory}
                          className="px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/70 text-sm font-semibold"
                        >
                          {subcategory}
                        </span>
                      ))}
                    </div>

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
