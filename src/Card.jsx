// Card.jsx
import React from "react";
import styled from "styled-components";

const Card = ({
  name = "Aryan Rustagi",
  title = "Computer Science",
  photo = null,
  github = "",
  linkedin = ""
}) => {
  return (
    <StyledWrapper>
      <div className="card-client" role="group" aria-label={`${name} card`} tabIndex={0}>
        {/* Square Image */}
        <div className="user-picture" aria-hidden={photo ? "false" : "true"}>
          {photo ? (
            <img src={photo} alt={`${name} profile`} />
          ) : (
            <svg viewBox="0 0 448 512" aria-hidden="true" focusable="false">
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM274.7 304H173.3C77.6 304 
            0 381.6 0 477.3 0 496.5 15.5 512 34.7 512h378.6c19.2 0 34.7-15.5 34.7-34.7C448 381.6 370.4 304 274.7 304z" />
            </svg>
          )}
        </div>

        {/* Info */}
        <p className="name">{name}</p>
        <p className="title">{title}</p>

        {/* Social Buttons */}
        <div className="social" aria-label={`${name} social links`}>
          {github ? (
            <a
              className="social-btn github"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name}'s GitHub profile`}
            >
              <svg viewBox="0 0 24 24" className="icon" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 .5A12 12 0 0 0 0 12.7a12.2 12.2 0 0 0 8.2 11.6c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.3-1.8c-1-.7.1-.7.1-.7a2.6 2.6 0 0 1 1.9 1.3 2.7 2.7 0 0 0 3.7 1 2.8 2.8 0 0 1 .8-1.7c-2.7-.3-5.6-1.4-5.6-6a4.6 4.6 0 0 1 1.2-3.2 4.2 4.2 0 0 1 .1-3.1s1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.2 4.2 0 0 1 .1 3.1 4.6 4.6 0 0 1 1.2 3.3c0 4.6-2.9 5.7-5.6 6a3 3 0 0 1 .9 2.3v3.4c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7 12 12 0 0 0 12 .5Z"/>
              </svg>
              <span className="btn-text">GitHub</span>
            </a>
          ) : null}

          {linkedin ? (
            <a
              className="social-btn linkedin"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name}'s LinkedIn profile`}
            >
              <svg viewBox="0 0 24 24" className="icon" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3v-12zm7.5 0h3.8v1.7h.1c.5-.9 1.8-1.8 3.7-1.8 3.9 0 4.6 2.6 4.6 6v6.1h-4v-5.4c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.6h-4v-12z"/>
              </svg>
              <span className="btn-text">LinkedIn</span>
            </a>
          ) : null}
        </div>
      </div>
    </StyledWrapper>
  );
};

