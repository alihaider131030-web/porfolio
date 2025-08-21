import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";

export const ContactPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-gray-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=400&dpr=1')"
          }}
        />
        <div className="relative flex items-center justify-center h-full z-10">
          <div className="text-center">
            <h1 className="[font-family:'Spectral',Helvetica] font-bold text-white text-5xl mb-4">
              Contact Us
            </h1>
            <p className="[font-family:'Spectral',Helvetica] font-normal text-white text-xl">
              Get in Touch for Legal Consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="w-[70px] h-0.5 bg-[#c99e67] rounded-[5px] mb-6" />
              <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl mb-6">
                Schedule a Consultation
              </h2>
              
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6 mb-8">
                Contact Peter Webb today to discuss your legal needs. We provide personalized 
                consultation services and are committed to achieving the best possible outcomes 
                for our clients.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c99e67] focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c99e67] focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c99e67] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c99e67] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Legal Matter Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c99e67] focus:border-transparent">
                    <option value="">Select a legal matter type</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="business">Business Advisory</option>
                    <option value="personal">Personal Legal Matters</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c99e67] focus:border-transparent"
                    placeholder="Please describe your legal matter or question"
                  />
                </div>
                
                <Button className="w-full bg-[#c99e67] hover:bg-[#b8935e] text-white py-3 rounded-md">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-6">
              <Card className="bg-[#f7f6f5] border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="w-8 h-8 text-[#c99e67] mt-1" />
                    <div>
                      <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-2">
                        Office Location
                      </h3>
                      <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                        Meridian Legal<br />
                        Level 15, 123 Pitt Street<br />
                        Sydney NSW 2000<br />
                        Australia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#f7f6f5] border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <PhoneIcon className="w-8 h-8 text-[#c99e67] mt-1" />
                    <div>
                      <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-2">
                        Phone
                      </h3>
                      <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                        +61 2 9876 5432<br />
                        Mobile: +61 412 345 678
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#f7f6f5] border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MailIcon className="w-8 h-8 text-[#c99e67] mt-1" />
                    <div>
                      <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-2">
                        Email
                      </h3>
                      <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                        peter@meridian-legal.com.au<br />
                        info@meridian-legal.com.au
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#f7f6f5] border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <ClockIcon className="w-8 h-8 text-[#c99e67] mt-1" />
                    <div>
                      <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-2">
                        Office Hours
                      </h3>
                      <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed<br />
                        <span className="text-sm text-gray-600">Emergency consultations available by appointment</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#f7f6f5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl text-center mb-8">
            Find Our Office
          </h2>
          <div className="w-full h-[400px] bg-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="w-16 h-16 text-[#c99e67] mx-auto mb-4" />
              <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base">
                Interactive map would be integrated here<br />
                Level 15, 123 Pitt Street, Sydney NSW 2000
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};