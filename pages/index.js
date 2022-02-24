import axios from "axios";
import { useState, useEffect } from "react";

export default function Home({ posts }) {
  const [isReact, setIsReact] = useState(posts);

  // `http://admin.opediatech.com/api/service`

  console.log("isReact", posts);

  return (
    <>
      <p>demo</p>
      {isReact?.map((i) => (
        <div
          key={i.id}
          style={{
            border: "4px solid salmon",
            padding: "10px",
            margin: "10px ",
            borderRadius: "10px ",
          }}
        >
          <p>d{i.id}</p>
          <p>{i.service_title}</p>
          <p>{i.service_slug}</p>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://admin.opediatech.com/api/service`);
  const posts = await res.json();
  console.log(res);

  return {
    props: {
      posts,
    },
  };
}
