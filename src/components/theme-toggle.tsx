"use client";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaMoon, FaSun } from "react-icons/fa";
const ThemeToggle = () => {
  const Toggle = () => {
    setToggle(!toggle);
    toggle ? setTheme("dark") : setTheme("light");
  };
  const { setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);
  return (
    <Button className="rounded-lg px-3 py-2" onClick={() => Toggle()}>
      {toggle ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ThemeToggle;
