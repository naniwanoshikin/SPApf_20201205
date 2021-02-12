import React from 'react';

export const Footer = () => {
  return (
    <footer className="pt-5 pb-3 text-center">
      <ul className="d-inline-flex pl-3">
        <li>
          <a href="https://github.com/naniwanoshikin/shikichanpower.github.io/blob/master/index.html"
            target="_blank" rel="noreferrer noopener"
          >
            <span className="faa-parent animated-hover">
              <i className="fab fa-github fa-2x faa-tada"></i>
            </span>
          </a>
        </li>
        <li>
          <a className="share" href="https://twitter.com/intent/tweet?text=LGTM恵んでください🙇‍♂️&url=https://twitter.com/power_of_shikin/status/1346568577843773441"
            target="_blank" rel="noreferrer noopener"
          >
            <span className="faa-parent animated-hover">
              <i className="fab fa-twitter fa-2x faa-passing"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="http://instagram.com/shikitch_pk"
            target="_blank" rel="noreferrer noopener"
          >
            <span className="faa-parent animated-hover">
              <i className="fab fa-instagram fa-2x fa-flip-horizontal  faa-spin"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCyydUwy-0x2Tc-FcCWBQncw?view_as=subscriber"
            target="_blank" rel="noreferrer noopener"
          >
            <span className="faa-parent animated-hover">
              <i className="fab fa-youtube fa-2x faa-ring"></i>
            </span>
          </a>
        </li>
      </ul>
      <p>
        <a href="/">© shikitti-Portfolio.2020</a>
      </p>
    </footer>
  );
}
