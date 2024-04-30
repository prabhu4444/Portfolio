import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/experienceAmazon.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function ExperienceAbout() {
  const company = useRef(null);
  const experienceSection = useRef(null);
  const heading = useRef(null);
  const subheading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: experienceSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          subheading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.1
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [experienceSection]);

  return (
    // Try using max width to contain the size of the container
    <section id="experience" ref={experienceSection} aria-label="about me" className="Nav-Change">
      <Heading title="experience" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={company}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-5xl font-semibold leading-tight opacity-0"
            >
              Software Developer Intern
            </h3>
            <h5
            ref={subheading}
              className="translate-y-10 2xl:text-5xl font-medium leading-tight opacity-0"
            >
              Bangalore,India  ( January 2023 - June 2023 )
            </h5>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
            <br></br>
              • Led migration of key service from IMS to AEI-XREF, leveraging <b>REST APIs in Spring frameworks</b> for efficient retrieval of ASIN data.
              <br></br>
              <br></br>
              • Successfully developed Accessor and Manager components, enabling <b>parallel calls</b> using a custom executor service in Java.
              <br></br>
              <br></br>
              • Implemented categorization logic resulting in a 17% increase in product classification based on ASIN data, including ”New to Amazon,” ”Sold by Other Vendors,” and ”Already Sold by Multiple Vendors”.
              <br></br>
              <br></br>
              • Executed comprehensive unit and integration tests achieving a 98% test coverage using <b>JUnit 5</b> and <b>Mockito frameworks</b>, ensuring quality and functionality of the Accessor, Manager, and categorization logic.
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
