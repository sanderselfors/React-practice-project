import { useEffect, useState } from "react";

function PostPage() {
    const [postData, setDataPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const searchQuery = window.location.search;
            const url = new URLSearchParams(searchQuery);
            const id = url.get("id");
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
            );
            const json = await res.json();

            }
        }
    })
  return (
    <>
    <h1>Hello!</h1>
    <h2>iPhone X</h2>
    <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            alt="Iphone X"
            className="h-auto max-w-lg"
          />
          <p>Check out this new product from Apple.</p>
    </>
  );
}

export default PostPage;
