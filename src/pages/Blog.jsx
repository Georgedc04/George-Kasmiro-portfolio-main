import { useState } from "react";
import BlogDetail from "../components/BlogDetail";
import BlogCard from "../components/BlogCard";

const blogs = [
  {
    id: 1,
    title: "AI for Cybersecurity",
    date: "Sep 8, 2025",
    image: "/images/blog/blog1.jpg",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-designColor/90">Introduction</h3>
        <p>
          Discover how Artificial Intelligence (AI) is revolutionizing cybersecurity in real-world applications.
        </p>
        <h3 className="text-lg font-semibold text-designColor/90">Key Points</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
          <li>AI-powered threat detection identifies attacks before damage occurs.</li>
          <li>Automation reduces human error and speeds up incident response.</li>
          <li>Predictive analytics prevent future breaches by analyzing patterns.</li>
          <li>Enhanced fraud detection protects sensitive data and financial systems.</li>
        </ul>
        <h3 className="text-lg font-semibold text-designColor/90">Conclusion</h3>
        <p>
          Insights from a keynote at Graphic Era Hill University give you actionable knowledge to secure systems and stay ahead in cybersecurity.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Top Cybersecurity Tips",
    date: "Aug 20, 2025",
    image: "/images/blog/TIPs.jpg",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-designColor/90">Introduction</h3>
        <p>Practical cybersecurity tips everyone should follow:</p>
        <h3 className="text-lg font-semibold text-designColor/90">Key Points</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
          <li>Use strong, unique passwords and enable multi-factor authentication (MFA).</li>
          <li>Regularly update software to patch vulnerabilities.</li>
          <li>Avoid phishing scams by verifying email sources.</li>
          <li>Backup important data frequently to prevent loss.</li>
          <li>Secure Wi-Fi networks with strong encryption.</li>
        </ul>
        <h3 className="text-lg font-semibold text-designColor/90">Conclusion</h3>
        <p>
          Follow these steps to protect your online accounts, personal data, and digital life from hackers.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "React vs Next.js",
    date: "Jul 15, 2025",
    image: "/images/blog/RvN.png",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-designColor/90">Introduction</h3>
        <p>Choosing the right framework for your web project:</p>
        <h3 className="text-lg font-semibold text-designColor/90">Key Points</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
          <li>React: Best for SPAs, highly flexible, large community, great frontend interactivity.</li>
          <li>Next.js: Built-in server-side rendering, SEO-friendly, supports static site generation.</li>
          <li>Performance: Next.js offers faster initial load; React requires more manual optimization.</li>
          <li>Learning curve: React is beginner-friendly; Next.js requires SSR/SSG understanding.</li>
        </ul>
        <h3 className="text-lg font-semibold text-designColor/90">Conclusion</h3>
        <p>
          This guide helps developers select the best framework based on project needs, performance, and SEO goals.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Boost Your SEO",
    date: "Jun 10, 2025",
    image: "/images/blog/SEO.jpg",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-designColor/90">Introduction</h3>
        <p>Improve your website's SEO and rank higher in search engines:</p>
        <h3 className="text-lg font-semibold text-designColor/90">Key Points</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
          <li>Use descriptive, keyword-rich titles and meta descriptions.</li>
          <li>Optimize images with alt text and proper compression.</li>
          <li>Build high-quality backlinks from reputable sources.</li>
          <li>Ensure mobile responsiveness and fast loading speeds.</li>
          <li>Regularly update content to keep it relevant and engaging.</li>
        </ul>
        <h3 className="text-lg font-semibold text-designColor/90">Conclusion</h3>
        <p>
          Implement these strategies to increase traffic, improve user experience, and grow your online presence.
        </p>
      </div>
    ),
  },
];




const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  if (selectedBlog) {
    return (
      <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950">
        <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
      </div>
    );
  }

  return (
    <section
      id="blog"
      className="w-full py-20 pt-24 bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              date={blog.date}
              content={blog.content}
              image={blog.image}
              onClick={() => setSelectedBlog(blog)}
              contentClassName="text-sm sm:text-base text-gray-700 dark:text-gray-300 line-clamp-2 sm:line-clamp-none"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
