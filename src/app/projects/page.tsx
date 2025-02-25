import Image from "next/image";

interface ProjectsProps {
  title: string
  description: string
  imageUrl: string
}

export default function Projects() {
  const projects: ProjectsProps[] = [
    {
      title: 'SEO Campaign for Company Alfa',
      description: 'Optimization strategy to increase visibility on Google.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1668902223932-672a0dfbc21b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Website Redesign for Company Betta',
      description: 'New design focused on user experience and conversion.',
      imageUrl: 'https://images.unsplash.com/photo-1667840578922-98e2a31aff95?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Social Media Management for Company Gamma',
      description: 'Content creation and social media management for the brand.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1668902223840-4f29626b25c3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center text-gray-800">
        <h1 className="text-5xl font-extrabold mb-12 font-[family-name:--font-fraunces]">
          Our Projects
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="transform transition-transform hover:scale-105 duration-300 ease-in-out bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col items-center">

              <Image
                src={project.imageUrl}
                alt={project.title}
                width={376}
                height={267}
              />


              <div className="p-6">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href="#"
                  className="inline-block text-teal-500 font-semibold hover:text-teal-700 transition-colors duration-200"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
