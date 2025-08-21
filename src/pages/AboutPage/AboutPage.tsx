import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const AboutPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-gray-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=400&dpr=1')"
          }}
        />
        <div className="relative flex items-center justify-center h-full z-10">
          <h1 className="[font-family:'Spectral',Helvetica] font-bold text-white text-5xl text-center">
            About Peter J Webb
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="w-[70px] h-0.5 bg-[#c99e67] rounded-[5px]" />
              <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl leading-[36px]">
                A Distinguished Career Spanning Multiple Disciplines
              </h2>
              
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Peter Webb has built an exceptional career that seamlessly blends legal expertise, 
                business acumen, and entrepreneurial vision. With over 20 years of experience in 
                the legal profession, Peter has established himself as one of Sydney's most 
                respected lawyers, known for his tenacious approach and commanding courtroom presence.
              </p>

              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Beyond his legal practice, Peter has demonstrated remarkable versatility as a 
                business advisor and entrepreneur. His unique combination of legal knowledge and 
                business insight has made him a sought-after consultant for companies across 
                various industries.
              </p>

              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                Peter's entrepreneurial spirit has led him to participate in numerous ventures, 
                including significant contributions to the education sector through his work with 
                The Tuition Academy and the NSW Government's Assisted School Travel Program.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-[400px] h-[500px] border-2 border-solid border-[#c99e67] relative">
                <img 
                  src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1"
                  alt="Peter Webb - Professional Portrait"
                  className="absolute w-[396px] h-[496px] top-[37px] left-[-68px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-16 bg-[#f7f6f5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl text-center mb-12">
            Areas of Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#c99e67] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">L</span>
                </div>
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  Legal Practice
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Over 20 years of experience in criminal law, civil litigation, and corporate law.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#c99e67] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">B</span>
                </div>
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  Business Advisory
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Strategic business consulting and advisory services for companies of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#c99e67] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">E</span>
                </div>
                <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3">
                  Entrepreneurship
                </h3>
                <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5">
                  Successful ventures in education technology and government program development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};