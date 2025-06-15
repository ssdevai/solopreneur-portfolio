
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">The Solo Advantage</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Building Software Products That Generate Revenue
            </h3>
            <p className="text-gray-600 leading-relaxed">
              As a solo software entrepreneur, I combine deep technical expertise with 
              business acumen to create profitable software products. I've successfully 
              launched multiple SaaS applications, understanding both the code and the 
              market forces that drive sustainable growth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My lean approach means faster decision-making, direct communication, and 
              cost-effective solutions. I focus on building MVPs that validate market 
              demand quickly, then scale based on real user feedback and revenue metrics.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">$2M+</div>
                <div className="text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600">Products Launched</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop"
                alt="Software development workspace"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
