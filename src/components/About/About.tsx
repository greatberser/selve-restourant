import Image from 'next/image';
import s from './About.module.css';

const About = () => {
  return (
    <section>
      <div className={s.container}>
        <div className={s.textWrapper}>
          <h2>About us</h2>
          <p>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            It&apos;s easy. Just click “Edit Text” or double click me to add
            your own content and make changes to the font. Feel free to drag and
            drop me anywhere you like on your page. I&apos;m a great place for
            you to tell a story and let your users know a little more about you.
            This is a great space to write long text about your company and your
            services.
          </p>
          <p>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            It&apos;s easy. Just click “Edit Text” or double click me to add
            your own content and make changes to the font. Feel free to drag and
            drop me anywhere you like on your page. I&apos;m a great place for
            you to tell a story and let your users know a little more about you.
            This is a great space to write long text.
          </p>
        </div>
        <Image src="/images/chef.jpg" alt="Chef" width={540} height={301} />
      </div>
    </section>
  );
};

export default About;
