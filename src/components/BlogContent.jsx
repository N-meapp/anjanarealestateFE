import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constats/Constats";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const BlogContent = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedBlog, setSelectedBlog] = useState(null); // Selected blog for modal

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/blog-list`);
      if (response.data && response.data.data) {
        setBlogData(response.data.data);
      } else {
        console.error("Unexpected response format", response.data);
        setError("Unexpected response format");
      }
    } catch (err) {
      setError("Failed to fetch blog data.");
    } finally {
      setLoading(false);
    }
  };

  const handleDialogOpen = (blog) => {
    setSelectedBlog(blog); // Set the selected blog
  };

  const handleDialogClose = () => {
    setSelectedBlog(null); // Clear the selected blog
  };

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="pt-[200px] mb-[100px]">
      <div className="grid grid-cols-2 gap-4 px-[150px]">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-lg rounded-2xl"
          >
            <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
              <img
                src={blog.image || "default-image-url.jpg"}
                alt={blog.title || "Blog Image"}
                className="h-full w-full rounded-md md:rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                {blog.category || "CATEGORY"}
              </div>
              <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                {blog.title}
              </h4>
              <p className="mb-3 text-slate-600 leading-normal font-light">
                {truncateText(blog.description, 300)}
              </p>
              <p className="text-gray-500 mb-8"> 
              {new Date(blog.date).toLocaleDateString()}
              </p> 
              <div>
                <button
                  className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
                  onClick={() => handleDialogOpen(blog)}
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <Dialog open={!!selectedBlog} handler={handleDialogClose}>
          <DialogHeader>{selectedBlog.title}</DialogHeader>
          <DialogBody className="h-[42rem] overflow-scroll">
            <Typography className="font-normal">
              {selectedBlog.description}
            </Typography>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="blue-gray" onClick={handleDialogClose}>
              Close
            </Button>
          </DialogFooter>
        </Dialog>
      )}
    </div>
  );
};

export default BlogContent;

