// function RealtorSection() {
//   return (
//     <section className="py-16 px-6 md:px-20 bg-white">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        
//         {/* Text Section */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
//             Not Your Average Realtor
//           </h2>
//           <p className="text-gray-600 text-base md:text-lg">
//             We don’t just help you buy or sell properties; we provide a personal, expert guiding hand every step of the way, ensuring the process is smooth and stress-free.
//           </p>
//         </div>

//         {/* Images Section */}
//         <div className="md:w-1/2 relative flex justify-center md:justify-end">
//           {/* Large Circle */}
//           <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
//             <img
//               src="/src/assets/Ellipse 11.svg"
//               alt="Realtor"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Top small circle */}
//           <div className="absolute top-0 right-0 w-32 h-32 rounded-full overflow-hidden shadow-lg -translate-x-8 -translate-y-8">
//             <img
//               src="/src/assets/Ellipse 31.svg"
//               alt="Client"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Bottom small circle */}
//           <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full overflow-hidden shadow-lg translate-x-8 translate-y-8">
//             <img
//               src="/src/assets/Ellipse 13.svg"
//               alt="Realtor"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RealtorSection;
function RealtorSection() {
  return (
    <>
      {/* Main Realtor Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
          
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
              Not Your Average Realtor
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              We don’t just help you buy or sell properties; we bring expertise with a personal, friendly touch—making every step smooth, stress-free, and colorful!
            </p>
          </div>

          {/* Images Section */}
          <div className="md:w-1/2 relative flex justify-center md:justify-end">
            {/* Large Colorful Circle */}
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 flex items-center justify-center">
              <img
                src="/assets1/Ellipse 11.svg"
                alt="Realtor"
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>

            {/* Top small colorful circle */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full overflow-hidden shadow-lg -translate-x-8 -translate-y-8 bg-gradient-to-tr from-green-300 via-blue-300 to-purple-300 flex items-center justify-center">
              <img
                src="/assets1/Ellipse 31.svg"
                alt="Client"
                className="w-20 h-20 object-cover rounded-full border-2 border-white"
              />
            </div>

            {/* Bottom small colorful circle */}
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full overflow-hidden shadow-lg translate-x-8 translate-y-8 bg-gradient-to-br from-yellow-200 via-orange-300 to-pink-300 flex items-center justify-center">
              <img
                src="/assets1/Ellipse 13.svg"
                alt="Realtor"
                className="w-16 h-16 object-cover rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Niche / Features Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4 text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Card 1 */}
          <div className="p-8 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="font-bold text-blue-700 mb-2">Potential ROI</h3>
            <p className="text-gray-700 text-sm">
              Taking the risk on a new project increases your current home's value, adding to your property's future worth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-2xl">🔌</span>
            </div>
            <h3 className="font-bold text-orange-700 mb-2">Design</h3>
            <p className="text-gray-700 text-sm">
              Master landscaping, patio, and interior design to upgrade the construction experience and prepare for future enhancements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-2xl">$</span>
            </div>
            <h3 className="font-bold text-purple-700 mb-2">Marketing</h3>
            <p className="text-gray-700 text-sm">
              Market your product and materials with a sophisticated strategy to align with modern business demands.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RealtorSection;
