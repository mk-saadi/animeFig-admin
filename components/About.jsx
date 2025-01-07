import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  icons,
} from "lucide-react";
import DevImg from "./DevImg";
const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Emran Bin Hasan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+8801601262260",
  },
  {
    icon: <MailIcon size={20} />,
    text: "emranbinhasan.dev@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 8 November 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Dhaka, Bangladesh",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Presidency University",
        degree: "Bachelor of Science",
        years: '2024 - Present',
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Local Market",
        role: "Full Stack Web Developer",
        years: '2024 - Present',
      },
      {
        company: "Fiverr",
        role: "Frontend Developer",
        years: 2024,
      },
    ],
  },
];


const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="lg:h-[800px] pb-12 lg:py-16">
      <div className="container mx-auto border p-4">
        <h2 className="section-title mb-6 lg:mb-16 text-center">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="hidden lg:flex xl:flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[500px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full lg:grid lg:grid-cols-2 lg:border dark:border-none lg:max-w-[500px]">
                <TabsTrigger className="w-[162px] lg:w-auto" value="personal">
                  Personal Information
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] lg:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-4 lg:mt-8">
                <TabsContent value="personal">
                  <div className="space-y-3 text-center">
                    <div className=" mb-2 lg:mb-6 text-center lg:text-left ">
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Unmatched Service Quality for Over 2 Years
                    </h3>
                    <p className="text-muted-foreground mx-auto text-base">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return <div className="flex items-center gap-x-4 mx-auto lg:mx-0"
                                 key={index}>
                                    <span className="text-primary">{item.icon}</span>
                                    <p>{item.text}</p>
                                </div>;
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-center lg:text-left text-primary">Language Skill</h3>
                        <div className="border-b border-border"></div>
                        <p className="text-center lg:text-left">English, Bangla & Japanese</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                  <h3 className="text-xl lg:text-2xl font-semibold">
                      Unmatched Service Quality for Over 2 Years
                    </h3>
                  </div>
                 {/* experience & education wrapper */}
                  <div className="grid md:grid-cols-2 gap-y-4">
                    {/* experience */}
                    <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center mt-2 .text-[22px] text-primary">
                      <Briefcase/>
                      <h4 className="capitalize font-medium">
                        {getData(qualificationData, 'experience').title}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, 'experience').data.map((item,index) => {
                      const {company,role,years} = item
                      return (
                        <div className="flex gap-x-8 group py-2" key={index}>
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-xl leading-none mb-2">{company}</h3>
                            <p className="text-lg leading-none text-muted-foreground">{role}</p>
                            <p className="text-base font-medium mt-1">{years}</p>
                          </div>
                        </div>
                      )
                    })}
                    </div>
                    </div>
                    {/* education */}
                    <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center mt-2 .text-[22px] text-primary">
                      <GraduationCap size={28}/>
                      <h4 className="capitalize font-medium">
                        {getData(qualificationData, 'education').title}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, 'education').data.map((item,index) => {
                      const {university,degree,years} = item
                      return (
                        <div className="flex gap-x-8 group py-2" key={index}>
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-xl leading-none mb-2">{university}</h3>
                            <p className="text-lg leading-none text-muted-foreground mt-1">{degree}</p>
                            <p className="text-base font-medium">{years}</p>
                          </div>
                        </div>
                      )
                    })}
                    </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
