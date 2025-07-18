import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">EMS</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <div className="p-5 bg-white rounded shadow">
            <h1 className="display-5 fw-bold mb-3">
              Welcome to the <span className="text-primary">Employee Management System</span>
            </h1>
            <p className="lead mb-4">
              Easily manage employees, assign tasks, track progress, and streamline your workflow.
            </p>
            <Link to="/login" className="btn btn-primary btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <p className="mb-0">© 2025 Ramya T. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
