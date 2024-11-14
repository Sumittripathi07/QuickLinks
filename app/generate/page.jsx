import { Form } from "@/components/Form";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col ">
        <p className="relative z-20 py-8 text-4xl font-bold text-transparent sm:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500">
          Short the URL!
        </p>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default page;
