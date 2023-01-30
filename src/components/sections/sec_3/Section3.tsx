// components
import { BlockHeading } from "../../layout";
import { FadeInDiv } from "../../animation";
import { Info, HorizontalLine, TicketList, TheSpace } from ".";

export const Section3: React.FC = () => {
  return (
    <section id="theme-3">
      <div className="w-full pt-[13vw] pb-[8vw] px-[5%]">
        <FadeInDiv once>
          <BlockHeading
            theme="theme3"
            text={["WHAT'S COOKIN", "GOOD LOOKIN?"]}
            className="mb-[5vw]"
          />
        </FadeInDiv>
        <Info />
        <HorizontalLine className="py-[7vw]" id="list-weekend" />
        <TicketList />
      </div>
      <TheSpace />
    </section>
  );
};

export default Section3;
