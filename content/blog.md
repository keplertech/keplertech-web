+++
title = "Blog"
draft = false
+++

<style>
.page-title {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 20px;
}

/* Responsive video wrapper */
.video-wrap {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 12px 0;
}
.video-wrap iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Basic page layout */
.content {
  width: 100%;
  margin: 0 auto;
  text-align: left;
  font-family: Arial, sans-serif;
  padding: 18px 12px;
}
.section-title { font-size: 27; font-weight:300; margin-top:18px; }
</style>

<h1 class="page-title">OUR BLOG</h1>

<div class="content">

  <h2 class="section-title">D&R IP SoC EU 25</h2>
  {{< youtube CshlDJYVKeo >}}

  <h2 class="section-title">SEMICON Europa 2025</h2>

  <!-- Correct Vimeo embed: use player.vimeo.com/video/{ID} -->
  <div class="video-wrap">
    <iframe
      src="https://player.vimeo.com/video/1139237224"
      title="SEMICON Europa 2025"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>

  <h2 class="section-title">ORCONF 2025</h2>
  {{< youtube 50AOLCKA-W4 >}}

  <h2 class="section-title">FSIC 2025</h2>
  <div>
    <p>
      <a href="https://wiki.f-si.org/index.php?title=Open_Source_interchange_format_and_data_structures" target="_blank" rel="noopener noreferrer">
        Open Source interchange format and data structures
      </a>
    </p>
    <img src="/images/ChristopheFsic2025.JPG" alt="Alexandre Christophe" width="500" height="315">
  </div>

  <div>
    <p>
      <a href="https://wiki.f-si.org/index.php?title=Simplifying_and_accelerating_EDA_tools_development_with_the_NajaEDA_Python_library" target="_blank" rel="noopener noreferrer">
        Simplifying and accelerating EDA tools development with the NajaEDA Python library
      </a>
    </p>
    <img src="/images/NoamFsic2025.JPG" alt="Cohen Noam" width="500" height="315">
  </div>

  <h2 class="section-title">NLnet Foundation Podcast</h2>
  {{< youtube 4l6_gtQCLOE >}}

  <h2 class="section-title">ORCONF 2024</h2>
  {{< youtube JpwZGCuWekU >}}

  <h2 class="section-title">OSXP 2024</h2>
  {{< youtube V-qwoT6tYmo >}}

  <h2 class="section-title">FSIC 2024</h2>
  <div class="video-wrap">
    <iframe src="https://peertube6.f-si.org/videos/embed/u9UxBw9Vhxmdt1KPhUgSW3" allowfullscreen title="FSIC 2024"></iframe>
  </div>

</div>
