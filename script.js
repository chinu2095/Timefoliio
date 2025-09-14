"use client"
import { motion } from "framer-motion"

const projects = [
  { title: "Lostly.ch", image: "/lostly.jpg" },
  { title: "BelArosa Chalet", image: "/belarosa.jpg" },
  { title: "Vitality Cards", image: "/vitality.jpg" },
  { title: "Tavolago AG", image: "/tavolago.jpg" },
]
const container = document.getElementById('.spany');

const ProjectGrid = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">
                Short description of the project goes here.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

container.innerHTML = ProjectGrid();

export default ProjectGrid
