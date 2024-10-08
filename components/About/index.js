import Image from "next/image";
import Button from "../Button";

export default function About() {
  return (
    <section id="about">
      <article className="about">
        <h1 className="about__title">Hello! I'm Leandro, a full stack developer.</h1>
        <div className="img">
          <Image
            src="/images/profile.jpg"
            alt="perfil"
            width={300}
            height={404}
            objectFit="cover"
            style={{ borderRadius: "6px" }}
          />
        </div>
        <p className="about__desc">
          With more than 3 years of experience in web development. I'm currently working with technologies such as
          React.js, Next.js, Node.js, JavaScript and TypeScript. <br />
          Always ready to listen, learn, teach and above all, improve myself every day as a developer.
        </p>
        <div className="about__wrapper_buttons">
          <Button href="https://www.linkedin.com/in/lemorles/" color="primary" target="_blank">
            Visit Linkedin
          </Button>
          <Button href="https://github.com/lemorles" color="secondary" target="_blank">
            Visit Github
          </Button>
        </div>
      </article>

      <style jsx>{`
        section {
          margin: 0 0 96px;
          height: 44vh;
          display: flex;
          align-items: flex-end;
        }

        .about__title {
          font-size: 28px;
          text-align: left;
          margin: 0 0 16px;
        }

        .img {
          width: 0;
          height: 0;
        }

        .about__desc {
          margin: 0 0 32px;
          max-width: 550px;
        }

        .about__wrapper_buttons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        @media screen and (min-width: 768px) {
          section {
            height: 60vh;
          }

          .about {
            display: grid;
            grid-template-areas:
              "title    img"
              "desc     img"
              "buttons  img";
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .about__title {
            grid-area: title;
            font-size: 2.5rem;
            margin-bottom: 0;
            max-width: 400px;
          }

          .img {
            grid-area: img;
            width: 300px;
            height: 100%;
            border-radius: 6px;
            filter: grayscale(80%);
          }

          .about__desc {
            grid-area: desc;
            max-width: 400px;
            font-size: 1.2rem;
          }

          .about__wrapper_buttons {
            grid-area: buttons;
          }
        }
      `}</style>
    </section>
  );
}
