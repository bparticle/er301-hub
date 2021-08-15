<template>
  <div class="is-fluid">
    <article>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child">
            <section class="section introduction has-background-light">
              <h1 class="project__title">CardOne</h1>
              <p class="pt-3 pb-3">
                CardOne is an archive of eclectic samples assembled by ER-301
                users. Samples were either discovered from freely available
                sources on the internet, or created by the the users themselves
                with hardware/software that they own. To the best of our
                knowledge, we believe the samples to be free to use in any music
                production. You are not allowed to sell or otherwise
                redistribute the samples.
              </p>
              <p class="pt-3 pb-3">
                Most directories contain a PDF or TXT file that sites that
                source for the samples, as well as anything else the contributor
                wanted you to know. We recommend unzipping the archive to your
                SD card in the ER-301/samples directory.
              </p>
            </section>
          </div>
        </div>
        <div class="tile is-4 is-vertical is-parent">
          <section>
            <h2 class="project__subtitle">Download</h2>
            <p class="pt-3 pb-3">
              The following links to a shared folder on Google Drive. You can
              browse and listen there. There is a drop-dowm menu on the
              "CardOne" folder name which allows downloading the full archive as
              a zip.
            </p>
            <p class="pt-3 pb-3">
              <a
                href="https://drive.google.com/drive/folders/1Mixk8O60E6iUS3654qPGkbPA19PC1waE?usp=sharing"
                >CardOne Google Drive</a
              >
            </p>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>
<style lang="scss" scoped>
.project {
  &__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  &__subtitle {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
