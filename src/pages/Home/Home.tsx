import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const themes = ["theme-black", "theme-orange", "theme-purple", "theme-green", "theme-blue"];
const Home = () => {
  const [theme, setTheme] = useState(themes[1]);

  return (
    <div className={twMerge("flex justify-center my-2", theme)}>
      <div className="flex flex-col w-[600px] bg-bgPrimary p-4 rounded-lg">
        <h1 className="text-4xl font-bold text-primary">
          Lorem ipsum dolor sit amet.
        </h1>
        <h2 className="text-justify text-primary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam esse
          aliquam amet dolore itaque earum non tenetur, accusantium delectus
          nostrum ipsum eum quae culpa quaerat quod excepturi, reiciendis
          impedit facere!
        </h2>
        <p>
          <div className="relative flex justify-center">
            <img
              className="rounded-3xl"
              src="https://scontent.fpnq7-2.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c379.0.1290.1290a_dst-jpg_s100x100_tt6&_nc_cat=1&ccb=1-7&_nc_sid=7565cd&_nc_ohc=SHEgfClUaLkQ7kNvwG2fkWA&_nc_oc=AdnTnArPDTxr5ucMWH1BxUccwHQaGQNIpNnKwS4LsQ0hTilFmNFluBq4JK_7WTO9TvkXOdaClcY2S92swp9-uGUQ&_nc_zt=24&_nc_ht=scontent.fpnq7-2.fna&oh=00_AfMaQ8umIxPuzQeyasCEHEyZ55AxCRoj16AhnbT4_XkaGw&oe=68874019"
              alt=""
            />
          </div>
          <p className="text-justify text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            sapiente eaque pariatur quia nesciunt vel modi magnam, a ea alias
            rerum voluptatem in veniam iure id aliquid qui quidem eius porro
            quaerat eos vero cumque autem molestias? Hic impedit quam autem
            minus dicta veniam adipisci magni labore at reprehenderit? Vero
          </p>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
          <div className="flex gap-4">
            <button className="px-6 py-2 font-medium border rounded text-tBase bg-primary hover:bg-secondary hover:text-primary border-primary ">
              Buy Now
            </button>
            <button className="px-6 py-2 font-medium border rounded bg-bgPrimary hover:bg-primary hover:text-tBase border-primary text-primary ">
              Click me
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home;
