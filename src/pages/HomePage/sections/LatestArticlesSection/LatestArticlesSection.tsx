import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const LatestArticlesSection = (): JSX.Element => {
  return (
    <section className="w-full relative py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Card className="bg-[#f7f6f5] border-none shadow-none">
          <CardContent className="p-6 space-y-6">
            <h2 className="[font-family:'Spectral',Helvetica] font-bold text-[#212529] text-xl leading-6">
              Joint Criminal Enterprise
            </h2>

            <p className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-base leading-6">
              Liability for a criminal offence can be extended in a number of ways – this
              <br />
              article will deal with the principle of joint criminal enterprises. Essentially, if
              <br />
              the prosecution can establish that an agreement has been reached or
              <br />
              formed between the parties to commit a criminal offence and the parties then
              <br />
              proceed to participate in that offence […]
            </p>

            <div className="flex justify-between items-end">
              <div className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#212529] text-sm leading-[21px]">
                September 20, 2021 | by Cara Waters
              </div>

              <Button
                variant="ghost"
                className="h-auto p-0 border-b-2 border-[#c99e67] rounded-none hover:bg-transparent group"
                asChild
              >
                <Link to="/articles">
                  <div className="flex items-center gap-1 px-1.5 py-1">
                    <span className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#c99e67] text-sm text-center leading-[21px]">
                      READ MORE
                    </span>
                    <ArrowRightIcon className="w-[18px] h-[18px] text-[#c99e67]" />
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};