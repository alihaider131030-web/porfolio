import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { ScaleIcon, ShieldIcon, UserIcon } from "lucide-react";

export const LawyerPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-gray-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=400&dpr=1')"
          }}
        />
        <div className="relative flex items-center justify-center h-full z-10">
          <div className="text-center">
            <h1 className="[font-family:'Spectral',Helvetica] font-bold text-white text-5xl mb-4">
              Legal Services
            </h1>
            <p className="[font-family:'Spectral',Helvetica] font-normal text-white text-xl">
              Experienced Legal Representation in Sydney
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="w-[70px] h-0.5 bg-[#c99e67] rounded-[5px]" />
              <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl leading-[36px]">
                Tenacious Legal Representation
              </h2>
              
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                As a lawyer, Peter Webb is unique in that he employs a combination of fierce 
                negotiation tactics with the ability to argue his case succinctly, commanding 
                attention in the courtroom. This strategy allows him to win cases quickly and, 
                as a result, he can provide a more cost-effective solution for his clients.
              </p>

              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Peter works with clients from all walks of life at Sydney-based firm, Meridian Legal. 
                Some are facing minor traffic offences, while others are confronted by more serious 
                offences and may be unsure as to their next move.
              </p>

              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Peter believes that securing representation as early as possible is crucial in 
                securing the best possible outcome. His approach combines thorough preparation 
                with strategic thinking to achieve optimal results for his clients.
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=1"
                alt="Legal Services - Courtroom"
                className="w-full max-w-[500px] h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#f7f6f5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl text-center mb-12">
            Legal Practice Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <ScaleIcon className="w-16 h-16 text-[#c99e67] mx-auto mb-4" />
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  Criminal Law
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Comprehensive criminal defense representation for all types of offenses, 
                  from minor infractions to serious felonies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <ShieldIcon className="w-16 h-16 text-[#c99e67] mx-auto mb-4" />
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  Civil Litigation
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Expert representation in civil disputes, contract negotiations, 
                  and commercial litigation matters.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <UserIcon className="w-16 h-16 text-[#c99e67] mx-auto mb-4" />
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  Personal Legal Matters
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Personalized legal advice and representation for individual clients 
                  facing various legal challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl mb-8">
            Our Legal Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-4">
                Early Intervention
              </h3>
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                We believe that securing legal representation as early as possible is crucial 
                for achieving the best possible outcome in any legal matter.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-4">
                Strategic Negotiation
              </h3>
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Our fierce negotiation tactics combined with succinct argumentation 
                help us achieve favorable outcomes efficiently and cost-effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};