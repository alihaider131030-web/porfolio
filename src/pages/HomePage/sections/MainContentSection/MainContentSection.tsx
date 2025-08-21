import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full relative py-16">
      <div className="flex w-full max-w-[1140px] mx-auto">
        <Card className="w-1/2 h-[665px] bg-[#f7f6f5] border-0 rounded-none">
          <CardContent className="p-0 h-full relative">
            <div className="absolute w-[426px] h-[103px] top-12 left-24">
              <div className="w-[426px] h-[74px] left-0 border-l-2 border-solid border-[#c99e67] absolute top-0">
                <h2 className="absolute w-[300px] h-[65px] top-0.5 left-[50px] [font-family:'Spectral',Helvetica] font-bold text-[#212529] text-2xl tracking-[0] leading-[28.8px]">
                  Considering Peter Webb as
                  <br />
                  your
                </h2>
              </div>

              <h2 className="absolute w-[92px] h-[37px] top-[67px] left-12 [font-family:'Spectral',Helvetica] font-bold text-[#212529] text-2xl tracking-[0] leading-[28.8px]">
                Lawyer?
              </h2>
            </div>

            <p className="absolute w-[378px] h-[330px] top-[206px] left-24 [font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base tracking-[0] leading-6">
              As a lawyer, Peter Webb is unique in that he employs
              <br />a combination of fierce negotiation tactics with the
              <br />
              ability to argue his case succinctly, commanding
              <br />
              attention in the courtroom. This strategy allows him
              <br />
              to win cases quickly and, as a result, he can provide
              <br />a more cost-effective solution for his clients. Peter
              <br />
              works with clients from all walks of life at Sydney-
              <br />
              based firm, Meridian Legal. Some are facing minor
              <br />
              traffic offences, while others are confronted by more
              <br />
              serious offences and may be unsure as to their next
              <br />
              move. Peter believes that securing representation as
              <br />
              early as possible is crucial in securing the best
              <br />
              possible outcome. Find out more about Peter Webb&apos;s
              <br />
              experience as a lawyer.
            </p>

            <Button
              variant="ghost"
              className="absolute w-[167px] h-[31px] top-[571px] left-24 border-b-2 border-solid border-[#c99e67] bg-transparent hover:bg-transparent p-0 h-auto rounded-none"
              asChild
            >
              <Link to="/lawyer">
                <div className="relative w-[155px] h-[18px] top-1.5 left-1.5 flex items-center">
                  <span className="w-[132px] h-[18px] [font-family:'Arial-Narrow',Helvetica] font-normal text-[#c99e67] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                    FIND OUT MORE
                  </span>
                  <ArrowRightIcon className="w-[18px] h-[18px] ml-1 text-[#c99e67]" />
                </div>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="w-1/2 h-[665px] flex items-start justify-center pt-[77px]">
          <div className="w-[400px] h-[400px] border-2 border-solid border-[#c99e67] relative">
            <img 
              src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
              alt="Peter Webb - Professional Lawyer"
              className="absolute w-[396px] h-[396px] top-[37px] left-[-68px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};