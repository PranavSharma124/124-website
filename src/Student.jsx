// Student.jsx
import React from "react";
import styled from "styled-components";
import Card from "./Card";

import adityaImg from "./images/aditya.png";
import aryan from "./images/aryan.jpg";
import mayank from "./images/mayank.png";
import shayam from "./images/Shayam.png";
import praveen from "./images/praveen.png";
import kumkum from "./images/kumkum.png";
import Mayank from "./images/509.png";
import ayush from "./images/ayush.png";
import viru from "./images/virendra.png";
import piyush from "./images/piyush.png";
import vidit from "./images/vidit.png";
import dheer from "./images/dheer.png";
import harshit from "./images/harshit.png";
import prateek from "./images/prateek.png";
import arya from "./images/arya.png";
import mohit from "./images/mohit.png";
import amit from "./images/amit.png";
import yuvraj from "./images/yuvraj.png";
import kartik from "./images/kartik.png";
import kanchi from "./images/kanchi.png";
import himesh from "./images/himesh.png";
import shreyansh from "./images/shreyansh.jpeg";
import pranav from "./images/pranav.jpeg";

export default function Student() {
  const students = [
    {
      id: 1,
      name: "Aditya Tiwari",
      title: "aditya.tiwari.s.124\n@kalvium.community",
      github: "https://github.com/aadityatiwari77",
      linkedin: "https://www.linkedin.com/in/aditya-tiwari-22423436b/",
      photo: adityaImg,
    },
    {
      id: 2,
      name: "Amit Sharma",
      title: "amit.sharma.s.124\n@kalvium.community",
      github: "https://github.com/AmitSharma-official",
      linkedin: "https://www.linkedin.com/in/amit-sharma-40394338a",
      photo: amit,
    },
    {
      id: 3,
      name: "Arya Tiwari",
      title: "arya.tiwari.s.124\n@kalvium.community",
      github: "https://github.com/aryatiwari124",
      linkedin: "https://www.linkedin.com/in/arya-tiwari-912391379/",
      photo: arya,
    },
    {
      id: 4,
      name: "Aryan Rustagi",
      title: "aryan.rustagi.s.124\n@kalvium.community",
      github: "https://github.com/aryanrustagi1234-ship-it",
      linkedin: "https://www.linkedin.com/in/aryan-rustagi-b0347534b/",
      photo: aryan,
    },
    {
      id: 5,
      name: "Ayushman Subhadarhan",
      title: "ayushman.subhadarshan.s.124\n@kalvium.community",
      github: "https://github.com/ayushmansubhadarshans",
      linkedin: "https://www.linkedin.com/in/ayushman-subhadarshan-818653396",
      photo: ayush,
    },
    {
      id: 6,
      name: "Dheer Jain",
      title: "dheer.jain.s.124\n@kalvium.community",
      github: "https://github.com/dheerjain0508",
      linkedin: "https://www.linkedin.com/in/dheer-jain-779312381/",
      photo: dheer,
    },
    {
      id: 7,
      name: "Harshit Bishnoi",
      title: "harshit.bishnoi.s.124\n@kalvium.community",
      github: "https://github.com/Harshbishnoi",
      linkedin: "https://www.linkedin.com/in/harshit-bishnoi-3bb234214",
      photo: harshit,
    },
    {
      id: 8,
      name: "Himesh Bhardwaj",
      title: "himesh.bhardwaj.s.124\n@kalvium.community",
      github: "https://github.com/Himesh9966",
      linkedin: "https://www.linkedin.com/in/himesh-bhardwaj-0872b337b",
      photo: himesh,
    },
    {
      id: 9,
      name: "Kanchi Chugh",
      title: "kanchi.chugh.s.124\n@kalvium.community",
      github: "https://github.com/kanchichugh22",
      linkedin: "https://www.linkedin.com/in/kanchi-chugh-232389376/",
      photo: kanchi,
    },
    {
      id: 10,
      name: "Kartik Agarwal",
      title: "kartik.agarwal.s.124\n@kalvium.community",
      github: "https://github.com/Kartik-professional-coder",
      linkedin: "https://www.linkedin.com/in/kartik-agarwal-a4b91b25b",
      photo: kartik,
    },
    {
      id: 11,
      name: "Kumkum Kushwah",
      title: "kumkum.kushwah.s.124\n@kalvium.community",
      github: "https://github.com/kumkum098",
      linkedin: "https://www.linkedin.com/in/kumkum-kushwah-96ab9337a",
      photo: kumkum,
    },
    {
      id: 12,
      name: "Mayank Khabya",
      title: "mayank.khabya.s.124\n@kalvium.community",
      github: "https://github.com/mayankkk06",
      linkedin: "https://www.linkedin.com/in/mayank-khabya-24110837b/",
      photo: Mayank,
    },
    {
      id: 13,
      name: "Mayank Sharma",
      title: "mayank.sharma.s.124\n@kalvium.community",
      github: "https://github.com/MayankSharma-2812",
      linkedin: "https://www.linkedin.com/in/mayank-sharma-7b277b312/",
      photo: mayank,
    },
    {
      id: 14,
      name: "Mohit Singh",
      title: "mohit.singh.s.124\n@kalvium.community",
      github: "https://www.github.com/mohitdebian",
      linkedin: "https://www.linkedin.com/in/mohitdebian/",
      photo: mohit,
    },
    {
      id: 15,
      name: "Parveen Dhaka",
      title: "parveen.dhaka.s.124\n@kalvium.community",
      github: "https://github.com/parveendhaka72",
      linkedin: "https://www.linkedin.com/in/parveen-dhaka-a8351037a/",
      photo: praveen,
    },
    {
      id: 16,
      name: "Piyush Yadav",
      title: "piyush.yadav.s.124\n@kalvium.community",
      github: "https://github.com/piyushrao741",
      linkedin: "https://www.linkedin.com/in/piyush-yadav-741pp852",
      photo: piyush,
    },
    {
      id: 17,
      name: "Pranav Sharma",
      title: "pranav.sharma.s.124\n@kalvium.community",
      github: "https://github.com/PranavSharma124",
      linkedin: "https://www.linkedin.com/in/pranav-sharma-51651337a/",
      photo: pranav,
    },
    {
      id: 18,
      name: "Prateek",
      title: "prateek.verma.s.124\n@kalvium.community",
      github: "https://github.com/Prateekverma11",
      linkedin: "https://www.linkedin.com/in/prateek-verma-693422382",
      photo: prateek,
    },
    {
      id: 19,
      name: "Shriyansh Jain ",
      title: "shriyansh.jain.s.124\n@kalvium.community",
      github: "https://github.com/logicalshri001",
      linkedin: "https://www.linkedin.com/in/cool-shri-112159365",
      photo: shreyansh,
    },
    {
      id: 20,
      name: "Shyam Sharma",
      title: "shyam.sharma.s.124\n@kalvium.community",
      github: "https://github.com/shyamsharmas124-commits",
      linkedin: "https://www.linkedin.com/in/shyam-sharma-a908a6379/",
      photo: shayam,
    },
    {
      id: 21,
      name: "Vidit Kochar",
      title: "vidit.kochar.s.124\n@kalvium.community",
      github: "https://github.com/Viditkochar12",
      linkedin: "https://www.linkedin.com/in/vidit-kochar-482a56327/",
      photo: vidit,
    },
    {
      id: 22,
      name: "Virendra Singh",
      title: "virendra.singh.s.124\n@kalvium.community",
      github: "https://github.com/virendrasingh11",
      linkedin: "https://www.linkedin.com/in/virendra-singh-923892368",
      photo: viru,
    },
    {
      id: 23,
      name: "Yuvraj Rajawat",
      title: "yuvraj.rajawat.s.124\n@kalvium.community",
      github: "https://github.com/onemanyuvi2",
      linkedin: "https://www.linkedin.com/in/yuvraj-singh-08672a375",
      photo: yuvraj,
    },
  ];

  return (
    <PageWrap>
      <Header>
        <h2>Our Students</h2>
        <div className="underline"></div>
        <p className="subtitle">Kalvium — Batch S124</p>
      </Header>

      <Grid>
        {students.map((s) => (
          <Card
            key={s.id}
            name={s.name}
            title={s.title}
            github={s.github}
            linkedin={s.linkedin}
            photo={s.photo}
          />
        ))}
      </Grid>
    </PageWrap>
  );
}

/* Styled components for layout */
const PageWrap = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 28px auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 18px;

  h2 {
    margin: 0;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
  }

  .subtitle {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

/* Responsive grid:
   - auto-fit with minmax keeps cards at a nice size and grows/shrinks columns
   - justify-items:center ensures Card (max-width) stays centered in each cell
*/
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  align-items: start;
  justify-items: center;

  /* Add some breathing room on very wide screens */
  @media (min-width: 1400px) {
    gap: 28px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }
`;
