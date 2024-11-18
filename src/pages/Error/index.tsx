import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold ">500</h1>
        <h2 className="text-xl font-medium text-red-400">
          Erro ao carregar a página, tente novamente mais tarde!!
        </h2>
      </div>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 hover:underline dark:text-sky-400">
          Menu
        </Link>
      </p>
    </div>
  )
}