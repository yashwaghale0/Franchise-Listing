import Miami from "../../assets/images/Miami.png";
import NYC from "../../assets/images/NYC.png";
import California from "../../assets/images/California.png";
import Brands from "../../assets/images/Brands.png";
import Tools from "../../assets/images/Tools.png";
import Owners from "../../assets/images/Owners.png";
import "./UpcomingEvents.css";
import { Calendar, Clock, User } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Franchise Expo: Miami May 2025",
      date: "May 2025",
      description:
        "Discover the top franchise opportunity that matches your interests and financial investment profile.",
      image: Miami,
      buttonText: "Coming Soon",
      featured: true,
    },
    {
      id: 2,
      title: "Franchise Expo: NYC June 2025",
      date: "August 2025",
      description:
        "Connect with leading franchise brands and explore investment opportunities.",
      image: NYC,
      buttonText: "Coming Soon",
      featured: false,
    },
    {
      id: 3,
      title: "Franchise Expo: California August 2025",
      date: "September 2025",
      description:
        "Join industry leaders and discover your perfect franchise match.",
      image: California,
      buttonText: "Coming Soon",
      featured: false,
    },
  ];

  const news = [
    {
      id: 1,
      title: "Top 10 Emerging Franchise Brands in 2025",
      date: "Jan 24, 2024",
      author: "Webinar",
      image: Brands,
      excerpt: "Discover the fastest-growing franchise opportunities...",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Tools To Improve Your Franchise",
      date: "Jan 24, 2024",
      author: "Webinar",
      image: Tools,
      excerpt: "Essential tools and strategies for franchise success...",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Owners Talk About Performance and Profits",
      date: "Jan 24, 2024",
      author: "Webinar",
      image: Owners,
      excerpt: "Real franchise owners share their success stories...",
      readTime: "8 min read",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#000B82] to-[#0D0D0D]  py-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Upcoming Franchise Events Section */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-12 upcoming_header">
            <h2 className="upcoming_heading">Upcoming Franchise Events</h2>
            {/* <button className="bg-gradient-to-r from-[#009A45] to-[#00DB62] text-[#fff] px-6 py-2 rounded font-semibold hover:bg-[#00C456] transition-colors duration-200">
              View All Events →
            </button> */}
          </div>

          <div
            className="
              flex md:grid 
              md:grid-cols-2 lg:grid-cols-3 
              gap-4 md:gap-8 
              overflow-x-auto md:overflow-visible 
              no-scrollbar
            "
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="
                  flex-shrink-0 w-[90%] sm:w-[80%] md:w-auto
                  relative overflow-hidden rounded-2xl shadow-2xl group
                  transition-all duration-300 transform hover:-translate-y-2 events-cards
                "
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000B82]/90 via-[#000B82]/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm opacity-90">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <button className="font-semibold text-sm hover:text-[#00C456] transition-colors duration-200">
                    {event.buttonText} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Franchise News Section */}
        {/* <div>
          <div className="flex justify-between items-center mb-12 upcoming_header">
            <h2 className="upcoming_heading">Franchise News</h2>
            <button className="bg-gradient-to-r from-[#000B82] to-[#0DA2FF] text-[#fff] px-6 py-2 rounded font-semibold hover:bg-[#0B91E6] transition-colors duration-200">
              Visit Newsletter →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-[#6D758F]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  <h4 className=" font-bold  mb-3 leading-tight">
                    {article.title}
                  </h4>

                  <div className="flex justify-between items-center">
                    <button className="text-[#0DA2FF] text-sm hover:text-[#0B91E6] transition-colors duration-200">
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UpcomingEvents;
