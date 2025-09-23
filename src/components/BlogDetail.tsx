import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaUserEdit, FaTimes } from "react-icons/fa";

type Blog = {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
  insights?: string[];
  author?: string;
  authorRole?: string;
  authorImage?: string;
};

type BlogDetailProps = {
  blog: Blog | null;
  onBack: () => void;
};

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  const [showImage, setShowImage] = useState(false);

  // 🚀 Prevent background scroll while detail is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!blog) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 overflow-y-auto z-50">
      {/* 🔙 Floating Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 px-3 py-2 rounded-full shadow-lg transition
             bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500
             text-white dark:text-black font-semibold"
      >
        ← Back
      </button>


      <div className="max-w-3xl mx-auto px-4 py-20">
        {/* Blog Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
          <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-designColor" /> {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <FaUserEdit className="text-designColor" />{" "}
              {blog.author || "George Kasmiro"}
            </span>
          </div>
        </header>

        {/* Blog Image */}
        {blog.image && (
          <figure className="mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-lg w-full object-cover shadow-lg cursor-pointer hover:opacity-90 transition"
              onClick={() => setShowImage(true)}
            />
            <figcaption className="text-xs text-neutral-500 mt-2">
              {blog.title} (click image to enlarge)
            </figcaption>
          </figure>
        )}

        {/* Blog Content */}
        <article className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-6 leading-relaxed">{blog.content}</p>

          <blockquote className="border-l-4 border-designColor pl-4 italic text-neutral-600 dark:text-neutral-400 my-6">
            “The Future of Cybersecurity with AI.”
          </blockquote>

          {/* ✅ Dynamic Insights */}
          {blog.insights && blog.insights.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
              <ul className="list-disc pl-6 space-y-4">
                {blog.insights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </>
          )}
        </article>

        {/* Author Section */}
        <div className="mt-12 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-md flex items-center gap-4">
          <img
            src={blog.authorImage || "/images/faicon.png"}
            alt={blog.author || "George Kasmiro"}
            className="w-16 h-16 rounded-full object-cover border-2 border-designColor/80 hover:border-designColor"
          />
          <div>
            <h3 className="font-semibold text-lg">
              {blog.author || "George Kasmiro"}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {blog.authorRole || "Computer Science Engineer & Ethical Hacker"}
            </p>
          </div>
        </div>
      </div>

      {/* 🔍 Fullscreen Image Modal */}
      {showImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={() => setShowImage(false)}
            className="absolute top-6 right-6 text-white text-3xl p-2 rounded-full bg-red-600 hover:bg-red-700 transition"
          >
            <FaTimes />
          </button>
          <img
            src={blog.image}
            alt={blog.title}
            className="max-w-5xl max-h-[95%] object-contain rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
