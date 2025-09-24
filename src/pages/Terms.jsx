const Terms = () => {
  return (
    <div className=" pt-24 max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Terms of Service</h1>
      <p>Welcome to my portfolio website. By accessing or using this site, you agree to the following terms:</p>

      <h2 className="text-xl font-semibold">1. Personal Use Only</h2>
      <p>This site and its content are intended for personal viewing, learning, and reference. You may not redistribute or use the content for commercial purposes without my permission.</p>

      <h2 className="text-xl font-semibold">2. External Links</h2>
      <p>This portfolio may include links to external websites. I am not responsible for their content or privacy practices.</p>

      <h2 className="text-xl font-semibold">3. Accuracy of Information</h2>
      <p>While I strive to provide accurate and up-to-date information about my work and projects, I do not guarantee completeness or correctness.</p>

      <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
      <p>All content, images, and code snippets on this site are owned by me unless otherwise credited. Unauthorized use is prohibited.</p>

      <h2 className="text-xl font-semibold">5. Modifications</h2>
      <p>I may update or modify these terms at any time. Continued use of the site signifies acceptance of any changes.</p>

      <p className="text-center text-gray-500">
        © {new Date().getFullYear()} George Kasmiro. All rights reserved.
      </p>

    </div>
  );
};

export default Terms;
