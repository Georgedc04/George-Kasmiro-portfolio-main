import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className=" pt-24 min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
        <p className="mb-6 text-lg text-center text-gray-600 dark:text-gray-400">
          Last updated: March 2025
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing and using this website, you agree to comply with and be bound by
              these Terms of Service. If you do not agree with any part, you must not use
              our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Use of Services</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You agree to use our services only for lawful purposes and in accordance with
              all applicable laws and regulations. Unauthorized use may result in termination
              of your access.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All content, trademarks, and design elements on this website are owned or
              licensed by us. You may not reproduce, distribute, or use any content without
              prior written permission.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We are not responsible for any direct, indirect, or incidental damages that
              may arise from the use or inability to use our services.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update these Terms of Service at any time. Continued use of the website
              after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>

        {/* Back Home Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/"
            className="px-6  py-3 border border-designColor/90  text-white font-semibold rounded-xl shadow bg-gradient-to-r from-designColor/60 to-black hover:bg-gradient-to-r hover:from-black hover:to-designColor/70 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
