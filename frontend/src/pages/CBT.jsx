import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import menanam from "@/assets/banner/menanam.png"; // Update to your path
import { ChevronLeft } from "lucide-react";

const CBT = () => {
  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left Side Image */}
      <div className="hidden lg:block lg:w-1/2 h-full relative">
        <img src={menanam} alt="Login" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-base opacity-30"></div>
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 md:px-12 lg:p-16 bg-white">
        <div className="mb-6 flex flex-col w-full  ">
          <a href="/">
            <Button>
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span className="text-sm">Kembali</span>
            </Button>
          </a>
          <div className="text-center items-center flex flex-col gap-2">
            {" "}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black flex items-center gap-2">
              CBT SMPN 244 JAKARTA
            </h1>
            <h2 className="text-base md:text-lg mt-2 text-primary-bgText">
              Cilincing - Jakarta Utara - smpn244jkt.sch.id
            </h2>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault(onSubmit())}
          className="w-full max-w-md mx-auto"
        >
          {/* Username */}
          <div className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="Masukkan Username" />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Masukkan Password"
            />
          </div>

          {/* Checkbox + Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              {/* <Checkbox id="remember" /> */}
              <Label
                htmlFor="remember"
                className="text-sm cursor-pointer hover:underline"
              >
                Ingat Saya
              </Label>
            </div>

            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CBT;
