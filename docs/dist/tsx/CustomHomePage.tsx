export default function CustomHomepage() {
  return (
    <div id="wrapper">
      {/* Header */}
      <header id="header">
        <div className="logo">
          <i className="fa-solid fa-infinity"></i>
        </div>
        <div className="content">
          <div className="inner">
            <h1>John Whitton</h1>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/about">About John</a>
            </li>
            <li>
              <a href="/work">Resume/CV</a>
            </li>
            <li>
              <a href="/references/intro">References</a>
            </li>
            <li>
              <a href="/posts">Writing</a>
            </li>
            <li>
              <a href="/research">Research</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Footer */}
      <footer id="footer">
        <h3>
          <a href="https://meet.johnwhitton.com">Meet with John</a>
        </h3>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/john_a_whitton"
              className="icon brands fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/johnwhitton/"
              className="icon brands fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/johnwhitton"
              className="icon brands fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@john_whitton"
              className="icon brands fa-medium"
            >
              <span className="label">Medium</span>
            </a>
          </li>
        </ul>
        <p className="copyright">
          John Whitton.{" "}
          <a href="mailto:john@johnwhitton.com">john@johnwhitton.com</a>
          <br />
          &copy; John Whitton. Design:{" "}
          <a href="https://html5up.net">HTML5 UP</a>.
        </p>
      </footer>

      {/* Background */}
      <div id="bg"></div>
    </div>
  );
}
