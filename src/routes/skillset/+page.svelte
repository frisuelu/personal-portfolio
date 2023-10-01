<script>
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";

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
  <h3><br />Companies and institutions I have collaborated with</h3>
  <div class="client-carousel">
    <ImageCarousel images={client_logos} particlesShown={3} particlesScrolled={2}/>
  </div>
</div>

<div class="prose">
  <h3>
    <b><br />Relevant experience</b>
  </h3>
  <p>
    I have been working as the core Data Scientist at Bedrock for almost three
    years now. One of the most important learnings of working at a startup
    company is that, even as part of the technical team, you are also involved
    in a lot of other core business areas that are not usually part of their
    area of expertise: <i>finance</i>, <i>new business/commercial meetings</i>,
    <i>client services</i>... This means my job is not just the development of
    the technical solutions, but actually enaging with clients, proposing new
    ideas, client acquisition and new business opportunities, or CRM management,
    among others.
  </p>
  <p>
    The most important takeaway from this experience is that I've learnt
    firsthand that solutions, either in data or other disciplines, must first be
    based on business information to accurately solve the problems at hand. The
    arbitrary use of technology is ill-advised, and an informed roadmap usually
    yields better results for a fraction of the effort, while purely technical
    developments that are not based on business needs will fall on deaf ears.
  </p>
  <p />
  <p>
    To accomplish this, I have also been in direct charge of client accounts,
    leading the technical process of understanding the needs of the client,
    designing the business plan, and developing the solutions together with my
    colleagues. Another important part of my experience has been researching,
    planning and attending new business meetings constantly, as in a small team
    all members must support both lead generation and conversion into projects.
    Through the use of the Service Design and Agile methodologies, I have grown
    professionally and I have gained a holistic view of a full project design
    and development, so I believe I have a broad view regarding the design and
    communication around technical projects.
  </p>
  <p>
    I am also proficient in English (C1 Cambridge level certification) and
    practise it every day since most of the clients I engage with are
    internationally-based.
  </p>
</div>
<div class="prose">
  <h3>Tools and platforms I am proficient in</h3>
  <p>
    Strong statistical base: hypothesis tests, ANOVA, inference, visualization,
    Monte Carlo simulations, bootstraping. • Multivariate statistical analyses
    and dimensionality reduction techniques: clustering, supervised and
    unsupervised classification, PCA, correlation analysis or STATIS methods,
    among others. • ML and DL algorithms: neural networks, association rules,
    random forest, Naive Bayes, SVM, Transformers, CNNs or Reinforcement
    Learning. • Extensive experience working with relational databases,
    especially focused on RDBMS such as PostgreSQL, MySQL, Google BigQuery and
    PowerQuery. • Advanced knowledge of general programming and OOP with Python.
    • Knowledge of the main libraries employed in the Data Science field: Numpy,
    Pandas, Matplotlib, Keras, TensorFlow, PyTorch, Transformers. • Advanced
    knowledge of the Office stack. • Experience working with software and
    platforms such as Docker or Databricks. Technology stack experience ◦ Python
    ◦ C++ ◦ AWS ◦ Google Analytics ◦ PostgreSQL ◦ Metabase ◦ Docker ◦ Databricks
    ◦ PowerQuery ◦ Matlab/Octave ◦ Bash ◦ GCP ◦ GSC ◦ MySQL ◦ Apache Superset ◦
    Flask/Django ◦ Golang ◦ Javascript ◦ R ◦ SPSS ◦ Azure ◦ Hubspot ◦ PowerBI ◦
    Git ◦ Arduino ◦ TinyGo
  </p>
</div>

<style>
  .client-carousel {
    width: 50%;
    height: 50%;
  }
</style>
