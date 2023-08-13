"use client";
import { useEffect } from "react";
import AOS from "aos";

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
};

export default useAOS;
