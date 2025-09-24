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
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={onBack}
          className="  mt-3 inline-flex items-center justify-center 
                      px-7 py-1.5 border border-designColor/80 
                      text-xs text-white font-medium rounded-md 
                      shadow bg-gradient-to-r from-designColor/60 to-black 
                      hover:from-black hover:to-designColor/60 
                      transition"
        >
          ← Back
        </button>

      </div>


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
            <figcaption className="text-xs text-designColor/90 dark:text-yellow-400/80 mt-2">
              {blog.title} (click image to enlarge)
            </figcaption>
          </figure>
        )}

        {/* Blog Content */}
        <article className="prose dark:prose-invert max-w-none">
            <p className="mb-4 leading-relaxed">{blog.content}</p>

            {blog.insights && blog.insights.length > 0 && (
              <>
                <ul className="list-disc pl-6 space-y-2">
                  {blog.insights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </>
            )}
          </article>


        {/* Author Section */}
        <div className="mt-12 p-6 bg-white/20 dark:bg-black/20 bg-gradient-to-b from-gray-400 to-[#ffffff23] dark:from-[#023b5588] dark:to-[#00000046] rounded-md shadow-shadowOne dark:shadow-shadowTwo flex items-center gap-4">
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
