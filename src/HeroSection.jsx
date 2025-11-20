import React from "react";
import { GraduationCap, Users, Award, Code } from "lucide-react";

export function HeroSection() {
  return (
    <>
      {/* Soft Pattern Background */}
      {/* <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div> */}
      <div id="Home"></div>
      <section className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-[120px] mt-[100px] px-8 md:px-16 lg:px-24">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full mb-7 shadow-md shadow-white/10">
              <GraduationCap className="w-5 h-5" />
              <span className="text-[0.9rem] tracking-wide font-medium">Academic Excellence</span>
            </div>

            {/* Main Title */}
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md">
              Class of <span className="text-yellow-300">2025</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 bg-clip-text text-transparent drop-shadow-xl">
                Squad 124
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl font-semibold mb-4 opacity-95 tracking-wide">
              Computer Science & Engineering
            </p>

            {/* Description */}
            <p className="text-lg md:text-[1.15rem] opacity-90 max-w-xl leading-relaxed mb-4">
              A journey of innovation, teamwork, resilience, and brilliance — where passion meets excellence and dreams take shape.
            </p>

            <p className="text-lg opacity-90 max-w-xl mb-8 italic tracking-wide">
              Here's what makes Squad 124 truly special:
            </p>
          </div>

          {/* RIGHT CONTENT (Cards) */}
          <div className="grid grid-cols-2 gap-4">

            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/20 transition-all duration-300 mt-8">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 shadow-md shadow-yellow-300/40">
                <Award className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-wide">Top Achievers</h3>
              <p className="text-sm opacity-80 leading-relaxed">Excellence in academics and research</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-300 mt-8">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4 shadow-md shadow-blue-300/40">
                <Code className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-wide">Top Leaders</h3>
              <p className="text-sm opacity-80 leading-relaxed">Innovation in development</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-200/20 transition-all duration-300">
              <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4 shadow-md shadow-green-300/40">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-wide">Team Spirit</h3>
              <p className="text-sm opacity-80 leading-relaxed">Collaborative environment</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-200/20 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mb-4 shadow-md shadow-purple-300/40">
                <GraduationCap className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-wide">Future</h3>
              <p className="text-sm opacity-80 leading-relaxed">Prepared for tomorrow</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
