export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h2 className="text-xl font-bold text-yellow-500">
            PowerZone Fitness
          </h2>

          <div className="space-x-6 hidden md:flex text-gray-300">
            <a href="#about" className="hover:text-yellow-500 transition">
              About
            </a>
            <a href="#pricing" className="hover:text-yellow-500 transition">
              Pricing
            </a>
            <a
              href="#transformations"
              className="hover:text-yellow-500 transition"
            >
              Gallary
            </a>
            <a
              href="#Testimonials"
              className="hover:text-yellow-500 transition"
            >
              Testimonials
            </a>
            <a
              href="#Contact"
              className="hover:text-yellow-500 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center text-center px-6 h-screen pt-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Elevate Your <span className="text-yellow-500">Fitness Journey</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          Experience world-class training, premium equipment, and a
          transformation program designed for serious results.
        </p>

        <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300">
          Book Private Consultation
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="text-yellow-500">PowerZone</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            We combine elite-level coaching, luxury training environment, and
            personalized fitness strategies to deliver unmatched results.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-black border border-zinc-800 p-8 rounded-xl hover:border-yellow-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Certified Trainers
              </h3>
              <p className="text-gray-400">
                Our expert coaches design personalized programs tailored to your
                fitness goals and body type.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-black border border-zinc-800 p-8 rounded-xl hover:border-yellow-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Premium Equipment
              </h3>
              <p className="text-gray-400">
                Train with imported machines and world-class equipment built for
                serious performance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-black border border-zinc-800 p-8 rounded-xl hover:border-yellow-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Result-Focused Programs
              </h3>
              <p className="text-gray-400">
                Structured transformation plans for fat loss, muscle gain, and
                strength development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Membership <span className="text-yellow-500">Plans</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Choose the plan that fits your commitment level. All plans include
            full gym access and professional guidance.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-yellow-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Basic
              </h3>
              <p className="text-4xl font-bold mb-6">
                ₹1499<span className="text-lg text-gray-400">/month</span>
              </p>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li>✔ Gym Access</li>
                <li>✔ Locker Facility</li>
                <li>✔ Basic Guidance</li>
              </ul>
              <button className="w-full border border-yellow-500 text-yellow-500 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition">
                Join Now
              </button>
            </div>

            {/* Premium Plan (Highlighted) */}
            <div className="bg-zinc-900 border-2 border-yellow-500 p-8 rounded-xl shadow-lg shadow-yellow-500/20 scale-105">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Premium
              </h3>
              <p className="text-4xl font-bold mb-6">
                ₹2999<span className="text-lg text-gray-400">/month</span>
              </p>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li>✔ Personal Trainer</li>
                <li>✔ Custom Diet Plan</li>
                <li>✔ Transformation Tracking</li>
              </ul>
              <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
                Get Started
              </button>
            </div>

            {/* Elite Plan */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-yellow-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Elite
              </h3>
              <p className="text-4xl font-bold mb-6">
                ₹4999<span className="text-lg text-gray-400">/month</span>
              </p>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li>✔ 1-on-1 Coaching</li>
                <li>✔ Advanced Diet Plan</li>
                <li>✔ Priority Support</li>
              </ul>
              <button className="w-full border border-yellow-500 text-yellow-500 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition">
                Join Elite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="transformations" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real <span className="text-yellow-500">Transformations</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Our members achieve visible results through structured programs and
            elite coaching.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 w-full rounded-xl overflow-hidden border border-zinc-800">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlie9HdJYx86fePdCYO9bDMq9f9kNmDHNxhA&s"
    alt="Transformation"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>
            

            <div className="relative h-64 w-full rounded-xl overflow-hidden border border-zinc-800">
  <img
    src="https://t3.ftcdn.net/jpg/07/18/46/14/360_F_718461452_HE9cXmauaNQeiRRzEX1ngjSm3ZE02ouT.jpg"
    alt="Transformation"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>

            
            <div className="relative h-64 w-full rounded-xl overflow-hidden border border-zinc-800">
  <img
    src="https://media.istockphoto.com/id/521787663/photo/feeling-fine-and-looking-great.jpg?s=612x612&w=0&k=20&c=292LmRTX3J9wWqrdeAOGX0YUGrLktemBLjKIgsjsQko="
    alt="Transformation"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="Testimonials" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            What Our <span className="text-yellow-500">Members Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <p className="text-gray-400 mb-6">
                “I lost 12kg in 4 months. The trainers are extremely
                professional.”
              </p>
              <h4 className="text-yellow-500 font-semibold pb-4">Shymrone</h4>
              <img
                src="https://t4.ftcdn.net/jpg/08/41/88/55/360_F_841885510_SqTTRFiJBS4S77zG5pQUVgKkzKZjOPrV.jpg"
                alt="Transformation"
                className="rounded-xl object-cover h-64 w-full"
              />
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <p className="text-gray-400 mb-6">
                “Best premium gym experience in the city. Worth every rupee.”
              </p>
              <h4 className="text-yellow-500 font-semibold">Elsa White</h4>

              <img
                src="https://media.istockphoto.com/id/514518416/photo/tracking-her-progress.jpg?s=612x612&w=0&k=20&c=brCYthdPZk-A9LN8NNbfzJFwg5iGKPF-CKI6obS86zY="
                alt="Transformation"
                className="rounded-xl object-cover h-64 w-full"
              />
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <p className="text-gray-400 mb-6">
                “The personal coaching helped me build real strength.”
              </p>
              <h4 className="text-yellow-500 font-semibold">Imran Khan</h4>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjvPblenrrgE-IeEkI3lAXoJbHyycxFj7mA&s"
                alt="Transformation"
                className="rounded-xl object-cover h-64 w-full"
              />
            </div>
          </div>
        </div>
      </section>




      {/* footer  */}
      <footer
        id="footer"
        className="bg-zinc-950 border-t border-zinc-800 py-10 text-center text-gray-500"
      >
        
{/* contact  */}

      <section id="Contact" className="py-24 px-6 bg-zinc-950 text-left " >
        <p>Power Fitness Gym, Central Park, Love You City, India</p>
        <p>+91 (790) 676-6313</p>
        <br />
        <hr />
        <a href="#contact">
  <button className="bg-yellow-500 text-black px-6 py-3 mt-3 rounded-full font-semibold hover:bg-yellow-400 transition">
    Join Now
  </button>
</a>

    </section>



        <p>© 2026 PowerZone Fitness. All Rights Reserved.</p>
        <p className="mt-2 text-sm">Designed & Developed by <a href="https://www.linkedin.com/in/ameer-alam-aron-9a66317b/" target="_blank">Ameer Alam</a></p>
      </footer>

      <a
        href="https://wa.me/917906766313"
        target="_blank"
        className="fixed bottom-6 right-6 bg-yellow-500 text-black px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition"
      >
        WhatsApp
      </a>
    </main>
  );
}
