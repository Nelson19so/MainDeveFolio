import blogMain from "../../../images/blogdetails.jpg";
import Pagesheader from "../header/Pagesheader";

export default function Blogdetailslayout() {
  return (
    <>
      <div className="container-layout-blogdetails pt-5 pb-5">
        <div className="container">
          <div className="container-img-blogDetails mb-5">
            <img src={blogMain} alt="blog-main" />
          </div>
          <div className="container--- row">
            <div className="container-details col-md">
              <article>
                <div>
                  <Pagesheader
                    classNameSubtitle="text-muted mt-5"
                    subtitle="Givest None - Profit"
                    title="Givest is a none profit and fund rising website"
                    classNameTitle="text-white"
                  />
                  <p className="mt-5 text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, obcaecati fuga facere aliquid magni neque vel ea
                    cupiditate saepe ab dolores voluptatibus, tempora quae
                    labore illum quod, facilis blanditiis. Animi. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Culpa
                    aspernatur rem cupiditate rerum ipsam accusamus harum
                    expedita distinctio enim modi!
                  </p>
                  <p className="mt-5 text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    quod numquam quasi delectus, possimus nihil cumque non illum
                    neque, quis unde omnis odio quas, incidunt officia dolore
                    sint amet aut. Ut nesciunt eos sunt. Illum officiis sed, id
                    explicabo sapiente voluptas blanditiis nihil odit
                    perspiciatis? Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quidem doloremque rem aliquid quaerat
                  </p>
                  <p className="mt-5 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit iure et, corporis dolorum quos magni deleniti
                    non itaque error repellat fugiat labore totam maxime
                    delectus debitis eum reiciendis, illo dolor pariatur ipsum
                    asperiores quod culpa? Aliquid maxime neque nostrum ratione
                    molestiae adipisci temporibus perspiciatis iure labore
                    voluptas nam commodi ullam iusto magni, eaque reprehenderit
                    ipsum consectetur assumenda ad amet enim.
                  </p>
                </div>

                <div>
                  <Pagesheader
                    classNameTitle="text-white"
                    title="How to complete this?"
                  />
                  <p className="mt-5 text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi natus voluptatum voluptates pariatur vel.
                    Quibusdam veniam quisquam magnam id nobis nulla ipsam
                    accusamus architecto dignissimos eaque, ullam optio facere
                    velit corrupti, possimus soluta est minus natus similique
                    voluptatibus sapiente illum necessitatibus error. Veritatis
                    provident omnis saepe earum accusamus animi suscipit?
                  </p>
                </div>

                <div className="container-2">
                  <div className="row">
                    <div className="container-main col-md-2 mb-3">
                      <div className="rounded rounded-pill">
                        <i className="fa fa-fire text-white"></i>
                      </div>
                    </div>
                    {/*  */}
                    <div className="container-text col-md">
                      <h4 className="text-white">Ideal Generating</h4>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore ea velit, laboriosam consectetur hic est aliquid
                        fugiat voluptatibus nam sunt, dolore sed temporibus,
                        minima eum illum. Omnis laudantium ab ipsa nam deserunt
                        repellendus nemo atque a illum dolorem, quia tenetur.
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="row">
                    <div className="container-main col-md-2 mb-3">
                      <div className="rounded rounded-pill">
                        <i className="fa fa-pencil text-white"></i>
                      </div>
                    </div>
                    {/*  */}
                    <div className="container-text col-md">
                      <h4 className="text-white">Research & Sketching</h4>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore ea velit, laboriosam consectetur hic est aliquid
                        fugiat voluptatibus nam sunt, dolore sed temporibus,
                        minima eum illum. Omnis laudantium ab ipsa nam deserunt
                        repellendus nemo atque a illum dolorem, quia tenetur.
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="row">
                    <div className="container-main col-md-2 center mb-3">
                      <div className="rounded rounded-pill">
                        <i className="fa fa-rocket text-white"></i>
                      </div>
                    </div>
                    {/*  */}
                    <div className="container-text col-md">
                      <h4 className="text-white">Launching</h4>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore ea velit, laboriosam consectetur hic est aliquid
                        fugiat voluptatibus nam sunt, dolore sed temporibus,
                        minima eum illum. Omnis laudantium ab ipsa nam deserunt
                        repellendus nemo atque a illum dolorem, quia tenetur.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Pagesheader
                    classNameTitle="text-white"
                    title="Project result summary"
                  />
                  <p className="text-muted mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique asperiores tenetur cupiditate nobis possimus, ex
                    tempora voluptatem fugit, nulla ullam sapiente eum magnam
                    cumque nihil! Tempore earum reprehenderit nihil molestias
                    exercitationem aperiam at expedita ullam architecto
                    asperiores repellat impedit temporibus aut, officia
                    quisquam! Voluptate illum quos alias reprehenderit, corrupti
                    reiciendis.
                  </p>
                  <p className="mt-4 text-muted">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio rerum magni vel rem itaque repellat illum maiores
                    quia saepe perspiciatis consequatur amet in sit, deserunt
                    nisi repellendus. Illum quia libero odio quisquam minima
                    perferendis, voluptatibus ex officia similique, sint unde
                    dolore. Consequatur repudiandae ab ut corrupti perferendis
                    necessitatibus cum ea.
                  </p>
                </div>
              </article>
            </div>
            {/*  */}
            {/* <div className="container-2 col-md-4"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
