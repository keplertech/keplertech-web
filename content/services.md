+++
title = "Services"
draft = false
+++

<style>
/* Import Comfortaa from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700;800&display=swap');

/* Page title */
.page-title {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 20px;
  font-family: 'Comfortaa', system-ui, Arial, sans-serif; /* apply Comfortaa to main title */
}

/* Container and body text */
.content-wrap {
  width: 100%;
  margin: 0 auto;
  text-align: left;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  padding: 18px 12px;
}

/* Segment title (bigger than body text) using Comfortaa */
.segment-title {
  font-size: 28px;      /* larger than body text */
  font-weight: 700;
  margin: 18px 0 8px 0;
  color: #000;
  font-family: 'Comfortaa', system-ui, Arial, sans-serif;
}

/* Body / description text */
.segment-body {
  font-size: 16px;
  margin: 0 0 10px 0;
  color: #000;
}

/* Links */
.segment-links {
  font-size: 15px;
  margin: 6px 0 18px 0;
}

/* Contact line (bold) */
.contact {
  margin-top: 14px;
  font-size: 20px;
  font-family: Arial, sans-serif;
}

.intro {
  margin-top: 14px;
  font-size: 20px;
  font-family: Arial, sans-serif;
}

/* Small responsive tweak */
@media (min-width:1200px){
  .page-title { font-size: 56px; }
  .segment-title { font-size: 34px; }
  .segment-body { font-size: 18px; }
  .contact { font-size: 18px; }
}
</style>

<h1 class="page-title">OUR SERVICES</h1>



<div class="content-wrap">
  <p class="intro">Our team is supporting and providing services around our award winning open source projects and general EDA development.</p> 

  <h2 class="segment-title">najaeda</h2>
  <p class="segment-body">
    najaeda is a Python package that provides data structures and APIs for developing post-synthesis
    Electronic Design Automation (EDA) algorithms.
  </p>
  <p class="segment-links">
    GitHub: <a href="https://github.com/najaeda/naja" target="_blank" rel="noopener noreferrer">https://github.com/najaeda/naja</a><br>
    PyPI: <a href="https://pypi.org/project/najaeda/" target="_blank" rel="noopener noreferrer">https://pypi.org/project/najaeda/</a>
  </p>

  <h2 class="segment-title">kepler-formal</h2>
  <p class="segment-body">
    Kepler-Formal is a logic equivalence checking (LEC) tool that operates on Verilog and the naja
    interchange format (<a href="https://github.com/najaeda/naja-if" target="_blank" rel="noopener noreferrer">https://github.com/najaeda/naja-if</a>) and focuses today on combinational
    equivalence checking.
  </p>
  <p class="segment-links">
    GitHub: <a href="https://github.com/keplertech/kepler-formal" target="_blank" rel="noopener noreferrer">https://github.com/keplertech/kepler-formal</a>
  </p>


  <p class="intro">To know more please contact: <a href="mailto:contact@keplertech.io" style="color:inherit;">contact@keplertech.io</a></p>
</div>
