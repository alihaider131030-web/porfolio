import { FileTextIcon, BriefcaseIcon, TrendingUpIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  const cards = [
    {
      title: "Lawyer",
      backgroundImage: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=390&h=550&dpr=1",
      icon: <FileTextIcon className="w-[90px] h-[90px] text-white" />,
      link: "/lawyer"
    },
    {
      title: "Entrepreneur",
      backgroundImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=390&h=550&dpr=1",
      icon: <TrendingUpIcon className="w-[90px] h-[90px] text-white" />,
      link: "/entrepreneur"
    },
    {
      title: "Business Advisor",
      backgroundImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=390&h=550&dpr=1",
      icon: <BriefcaseIcon className="w-[90px] h-[90px] text-white" />,
      link: "/business-advisor"
    },
  ];

  return (
    <section className="w-full relative py-16">
      <div className="flex gap-6 px-4 max-w-6xl mx-auto justify-center">
        {cards.map((card, index) => (
          <Link key={index} to={card.link} className="block">
            <Card className="w-[390px] h-[550px] border-0 overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <CardContent
                className="relative w-full h-full p-0 flex items-end justify-center pb-16"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${card.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    {card.icon}
                  </div>
                  <div className="w-[100px] h-px bg-[#c99e67] rounded-[5px] mb-4" />
                  <h3 className="[font-family:'Spectral',Helvetica] font-normal text-[#f8f9fa] text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
                    {card.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};