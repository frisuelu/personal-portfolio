<script>
  import { base } from "$app/paths";
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";
  import ToolGrid from "$lib/components/ToolGrid.svelte";

  // Client logos
  let client_logos = [
    "http://1000marcas.net/wp-content/uploads/2020/10/Green-Bay-Packers-logo-1536x1017.jpg", // https://packers.com
    "https://startupxplore.com/uploads/ff80808168cee2430168d95cad720072-large.png", // https://coara.co
    "https://www.servicon.de/media/d82283c4-957c-442d-b88d-724286a92d28/convercus.png", // https://convercus.com
    "https://carglass.ee/wp-content/uploads/2019/05/carglass-logo-png-transparent.png",
    "https://www.retailgazette.co.uk/wp-content/uploads/2020/06/Crimtan_Logo.png",
    "https://www.elpublicista.es/adjuntos/fichero_15359_20170719.jpg",
    "https://www.marketingdirecto.com/wp-content/uploads/2021/05/logo-zizer-121713.jpg",
    "http://cdn.20m.es/img2/recortes/2017/04/10/456501-944-737.jpg?v=20170410191800",
    "https://mia.as/images/nodes/logocdti.jpg",
    "https://sede.idepa.es/assets/img/sekuensprincipado.jpg",
    "https://www.rbiberia.com/rbi_logo.svg",
  ];

  // Tool logos with base path
  let tool_logos = [
    `${base}/images/tools/apache-superset.png`,
    `${base}/images/tools/arduino.svg`,
    `${base}/images/tools/azure-Blob-Block.svg`,
    `${base}/images/tools/Azure-Container-Instances.svg`,
    `${base}/images/tools/Azure-Container-Registries.svg`,
    `${base}/images/tools/AzureML.png`,
    `${base}/images/tools/bash.svg`,
    `${base}/images/tools/big-query.png`,
    `${base}/images/tools/cloud-functions.png`,
    `${base}/images/tools/CSS.png`,
    `${base}/images/tools/dask.png`,
    `${base}/images/tools/databricks.jpg`,
    `${base}/images/tools/docker.svg`,
    `${base}/images/tools/flask.png`,
    `${base}/images/tools/github.svg`,
    `${base}/images/tools/gitlab.svg`,
    `${base}/images/tools/git.svg`,
    `${base}/images/tools/go-lang.svg`,
    `${base}/images/tools/google-cloud-storage.png`,
    `${base}/images/tools/HTML.png`,
    `${base}/images/tools/hubspot.png`,
    `${base}/images/tools/HuggingFace.svg`,
    `${base}/images/tools/JavaScript.svg`,
    `${base}/images/tools/looker-studio.svg`,
    `${base}/images/tools/matlab.jpg`,
    `${base}/images/tools/metabase.png`,
    `${base}/images/tools/mySQL.png`,
    `${base}/images/tools/numpy.svg`,
    `${base}/images/tools/NVIDIA-Merlin.jpg`,
    `${base}/images/tools/NVIDIA-RAPIDS.png`,
    `${base}/images/tools/NVIDIA-triton-inference-server.png`,
    `${base}/images/tools/octave.png`,
    `${base}/images/tools/openCV.svg`,
    `${base}/images/tools/pandas.svg`,
    `${base}/images/tools/postgreSQL.svg`,
    `${base}/images/tools/python.svg`,
    `${base}/images/tools/pytorch-lightning.png`,
    `${base}/images/tools/PyTorch.svg`,
    `${base}/images/tools/r.png`,
    `${base}/images/tools/SPSS.jpg`,
    `${base}/images/tools/svelte.svg`,
    `${base}/images/tools/tensorflow.svg`,
    `${base}/images/tools/TinyGo.png`,
    `${base}/images/tools/vim.png`,
    `${base}/images/tools/visual-studio.svg`,
  ];
</script>

<svelte:head>
  <title>Skillset - Manuel Souto Juan</title>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="Manuel Souto Juan's skills and tool experience"
  />
  <meta
    name="keywords"
    content="Data Science, AI, Machine Learning, Technology"
  />
  <meta name="author" content="Manuel Souto Juan" />
  <meta property="og:type" content="blog" />
  <meta property="og:title" content="Skillset - Manuel Souto Juan" />
</svelte:head>

<div align="center" class="landing_title">
  <h1>
    <b>My professional skillset</b>
  </h1>
</div>

<div align="center">
  <h5><br /><i>Companies and institutions I have collaborated with</i></h5>
  <ImageCarousel
    images={client_logos}
    particlesShown={3}
    particlesScrolled={2}
  />
</div>

<div class="exp-block">
  <div class="prose">
    <h3>
      <b>Relevant experience</b>
    </h3>
    <p>
      My experience as a Data Scientist for almost four years in both bigger companies
      and startups has prepared me transversally. One of the most important learnings
      has been that, even as part of the technical team, you are also involved in a lot
      of other core business areas that are not usually part of your expertise:
      <i>finance</i>,
      <i>new business/commercial meetings</i>,
      <i>client services</i>...
      This means my job is not just the development of the technical solutions, but
      actually engaging with clients and proposing new ideas.
    </p>
    <p>
      The most important takeaway from this experience is that I've learnt
      firsthand that solutions, either in data or other disciplines, must first
      be based on business information to accurately solve the problems at hand.
      The arbitrary use of technology is ill-advised, and an informed roadmap
      usually yields better results for a fraction of the effort, while purely
      technical developments that are not based on business needs will fall on
      deaf ears.
    </p>
    <p />
    <p>
      To accomplish this, I have also been in direct charge of client accounts,
      leading the technical process of understanding the needs of the client,
      designing the business plan, and developing the solutions together with my
      colleagues. Another important part of my experience has been researching,
      planning and attending new business meetings constantly, as in a small
      team all members must support both lead generation and conversion into
      projects. Through the use of the Service Design and Agile methodologies, I
      have grown professionally and I have gained a holistic view of a full
      project design and development, so I believe I have a broad view regarding
      the design and communication around technical projects.
    </p>
    <p>
      I am also proficient in English (C1 Cambridge level certification) and
      practise it every day since most of the clients I engage with are
      internationally-based.
    </p>
  </div>
  <div class="tool-block prose">
    <h3>Tools and platforms I am proficient in</h3>
    <div class="tool-grid">
      <ToolGrid images={tool_logos} gutterSize={30} columnNumber={3} />
      <p>
        <small
          >Most tool icons by <a href="https://icons8.com/">Icons8</a></small
        >
      </p>
    </div>
  </div>
</div>

<style>
  .landing_title {
    padding-bottom: var(--size-3);
  }

  .exp-block {
    display: flex;
    flex-direction: row;
    column-gap: var(--size-fluid-4);
    align-items: center;
    justify-content: center;
  }

  .exp-block h3 {
    margin-top: var(--size-1);
  }

  @media (max-width: 768px) {
    .exp-block {
      display: block;
      align-items: start;
    }
  }

  .prose,
  .tool-block {
    flex: 1;
    padding: var(--size-fluid-3);
  }

  .tool-grid {
    margin-top: var(--size-fluid-1);
    width: 0.5fr;
  }
</style>
