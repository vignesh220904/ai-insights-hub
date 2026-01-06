import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Brain, Palette, MessageSquare } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: BarChart3,
      title: "Power BI Dashboard",
      description: "Built interactive reports with filters & visuals for data-driven decisions.",
      tags: ["Power BI", "Data Visualization", "Analytics"],
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI-Based Internship Recommendation System",
      description: "AI system to suggest personalized internships based on user profiles. (SIH Project)",
      tags: ["Python", "Machine Learning", "AI"],
      color: "accent"
    },
    {
      icon: Palette,
      title: "KolamKraft",
      description: "AI system to analyze and create traditional Kolam designs. (SIH Project)",
      tags: ["AI", "Computer Vision", "Culture Tech"],
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "Rule-Based Chatbot",
      description: "Keyword-based chatbot for automated responses and customer support.",
      tags: ["Python", "NLP", "Automation"],
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group card-glass rounded-xl p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className={`inline-flex p-4 rounded-xl mb-6 ${
                project.color === 'accent' 
                  ? 'bg-accent/10 text-accent' 
                  : 'bg-primary/10 text-primary'
              } group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-8 h-8" />
              </div>

              <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
