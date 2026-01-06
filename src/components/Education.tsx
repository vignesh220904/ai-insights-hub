import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BadgeCheck } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      institution: "Dhaanish Ahmed College of Engineering",
      location: "Chennai",
      degree: "Bachelor of Technology (Artificial Intelligence and Data Science)",
      score: "CGPA: 8.22",
      current: true
    },
    {
      institution: "Thiru vi ka Higher Secondary School",
      location: "Shenoy Nagar",
      degree: "Higher Secondary Education",
      score: "HSE – 72.5% | SSLC – 73.5%"
    }
  ];

  const certifications = [
    "IBM – Generative AI",
    "Naan Mudhalvan - AWS",
    "MongoDB Basics",
    "NPTEL – Python",
    "Infosys Springboard – Machine Learning",
    "Full Stack Development (TNSDC)",
    "AWS Cloud Practitioner"
  ];

  const awards = [
    "2nd Runner Up – TECHFLIX Event, DMI College of Engineering",
    "1st Place – Dhaanish Festember '24 Talent Hunt (MOZHI '24)"
  ];

  return (
    <section id="education" className="relative py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display font-semibold text-lg">{edu.institution}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{edu.location}</p>
                      <p className="text-foreground/80">{edu.degree}</p>
                      <p className="text-primary font-medium mt-2">{edu.score}</p>
                    </div>
                    {edu.current && (
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                        Current
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 mt-10 mb-6"
            >
              <Award className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl font-semibold">Awards</h3>
            </motion.div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={award}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50"
                >
                  <span className="text-primary">🏆</span>
                  <p className="text-muted-foreground">{award}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <BadgeCheck className="w-6 h-6 text-accent" />
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-glass rounded-xl p-6"
            >
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <motion.span
                    key={cert}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 rounded-full text-sm bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
