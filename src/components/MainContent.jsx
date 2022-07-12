import React from "react";

const MainContent = () => {
  return (
    <main>
      <section className="about-container">
        <h2>Sobre</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
          dolores! Repellendus eius consequuntur, voluptate deserunt perferendis
          mollitia debitis est autem aperiam necessitatibus beatae assumenda
          illo rem architecto quis dolor quae.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          veritatis aperiam, odit nihil placeat, dolorum sequi reprehenderit
          fugiat, distinctio provident impedit modi neque sapiente voluptate
          voluptates. Maiores sint at dolores?
        </p>
      </section>
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technology-card">
          <p>icon</p>
          <div className="technology-info">
            <h3>HTML</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className="technology-card">
          <p>icon</p>
          <div className="technology-info">
            <h3>HTML</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className="technology-card">
          <p>icon</p>
          <div className="technology-info">
            <h3>HTML</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </section>
      <section className="projects-container">
        <h2>Projetos</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore at
          rem fugit provident dolorum exercitationem, ducimus quisquam ratione
          cumque reiciendis accusamus totam, veniam iusto numquam distinctio.
          Dignissimos labore aspernatur pariatur?
        </p>
        <a href="#">Ver Projetos</a>
      </section>
    </main>
  );
};

export default MainContent;
