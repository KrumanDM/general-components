import { useState } from "react";
import "./App.css";
import Modal from "./components/feedback/Modal/Modal";
import Spinner from "./components/feedback/Spinner/Spinner";
import LoginForm from "./components/forms/Form/LoginForm";
import Button from "./components/ui/Button/Button";

import Input from "./components/ui/Input/Input";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card">
        <div className="button-container">
          <Button variant="primary" size="small">
            Small Primary
          </Button>
          <Button variant="secondary" size="medium">
            Medium Secondary
          </Button>
          <Button variant="danger" size="large">
            Large Danger
          </Button>
        </div>

        <div className="input-container">
          <Input
            placeholder="Small primary input"
            variant="primary"
            size="small"
          />
          <Input
            placeholder="Medium secondary input"
            variant="secondary"
            size="medium"
          />
          <Input
            placeholder="Large danger input"
            variant="danger"
            size="large"
          />
          <Input placeholder="Disabled input" disabled />
        </div>

        <div className="modal-container">
          <Button variant="primary" onClick={() => setOpen(true)}>
            Открыть модалку
          </Button>
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            variant="primary"
            size="medium"
          >
            <h2>Заголовок</h2>
            <p>Это содержимое модального окна</p>

            {/* Кнопки внутри модалки */}
            <div style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Закрыть
              </Button>
              <Button variant="danger" onClick={() => alert("Удалено!")}>
                Удалить
              </Button>
            </div>
          </Modal>
        </div>


        <div className="login-container">
          <LoginForm/>
        </div>

        <div className="spinner-container">
          <Spinner size="large" variant="current"/>
        </div>
      </div>
    </>
  );
}

export default App;
