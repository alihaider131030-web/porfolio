import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16">
      <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-6xl mx-auto">
        <div className="flex-1 max-w-[354px]">
          <p className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl leading-[35px]">
            Peter Webb is a lawyer in Sydney with
            <br />
            over 20 years of experience. He is well-
            <br />
            known amongst clients and peers as a<br />
            tenacious lawyer with a gift for hard
            <br />
            negotiation and an imposing
            <br />
            courtroom presence.
          </p>
        </div>

        <div className="flex-1 max-w-[541px]">
          <div className="space-y-6">
            <div className="flex">
              <div className="w-8 [font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                B
              </div>
              <div className="flex-1 [font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
                ut the law isn&apos;t his only forte. Over the years, Peter&apos;s wealth of
              </div>
            </div>

            <div className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
              experience and shrewd instincts have led him to participate in a wide
              <br />
              array of projects. Never one to sit still, Peter has worked with several
              <br />
              businesses in an advisory capacity and undertaken a range of
              <br />
              entrepreneurial endeavours. He has made significant contributions to the
              <br />
              education sector with his critical work developing programs for The
              <br />
              Tuition Academy, which supported students training and education, as
              <br />
              well as the NSW Government&apos;s Assisted School Travel Program, which
              <br />
              offers transport solutions for students with disabilities.
            </div>

            <div className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
              Peter&apos;s knowledge and experience as a lawyer and a barrister coupled
              <br />
              with his honest, straightforward approach to life also means that he is
              <br />
              frequently called upon, both officially and unofficially, for his sage
              <br />
              business advice.
            </div>

            <div className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
              Learn more about Peter&apos;s background.
            </div>

            <Button
              variant="ghost"
              className="h-auto p-0 border-b-2 border-[#c99e67] rounded-none hover:bg-transparent"
              asChild
            >
              <Link to="/about">
                <div className="flex items-center gap-1 px-1.5 py-1.5">
                  <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#c99e67] text-base text-center leading-6">
                    FIND OUT MORE
                  </span>
                  <ArrowRightIcon className="w-[18px] h-[18px] text-[#c99e67]" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};