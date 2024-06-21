"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@/data/websitedata";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 监听页面滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 处理点击返回顶部按钮事件
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
      <>
        {isVisible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <ArrowUpIcon className="w-[22px] h-auto mb-[-4px]" />
            </button>
        )}
      </>
  );
};

export default ScrollToTopButton;
