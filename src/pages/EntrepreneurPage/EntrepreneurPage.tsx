import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { TrendingUpIcon, LightbulbIcon, TargetIcon } from "lucide-react";

export const EntrepreneurPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-gray-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=400&dpr=1')"
          }}
        />
        <div className="relative flex items-center justify-center h-full z-10">
          <div className="text-center">
            <h1 className="[font-family:'Spectral',Helvetica] font-bold text-white text-5xl mb-4">
              Entrepreneurial Ventures
            </h1>
            <p className="[font-family:'Spectral',Helvetica] font-normal text-white text-xl">
              Innovation and Business Development
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
                Entrepreneurial Vision
              </h2>
              
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Never one to sit still, Peter has worked with several businesses in an advisory 
                capacity and undertaken a range of entrepreneurial endeavours. His wealth of 
                experience and shrewd instincts have led him to participate in a wide array of projects.
              </p>

              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Peter has made significant contributions to the education sector with his critical 
                work developing programs for The Tuition Academy, which supported students' training 
                and education, as well as the NSW Government's Assisted School Travel Program, which 
                offers transport solutions for students with disabilities.
              </p>

              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                His entrepreneurial approach combines legal expertise with business acumen, creating 
                innovative solutions that address real-world challenges while maintaining commercial viability.
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=1"
                alt="Entrepreneurial Success"
                className="w-full max-w-[500px] h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-16 bg-[#f7f6f5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl text-center mb-12">
            Key Entrepreneurial Ventures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6">
                <TrendingUpIcon className="w-16 h-16 text-[#c99e67] mb-4" />
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  The Tuition Academy
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Developed comprehensive educational programs that supported student training 
                  and education, revolutionizing how students access quality tutoring services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6">
                <TargetIcon className="w-16 h-16 text-[#c99e67] mb-4" />
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  NSW Assisted School Travel Program
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Created innovative transport solutions for students with disabilities, 
                  working directly with the NSW Government to improve accessibility in education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl mb-8">
            Entrepreneurial Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <LightbulbIcon className="w-12 h-12 text-[#c99e67] mx-auto mb-4" />
              <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-4">
                Innovation
              </h3>
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Identifying opportunities where legal expertise can create innovative 
                business solutions.
              </p>
            </div>
            
            <div className="text-center">
              <TargetIcon className="w-12 h-12 text-[#c99e67] mx-auto mb-4" />
              <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-4">
                Impact
              </h3>
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Focusing on ventures that create meaningful social and economic impact, 
                particularly in education.
              </p>
            </div>
            
            <div className="text-center">
              <TrendingUpIcon className="w-12 h-12 text-[#c99e67] mx-auto mb-4" />
              <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-4">
                Growth
              </h3>
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Building sustainable businesses that can scale and adapt to 
                changing market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};