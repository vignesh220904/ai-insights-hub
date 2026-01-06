import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering data-driven solutions that create real business impact."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "Combining technical expertise with creative thinking to innovate."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with strong communication and adaptability."
    }
  ];

  return (
    <section id="about" className="relative py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm an enthusiastic Artificial Intelligence & Data Science undergraduate with a strong passion for 
              building intelligent systems that solve real-world problems. Currently pursuing my B.Tech at 
              Dhaanish Ahmed College of Engineering, Chennai.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey spans across AI, Machine Learning, Data Analytics, and Digital Marketing. 
              I love exploring the intersection of technology and creativity, which reflects in my 
              hobbies of video editing, poster designing, and content creation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm eager to apply my technical expertise and creative skills to drive operational efficiency 
              and business growth in progressive organizations.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
