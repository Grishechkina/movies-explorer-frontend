import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  let navigate = useNavigate();
  return (
    <div className="not-found-page">
      <h3 className="not-found-page__title">404</h3>
      <p className="not-found-page__text">Страница  не найдена.</p>
      <a className="not-found-page__go-back link" href="/">Назад</a>
    </div>
  );
}

export default NotFoundPage;