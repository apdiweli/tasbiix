function Card({ image, header, description, buttonText }) {
   return (
     <div className="w-[300px] h-[400px] border border-3 border-black m-5 shadow-inner shadow-2xl">
       <div className="w-full h-[150px]">
         <img className="h-[200px] w-full" src={image} alt={header} />
       </div>
       <h1 className="font-bold mt-[70px] ml-[40px]">{header}</h1>
       <p className="ml-2 p-2">{description}</p>
       <button className="rounded shadow-inner bg-black my-[10px] text-white px-10 py-3 ml-[40px] text-center">
         {buttonText}
       </button>
     </div>
   );
 }
 
 function Footer() {
   return (
     <footer className="bg-green-400 text-white py-10 mt-10">
       <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* About Section */}
         <div>
           <h2 className="text-lg font-bold mb-4">About Us</h2>
           <p>
             We are dedicated to spreading awareness about the beauty and
             importance of nature. Join us in our mission to protect the
             environment and cherish its wonders.
           </p>
         </div>
         {/* Quick Links */}
         <div>
           <h2 className="text-lg font-bold mb-4">Quick Links</h2>
           <ul>
             <li>
               <a href="/home" className="hover:text-orange-400">
                 Home
               </a>
             </li>
             <li>
               <a href="/about" className="hover:text-orange-400">
                 About
               </a>
             </li>
             <li>
               <a href="/contact" className="hover:text-orange-400">
                 Contact
               </a>
             </li>
           </ul>
         </div>
         {/* Social Media */}
         <div>
           <h2 className="text-lg font-bold mb-4">Follow Us</h2>
           <div className="flex space-x-4">
             <a href="#" className="hover:text-orange-400">
               <i className="fab fa-facebook-f"></i> Facebook
             </a>
             <a href="#" className="hover:text-orange-400">
               <i className="fab fa-twitter"></i> Twitter
             </a>
             <a href="#" className="hover:text-orange-400">
               <i className="fab fa-instagram"></i> Instagram
             </a>
           </div>
         </div>
       </div>
       <div className="text-center mt-10 border-t border-gray-700 pt-5">
         <p>&copy; {new Date().getFullYear()} Nature's Bliss. All rights reserved.</p>
       </div>
     </footer>
   );
 }
 
 function Home() {
   const cardsData = [
     {
       image: "../src/sunrise.jpg",
       header: "Earlier Morning",
       description:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores natus, molestias iste at quam tenetur!",
       buttonText: "Save",
     },
     {
       image: "../src/desert.jpg",
       header: "Nature Desert",
       description:
         "Discover the beauty of the desert with its mesmerizing sand dunes and serene landscapes.",
       buttonText: "Save",
     },
     {
       image:
         "https://img.freepik.com/free-photo/coast-rural-majestic-vacation-wet-boat_1417-1278.jpg?ga=GA1.1.1648696547.1725951059&semt=ais_incoming",
       header: "Nature Waterfall",
       description:
         "Experience the tranquility of waterfalls with their breathtaking beauty and soothing sounds.",
       buttonText: "Save",
     },
   ];
 
   return (
     <div>
       <h1 className="text-2xl p-10 text-center font-bold">
         The Importance of <span className="text-orange-400">Nature</span>
       </h1>
       <div className="flex justify-center gap-10">
         {cardsData.map((card, index) => (
           <Card
             key={index}
             image={card.image}
             header={card.header}
             description={card.description}
             buttonText={card.buttonText}
           />
         ))}
       </div>
       <Footer />
     </div>
   );
 }
 
 export default Home;
 