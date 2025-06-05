import "./Funding.css";

const FranchiseServices = [
  {
    id: 1,
    title: "Get the Franchise Funding You Need.",
    description:
      "Connect with Franchise lenders to help you secure an SBA-backed loan and financing for your franchise.",
    buttonText: "Get Pre-approved",
    buttonColor: "bg-[#00DB62] hover:[#00DB62] text-[#0D0D0D]",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=280&h=200&fit=crop&crop=faces",
    imageAlt: "Woman in business setting",
    layout: "right",
  },
  {
    id: 2,
    title: "Understand the Fine Print Before you Buy",
    description:
      "Connect with Franchise attorneys that can guide you through the legal details of your franchise agreement to protect your investment.",
    buttonText: "Find a Franchise Attorney",
    buttonColor: "bg-[#0DA2FF] hover:[#0DA2FF] text-[#fff]",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=200&fit=crop&crop=faces",
    imageAlt: "Businessman reviewing documents",
    layout: "left",
  },
  {
    id: 3,
    title: "Franchise Your Way Into the U.S.",
    description:
      "Connect with Immigration attorneys that can help you with your franchise visa process to support your long-term success in a new country.",
    buttonText: "Find an Immigration Attorney",
    buttonColor: "bg-[#00DB62] hover:[#00DB62] text-[#0D0D0D]",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=280&h=200&fit=crop&crop=center",
    imageAlt: "Business meeting with documents",
    layout: "right",
  },
  {
    id: 4,
    title: "Looking to Sell Your Franchise?",
    description:
      "Connect with a Business broker that can help you list and market your franchise resale, connecting you with serious, qualified buyers.",
    buttonText: "Find a Business Broker",
    buttonColor: "bg-[#0DA2FF] hover:[#0DA2FF] text-[#fff]",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=280&h=200&fit=crop&crop=center",
    imageAlt: "Business handshake",
    layout: "left",
  },
  {
    id: 5,
    title: "Need Franchise Support Services",
    description:
      "Connect with top-tier professional who specialize in every stage of growth-from site selection, design, and buildout to marketing, operations, and exit strategy.",
    buttonText: "Find a Franchise Services Pro",
    buttonColor:
      "bg-gradient-to-r from-[#00DB62] to-[#0DA2FF] text-white hover:from-[#00C456] hover:to-[#0B91E6]",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=280&h=200&fit=crop&crop=center",
    imageAlt: "Business handshake",
    layout: "right",
  },
];

export default function Funding() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 function-cards">
          {FranchiseServices.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 ${
                service.layout === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Section */}
              <div className="flex-1 max-w-lg">
                <h2 className=" Funding-Heading mb-6">{service.title}</h2>
                <p className="funding_description mb-8">
                  {service.description}
                </p>
                <button
                  className={`${service.buttonColor}  px-6 py-2 rounded font-medium text-sm transition-colors duration-200 inline-flex items-center`}
                >
                  {service.buttonText}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Image Section */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  {/* Main image container with border */}
                  <div className="w-80 h-60 bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Decorative background */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl -z-10 opacity-60"></div>

                  {/* Additional decorative element */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full opacity-40"></div>
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-purple-200 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
