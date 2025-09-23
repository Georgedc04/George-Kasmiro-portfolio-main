import { useState } from "react";
import BlogDetail from "../components/BlogDetail";
import BlogCard from "../components/BlogCard";

const blogs = [
  {
    id: 1,
    title:
      "Harnessing AI for Cybersecurity: Insights from a Keynote at Graphic Era Hill University",
    date: "Sep 8, 2025",
    image: "/images/blog/blog1.jpg",
    content:
      "This blog presents a detailed overview of a keynote session at Graphic Era Hill University, where the speaker addressed the importance of Artificial Intelligence (AI) in enhancing cybersecurity...",
  },
  {
    id: 2,
    title: "Top 5 Cybersecurity Tips",
    date: "Aug 20, 2025",
    image: "/images/cybersecurity.jpg",
    content:
      "Learn about the top 5 cybersecurity practices that help you secure your online accounts and personal data.",
  },
  {
    id: 3,
    title: "React vs Next.js – Which One to Choose?",
    date: "Jul 15, 2025",
    image: "/images/react-vs-next.jpg",
    content:
      "A comparison between React and Next.js, helping you decide which is better suited for your next project.",
  },
  {
    id: 4,
    title: "Improving Website SEO in 2025",
    date: "Jun 10, 2025",
    image: "/images/seo.jpg",
    content:
      "Tips and strategies to improve your website’s SEO, ensuring it ranks higher in search engine results.",
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
        <h2 className="text-3xl font-bold text-center mb-10">Latest Blogs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              date={blog.date}
              content={blog.content}
              image={blog.image}
              onClick={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
