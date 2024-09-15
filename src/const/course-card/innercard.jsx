// import "./CardCourse.css";

export default function InnerCard({user}) {
    const products = [
        {
          id: 1,
          name: "AWS Certified Solutions Architect",
          href: "#",
          status: "48%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "AWS Certified Solutions Architect course thumbnail.",
        },
        {
          id: 2,
          name: "Introduction to Python Programming",
          href: "#",
          status: "40%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Introduction to Python Programming course thumbnail.",
        },
        {
          id: 3,
          name: "Data Science with R",
          href: "#",
          status: "60%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Data Science with R course thumbnail.",
        },
        {
          id: 4,
          name: "Full Stack Web Development",
          href: "#",
          status: "70%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Full Stack Web Development course thumbnail.",
        },
        {
          id: 5,
          name: "Machine Learning Basics",
          href: "#",
          status: "55%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Machine Learning Basics course thumbnail.",
        },
        {
          id: 6,
          name: "React for Beginners",
          href: "#",
          status: "80%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "React for Beginners course thumbnail.",
        },
        {
          id: 7,
          name: "Advanced JavaScript",
          href: "#",
          status: "65%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Advanced JavaScript course thumbnail.",
        },
        {
          id: 8,
          name: "Web Design Principles",
          href: "#",
          status: "50%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Web Design Principles course thumbnail.",
        },
        {
          id: 9,
          name: "Cybersecurity Essentials",
          href: "#",
          status: "45%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Cybersecurity Essentials course thumbnail.",
        },
        {
          id: 10,
          name: "Introduction to Cloud Computing",
          href: "#",
          status: "75%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Introduction to Cloud Computing course thumbnail.",
        },
        {
          id: 11,
          name: "SQL for Data Analysis",
          href: "#",
          status: "85%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "SQL for Data Analysis course thumbnail.",
        },
        {
          id: 12,
          name: "Ethical Hacking 101",
          href: "#",
          status: "30%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Ethical Hacking 101 course thumbnail.",
        },
        {
          id: 13,
          name: "Introduction to DevOps",
          href: "#",
          status: "60%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Introduction to DevOps course thumbnail.",
        },
        {
          id: 14,
          name: "iOS Development with Swift",
          href: "#",
          status: "70%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "iOS Development with Swift course thumbnail.",
        },
        {
          id: 15,
          name: "Android App Development",
          href: "#",
          status: "90%",
          imageSrc: "images/coursecard-thumbnail.png",
          imageAlt: "Android App Development course thumbnail.",
        },
      ];
      
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-16">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group border-2 border-gray-400 rounded-md p-4">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {/* {product.price} */}
                <h2>Status of completion</h2>
              </p>
              <div className="w-11/12 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full mt-4"
                  style={{ width: `${product.status}`}}
                ></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
