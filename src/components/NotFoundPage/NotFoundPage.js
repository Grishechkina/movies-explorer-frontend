import { useNavigate, Link } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="not-found-page">
      <h3 className="not-found-page__title">404</h3>
      <p className="not-found-page__text">Страница  не найдена.</p>
      <a className="not-found-page__go-back link" onClick={() => navigate(-1)}>Назад</a>
    </section>
  );
}

export default NotFoundPage;