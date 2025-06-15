
const Skills = () => {
  const skillCategories = [
    {
      title: "Product Development",
      skills: ["MVP Development", "SaaS Architecture", "User Experience Design", "Product Strategy", "Market Validation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Technical Stack",
      skills: ["React/Next.js", "Node.js/Python", "PostgreSQL/MongoDB", "AWS/Vercel", "Stripe/Payment APIs"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Operations",
      skills: ["Revenue Optimization", "Customer Acquisition", "Analytics & Metrics", "A/B Testing", "Customer Support"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Growth & Marketing",
      skills: ["SEO Optimization", "Content Marketing", "Email Automation", "Social Media", "Community Building"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Solo Stack Mastery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            The complete skill set needed to build, launch, and scale software products independently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