/* StyledWrapper — unified larger border radii */
const StyledWrapper = styled.div`
  /* design tokens */
  :root{
    --radius: 28px;           /* bumped main radius so everything is softer */
    --card-radius: var(--radius);
    --btn-radius: 16px;       /* larger button radius */
    --icon-radius: 12px;      /* larger icon box radius */
    --tooltip-radius: 12px;   /* tooltip rounded */

    --text-light: #fff;
    --text-dark: #26140a;
    --gold-1: #ffb347; /* light gold */
    --gold-2: #ffcc33; /* accent gold */
    --gold-3: #e07b1a; /* deeper gold */
  }

  box-sizing: border-box;
  font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .card-client {
  border-radius: 10%;

    width: 100%;
    max-width: 18rem;
    min-height: 26.5rem;
    padding: 22px;
    border-radius: var(--card-radius); /* applied */
    color: var(--text-light);
    text-align: center;

    /* golden glass base */
    background: linear-gradient(
      135deg,
      rgba(255, 188, 95, 0.28),
      rgba(255, 220, 115, 0.20) 45%,
      rgba(255, 255, 255, 0.06) 100%
    );
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    border: 1.5px solid rgba(255, 200, 100, 0.32);
    box-shadow:
      0 10px 30px rgba(224, 140, 40, 0.18),
      inset 0 0 22px rgba(255, 210, 120, 0.06);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    transition: transform 260ms cubic-bezier(.2,.9,.3,1), box-shadow 260ms, background 260ms, border-color 260ms;
    position: relative;
    overflow: visible;
  }

  /* hover & focus */
  .card-client:is(:hover, :focus-within) {
    transform: translateY(-6px) scale(1.02);

    background: linear-gradient(
      135deg,
      rgba(255, 185, 85, 0.92),
      rgba(255, 215, 110, 0.55) 55%,
      rgba(255, 240, 180, 0.22) 100%
    );

    border-color: rgba(255, 200, 80, 0.95);

    box-shadow:
      0 20px 60px rgba(224, 145, 40, 0.30),
      inset 0 0 40px rgba(255, 235, 170, 0.07);

    color: var(--text-dark);
  }

  @media (prefers-reduced-motion: reduce) {
    .card-client { transition: none; transform: none; }
  }

  /* ---------------------------
     Avatar + pop-up on hover
     --------------------------- */

  .user-picture {
    width: 136px;
    height: 136px;
    border-radius: calc(var(--card-radius) - 10px); /* slightly less than card for layering */
    padding: 10px;
    display: grid;
    place-items: center;
    background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.06));
    border: 2px solid rgba(255,255,255,0.06);
    box-shadow: inset 0 -6px 12px rgba(0,0,0,0.12);
    transition: 
      transform 260ms cubic-bezier(.25,.9,.35,1.4),
      box-shadow 260ms ease,
      border-color 260ms ease;
    overflow: hidden;
    position: relative;
    z-index: 2;
  }

  /* POP on avatar */
  .card-client:hover .user-picture,
  .card-client:focus-within .user-picture {
    transform: translateY(-12px) scale(1.14);
    border-color: rgba(255, 215, 130, 0.55);
    box-shadow:
      0 14px 36px rgba(255, 200, 100, 0.38),
      inset 0 -10px 18px rgba(0, 0, 0, 0.18);
  }

  .user-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: calc(var(--card-radius) - 10px);
    transition: transform 300ms cubic-bezier(.2,.9,.3,1.1), filter 300ms ease;
    transform-origin: center center;
  }

  .card-client:hover .user-picture img,
  .card-client:focus-within .user-picture img {
    transform: scale(1.12);
    filter: saturate(1.05) contrast(1.02);
  }

  .user-picture::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    z-index: -1;
    transition: opacity 300ms ease, transform 300ms ease;
    opacity: 0;
    transform: scale(0.92);
    box-shadow: 0 18px 40px rgba(255, 190, 70, 0.12);
  }

  .card-client:hover .user-picture::after,
  .card-client:focus-within .user-picture::after {
    opacity: 1;
    transform: scale(1.06);
    box-shadow: 0 28px 70px rgba(255, 190, 70, 0.24);
  }

  /* ---------------------------
     Name & Title
     --------------------------- */
  .name {
    font-size: 1.45rem;
    font-weight: 900;
    margin: 6px 0 0 0;
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: var(--text-light);
    transition: color 220ms ease;
    z-index: 3;
  }

  .card-client:is(:hover, :focus-within) .name {
    color: var(--text-dark);
  }

  .title {
    font-size: 1rem;
    font-weight: 700;
    margin: -4px 0 6px 0;
    opacity: 0.95;
    color: rgba(255,255,255,0.92);
    transition: color 220ms ease;
    z-index: 3;
  }

  .card-client:is(:hover, :focus-within) .title {
    color: rgba(38,20,10,0.92);
  }

  /* badge */
  .badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(255,255,255,0.08);
    padding: 6px 10px;
    border-radius: var(--btn-radius);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--text-dark);
    border: 1px solid rgba(255,255,255,0.06);
    backdrop-filter: blur(4px);
    z-index: 4;
  }

  /* ---------------------------
     Social Buttons
     --------------------------- */
  .social {
    margin-top: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 3;
  }

  .social-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 14px 16px;
    border-radius: var(--btn-radius); /* larger button radius */
    cursor: pointer;
    text-decoration: none;
    color: var(--text-light);
    background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
    border: 1px solid rgba(255,255,255,0.06);
    font-size: 1.05rem;
    font-weight: 800;
    transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease, color 200ms;
    justify-content: flex-start;
    padding-left: 18px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.10);
  }

  .social-btn .icon {
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    display: inline-block;
    border-radius: var(--icon-radius); /* larger icon radius */
    background: rgba(255,255,255,0.06);
    color: var(--text-light);
    padding: 5px;
    box-sizing: content-box;
  }

  .social-btn:hover,
  .social-btn:focus {
    transform: translateY(-6px);
    background: rgba(42, 26, 8, 0.90);
    color: var(--gold-2);
    box-shadow: 0 18px 36px rgba(224,140,40,0.18);
    outline: none;
  }

  .social-btn:hover .icon,
  .social-btn:focus .icon {
    background: rgba(255,255,255,0.06);
    color: #fff;
  }

  .social-btn.github .icon { background: linear-gradient(180deg,#111,#333); color: #fff; }
  .social-btn.linkedin .icon { background: linear-gradient(180deg,#0a66c2,#0077b5); color: #fff; }

  .social-btn:focus-visible {
    box-shadow: 0 12px 32px rgba(224,140,40,0.18), 0 0 0 4px rgba(255,200,100,0.08);
    border-color: rgba(255,200,100,0.28);
  }

  /* tooltip */
  .tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(6px);
    background: rgba(10,10,10,0.92);
    color: #fff;
    padding: 6px 8px;
    font-size: 12px;
    border-radius: var(--tooltip-radius);
    opacity: 0;
    pointer-events: none;
    transition: opacity 140ms ease, transform 140ms ease;
    white-space: nowrap;
    z-index: 5;
  }

  .social-btn:hover .tooltip,
  .social-btn:focus .tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  /* Responsive */
  @media (max-width: 420px) {
    .card-client {
      max-width: 100%;
      padding: 16px;
      min-height: 24rem;
    }
    .user-picture { width: 112px; height: 112px; border-radius: calc(var(--card-radius) - 14px); }
    .name { font-size: 1.25rem; }
    .title { font-size: 0.95rem; }
    .social-btn { font-size: 0.95rem; padding: 12px; border-radius: calc(var(--btn-radius) - 6px); }
    .social-btn .icon { width: 28px; height: 28px; padding: 5px; border-radius: calc(var(--icon-radius) - 6px); }
  }
`;

export default Card;
