const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src="" alt="Matheus Battisti" />
      <h2>Matheus Battisti</h2>
      <p>Desenvolvedor</p>
      <section className="social-networks">
        <a href="#" class="social-btn">
          <p>linkedin</p>
        </a>
        <a href="#" class="social-btn">
          <p>linkedin</p>
        </a>
        <a href="#" class="social-btn">
          <p>linkedin</p>
        </a>
      </section>
      <section className="information">
        <div className="info-card">
          <p>icon</p>
          <div>
            <h3>Telefone</h3>
            <p>(48)99999-9999</p>
          </div>
        </div>
        <div className="info-card">
          <p>icon</p>
          <div>
            <h3>E-mail</h3>
            <p>matheus@gmail.com</p>
          </div>
        </div>
        <div className="info-card">
          <p>icon</p>
          <div>
            <h3>Localização</h3>
            <p>São José / SC</p>
          </div>
        </div>
      </section>
      <a href="#">Download currículo</a>
    </aside>
  );
};

export default Sidebar;
