import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { BriefcaseIcon, UsersIcon, ChartBarIcon } from "lucide-react";

export const BusinessAdvisorPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-gray-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=400&dpr=1')"
          }}
        />
        <div className="relative flex items-center justify-center h-full z-10">
          <div className="text-center">
            <h1 className="[font-family:'Spectral',Helvetica] font-bold text-white text-5xl mb-4">
              Business Advisory
            </h1>
            <p className="[font-family:'Spectral',Helvetica] font-normal text-white text-xl">
              Strategic Business Consulting & Advisory Services
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
                Strategic Business Guidance
              </h2>
              
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Peter's knowledge and experience as a lawyer and a barrister coupled with his 
                honest, straightforward approach to life means that he is frequently called upon, 
                both officially and unofficially, for his sage business advice.
              </p>

              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                His unique combination of legal expertise and business acumen allows him to provide 
                comprehensive advisory services that address both the legal and commercial aspects 
                of business decisions. This holistic approach ensures that clients receive advice 
                that is both legally sound and commercially viable.
              </p>

              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Peter works with businesses of all sizes, from startups seeking guidance on 
                structure and compliance to established companies navigating complex commercial 
                transactions and strategic decisions.
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=1"
                alt="Business Advisory Services"
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
            Advisory Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <BriefcaseIcon className="w-16 h-16 text-[#c99e67] mx-auto mb-4" />
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  Strategic Planning
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Comprehensive strategic planning services that align legal requirements 
                  with business objectives for sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <UsersIcon className="w-16 h-16 text-[#c99e67] mx-auto mb-4" />
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  Corporate Governance
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Expert guidance on corporate structure, compliance, and governance 
                  frameworks to ensure regulatory adherence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <ChartBarIcon className="w-16 h-16 text-[#c99e67] mx-auto mb-4" />
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  Risk Management
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Comprehensive risk assessment and management strategies to protect 
                  your business interests and minimize legal exposure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl text-center mb-12">
            Our Advisory Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#f7f6f5] border-none">
              <CardContent className="p-6">
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-4">
                  Honest & Straightforward
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                  We provide clear, honest advice without unnecessary complexity. Our 
                  straightforward approach ensures you understand the implications of 
                  every business decision.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#f7f6f5] border-none">
              <CardContent className="p-6">
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-4">
                  Legally Sound & Commercially Viable
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                  Our unique combination of legal expertise and business experience 
                  ensures that all advice is both legally compliant and commercially practical.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};