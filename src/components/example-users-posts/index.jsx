import { useUsersPosts } from "../../lib/my-api";

function ExampleUsersPosts() {
  const userId = 2;
  const { status, error, data } = useUsersPosts(userId);
  const isLoading = status === "loading";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <section role="search"></section>

      <article role="doc-introduction">
        <h2>List</h2>

        {data.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </article>

      <section role="list">
        <div id="js-list-container">_LOADING_INDICATOR_GOES_HERE_</div>
      </section>
    </>
  );
}

export default ExampleUsersPosts;
