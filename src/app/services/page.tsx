import Image from "next/image";

interface ServicesProps {
  title: string
  description: string
  imageUrl: string
}


export default function Services() {
  const services: ServicesProps[] = [
    {
      title: "Social Media Management",
      description: "Boost your brand's presence with strategies focused on engagement and reach on social media.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1683977922495-3ab3ce7ba4e6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SEO and Search Marketing",
      description: "Improve your website's ranking with effective SEO and search marketing techniques",
      imageUrl: "https://images.unsplash.com/photo-1709281847780-2b34c28853c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Content Creation",
      description: "Create impactful content for blogs, websites, and social media that attracts and converts.",
      imageUrl: "https://images.unsplash.com/photo-1686061594179-4ac2edf0e13c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Digital Advertising",
      description: "Paid ads on platforms like Google Ads and Facebook Ads to precisely reach your target audience.",
      imageUrl: "https://images.unsplash.com/photo-1610376096719-9819725cfb00?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Digital Marketing Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={service.imageUrl}
                alt={service.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}