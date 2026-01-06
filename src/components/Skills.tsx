import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming & Domain",
      skills: ["Python", "Java", "MySQL"],
      color: "primary"
    },
    {
      title: "Libraries & Frameworks",
      skills: ["NumPy", "Pandas", "Scikit-Learn"],
      color: "accent"
    },
    {
      title: "Data Visualization & BI",
      skills: ["Power BI", "Excel", "Matplotlib"],
      color: "primary"
    },
    {
      title: "AI Tools",
      skills: ["ChatGPT", "Gemini", "Replit"],
      color: "accent"
    },
    {
      title: "Professional Skills",
      skills: ["Problem Solving", "Teamwork", "Adaptability"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="relative py-20 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className={`font-display font-semibold text-lg mb-4 ${category.color === 'accent' ? 'gradient-text-accent' : 'gradient-text'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
