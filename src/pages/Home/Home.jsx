import { Welcome } from "./Sections/Welcome/Welcome";
import { Cloud } from "./Sections/Cloud/Cloud";
import { WhatIsIt } from "./Sections/WhatIsIt/WhatIsIt";
import { Testimonial } from "./Sections/Testimonial/Testimonial";
import { News } from "./Sections/News/News";
import { Features } from "./Sections/Features/Features";

export const Home = () => {
  return (
    <>
      <section className="welcome">
        <Welcome />
      </section>
      <section className="cloud">
        <Cloud />
      </section>
      <section className="whatisit">
        <WhatIsIt />
      </section>
      <section className="features">
        <Features />
      </section>
      <section className="testimonial">
        <Testimonial />
      </section>
      <section className="news">
        <News />
      </section>
    </>
  );
};
