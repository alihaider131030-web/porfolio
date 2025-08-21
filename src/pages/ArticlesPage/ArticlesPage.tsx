import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon, CalendarIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const ArticlesPage = (): JSX.Element => {
  const articles = [
    {
      title: "Joint Criminal Enterprise",
      excerpt: "Liability for a criminal offence can be extended in a number of ways – this article will deal with the principle of joint criminal enterprises. Essentially, if the prosecution can establish that an agreement has been reached or formed between the parties to commit a criminal offence and the parties then proceed to participate in that offence...",
      date: "September 20, 2021",
      author: "Cara Waters",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      title: "Understanding Corporate Law in Australia",
      excerpt: "Corporate law forms the backbone of business operations in Australia. This comprehensive guide explores the key principles, regulations, and compliance requirements that every business owner should understand when operating in the Australian market...",
      date: "August 15, 2021",
      author: "Peter J Webb",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      title: "Effective Negotiation Strategies in Legal Practice",
      excerpt: "Successful legal practice requires more than just knowledge of the law – it demands exceptional negotiation skills. This article explores proven strategies for achieving favorable outcomes through strategic negotiation and effective communication...",
      date: "July 28, 2021",
      author: "Peter J Webb",
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      title: "Business Advisory: Legal Considerations for Startups",
      excerpt: "Starting a new business involves numerous legal considerations that can significantly impact long-term success. This guide provides essential insights for entrepreneurs navigating the complex legal landscape of business formation and operation...",
      date: "June 10, 2021",
      author: "Peter J Webb",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      title: "The Role of Technology in Modern Legal Practice",
      excerpt: "Technology is revolutionizing the legal profession, from case management systems to AI-powered research tools. This article examines how legal professionals can leverage technology to improve efficiency and client service...",
      date: "May 22, 2021",
      author: "Peter J Webb",
      image: "https://images.pexels.com/photos/5668888/pexels-photo-5668888.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      title: "Risk Management in Business Operations",
      excerpt: "Effective risk management is crucial for business success and legal compliance. This comprehensive guide explores strategies for identifying, assessing, and mitigating various types of business risks in today's complex commercial environment...",
      date: "April 18, 2021",
      author: "Peter J Webb",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-gray-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=400&dpr=1')"
          }}
        />
        <div className="relative flex items-center justify-center h-full z-10">
          <div className="text-center">
            <h1 className="[font-family:'Spectral',Helvetica] font-bold text-white text-5xl mb-4">
              Legal Articles & Insights
            </h1>
            <p className="[font-family:'Spectral',Helvetica] font-normal text-white text-xl">
              Expert Analysis and Commentary on Legal Matters
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[250px] object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-5 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UserIcon className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      className="h-auto p-0 border-b-2 border-[#c99e67] rounded-none hover:bg-transparent group w-full justify-start"
                    >
                      <div className="flex items-center gap-1 px-1.5 py-1">
                        <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#c99e67] text-sm text-center leading-[21px]">
                          READ MORE
                        </span>
                        <ArrowRightIcon className="w-[18px] h-[18px] text-[#c99e67]" />
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#f7f6f5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-3xl mb-4">
            Stay Updated
          </h2>
          <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6 mb-8">
            Subscribe to receive the latest legal insights and articles directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c99e67] focus:border-transparent"
            />
            <Button className="bg-[#c99e67] hover:bg-[#b8935e] text-white px-6 py-2 rounded-md">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};