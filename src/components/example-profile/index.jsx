import { useUser } from "../../lib/my-api";

function ExampleProfile() {
  const userId = 2;
  const { status, error, data } = useUser(userId);
  const isLoading = status === "loading";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  console.log("user data >>>>", data);

  return (
    <>
      _PROFILE_CONTENT_GOES_HERE_
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>Eye color is {data.eyeColor}</p>
      <img src={data.image} alt="avatar" />
      <h2>Bio</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        sed aliquam temporibus fugiat in accusantium sint ipsum sequi
        consequuntur, necessitatibus vitae iusto facere officia dolorum nobis.
        Deleniti veniam voluptates dolores.
      </p>
    </>
  );
}

export default ExampleProfile;
