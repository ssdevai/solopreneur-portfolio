
import {
  Package,
  Code,
  BrainCircuit,
  BarChart,
  Megaphone,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Development",
      skills: [
        "MVP Development",
        "SaaS Architecture",
        "User Experience Design",
        "Product Strategy",
        "Market Validation",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: Package,
    },
    {
      title: "Technical Stack",
      skills: [
        "React/Next.js",
        "Node.js/Python",
        "PostgreSQL/MongoDB",
        "AWS/Vercel",
        "Stripe/Payment APIs",
      ],
      color: "from-purple-500 to-pink-500",
      icon: Code,
    },
    {
      title: "AI & Automation",
      skills: [
        "AI Agent Development",
        "n8n Workflow Automation",
        "OpenAI/Claude Integration",
        "Prompt Engineering",
        "Custom AI Solutions",
      ],
      color: "from-emerald-500 to-teal-500",
      icon: BrainCircuit,
    },
    {
      title: "Business Operations",
      skills: [
        "Revenue Optimization",
        "Customer Acquisition",
        "Analytics & Metrics",
        "A/B Testing",
        "Customer Support",
      ],
      color: "from-green-500 to-teal-500",
      icon: BarChart,
    },
    {
      title: "Growth & Marketing",
      skills: [
        "SEO Optimization",
        "Content Marketing",
        "Email Automation",
        "Social Media",
        "Community Building",
      ],
      color: "from-orange-500 to-red-500",
      icon: Megaphone,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Solo Stack Mastery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            The complete skill set needed to build, launch, and scale AI-powered
            software products independently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <CardHeader className="flex-row items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-gray-600 flex items-start"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
