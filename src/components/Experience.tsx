import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Retech Solutions",
      location: "Chennai",
      period: "Feb 2024 – Mar 2024",
      points: [
        "Developed a real-time emotion recognition model for video content using AI",
        "Gained hands-on experience in human expression analysis and applied ML"
      ]
    },
    {
      company: "CodSoft",
      location: "Online",
      period: "Mar 2024 – Apr 2024",
      points: [
        "Built Python-based ML projects focusing on data preprocessing and predictive modeling",
        "Strengthened practical ML skills in solving real-world problems"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 md:-translate-x-1/2 glow-effect z-10" />

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-semibold text-xl">{exp.company}</h3>
                  </div>
                  
                  <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span>{exp.location}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className={`text-primary mt-1.5 ${index % 2 === 0 ? "md:order-2" : ""}`}>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
