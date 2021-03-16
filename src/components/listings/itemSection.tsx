import { useQuery, gql } from "@apollo/client";

const GetLaunches = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        mission_patch
      }
      rocket {
        rocket_name
      }
    }
  }
`;

function ItemsSection() {
  const { loading, error, data } = useQuery(GetLaunches);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="w-full py-8">
      <div className="w-full">
        <ol className="px-16 w-full">
          {data.launchesPast.map(
            ({ id, links, mission_name, launch_date_local }) => {
              return (
                <li key={id}>
                  <a href="{links.video_link} ">
                    <h3>{mission_name}</h3>
                    <p>
                      <strong>Launch Date:</strong>{" "}
                      {new Date(launch_date_local).toLocaleDateString("en-US")}
                    </p>
                  </a>
                </li>
              );
            }
          )}
        </ol>
      </div>
    </div>
  );
}

export default ItemsSection;
/*export default ItemsSection;
data.launchesPast.map(({ id, links, mission_name, launch_date_local }) => {
    <a key={id} href={links.video_link}>
    <h3>{mission_name}</h3>
    <p>
      <strong>Launch Date:</strong>{" "}
      {new Date(launch_date_local).toLocaleDateString("en-US")}
    </p>
  </a>
  })}*/
