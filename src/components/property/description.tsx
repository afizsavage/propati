import React, { useState } from "react";

const ListingDescription = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="border-t">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 mt-10 ">
        Description
      </h2>
      <div className="text-lg text-gray-700 ">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam
          <a
            className={readMore ? "hidden" : "inline cursor-pointer"}
            onClick={(e) => {
              e.preventDefault;
              setReadMore(true);
            }}
          >
            ...<span className="text-teal-500 underline">readmore</span>
          </a>
          <span className={readMore ? "inline" : "hidden"}>
            eius modi tempora incidunt ut labore et dolore magnam Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur. aliquam quaerat voluptatem
          </span>
        </p>
      </div>
    </div>
  );
};

export default ListingDescription;
