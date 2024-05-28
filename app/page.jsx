"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.alert("hello next js");
  }, []);
  return (
    <>
      <h1>Ini page portal berita</h1>
      <p>Hello world ini adalah next js app</p>
    </>
  );
}
