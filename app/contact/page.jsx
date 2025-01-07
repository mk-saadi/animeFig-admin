import Form from "@/components/Form";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-6 lg:mb-16">
          <div className="flex justify-center flex-col">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="bg-primary w-[30px] h-[2px]"></span>
              <span className="font-medium text-xl">Say Hello !</span>
            </div>
            <h1 className="text-2xl lg:text-3xl max-w-md mb-6">
              Let's Work Together
            </h1>
            <p className="subtitle max-w-[400px]">
            I’d love to hear from you! Whether you have a project in mind, want to discuss ideas, or just want to say hello, feel free to reach out. Let’s connect and make something great together.
            </p>
          </div>
          <div className="hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid lg:grid-cols-2 mb-16 lg:mb-24">
            <div className="flex flex-col gap-y-4 lg:gap-y-10 mb-8 lg:mb-16 text-base lg:text-lg">
                {/* mail */}
                <div className="flex items-center gap-x-6">
                    <MailIcon size={18} className="text-primary"/>
                    <h4>emranbinhasan.dev@gmail.com</h4>
                </div>
                <div className="flex items-center gap-x-6">
                    <HomeIcon size={18} className="text-primary"/>
                    <h4>Dhaka,Bangladesh</h4>
                </div>
                <div className="flex items-center gap-x-6">
                    <PhoneCall size={18} className="text-primary"/>
                    <a href="tel:+8801601262260" className="hover:underline">
                    +880 160 126 2260
                    </a>
                </div>
            </div>
            <Form/>

        </div>
      </div>
    </section>
  );
};

export default Contact;
