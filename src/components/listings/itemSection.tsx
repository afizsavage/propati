import { useQuery, gql } from "@apollo/client";
import { AiOutlineHeart } from "react-icons/ai";

const GetLaunches = gql`
  query GetLaunches {
    ships(limit: 12) {
      image
      name
      id
    }
  }
`;

const Cards = () => {
  const { loading, error, data } = useQuery(GetLaunches);
  console.log(data);

  return (
    <>
      {data.ships.map(({ image, name, id }) => {
        return (
          <li
            key={id}
            className="my-4 w-full md:w-1/2 lg:my-4 lg:px-5 lg:w-1/3"
          >
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-48 w-full"
                  src={image}
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    {name}
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">14/4/19</p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p className="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <AiOutlineHeart />
                </a>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </li>
        );
      })}
    </>
  );
};

function ItemsSection() {
  const { loading, error, data } = useQuery(GetLaunches);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="w-full pb-8 pt-1">
      <div className="w-full">
        <ol className="px-6 lg:px-11 w-full flex flex-wrap ">
          <Cards />
        </ol>
      </div>
    </div>
  );
}
