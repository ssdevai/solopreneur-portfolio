
import {
  Package,
  Code,
  BrainCircuit,
  BarChart,
  Megaphone,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSkills } from '@/hooks/useSkills';

const Skills = () => {
  const { data: skills, isLoading, error } = useSkills();

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      Package,
      Code,
      BrainCircuit,
      BarChart,
      Megaphone,
    };
    return icons[iconName] || Package;
  };

  if (isLoading) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">Loading skills...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center text-red-600">Error loading skills</div>
        </div>
      </section>
    );
  }

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
          {skills?.map((category) => {
            const Icon = getIconComponent(category.icon || 'Package');
            return (
              <Card
                key={category.id}
                className="bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <CardHeader className="flex-row items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <ul className="space-y-3">
                    {category.skill_list.map((skill) => (
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
