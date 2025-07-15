// LoadingSpinner: Componente atómico para mostrar un spinner de carga animado.
const LoadingSpinner = ({ size = "w-10 h-10", color = "border-gray-950" }) => (
  <div className="flex justify-center items-center">
    <div className={`${size} border-6 ${color} border-t-transparent rounded-full animate-spin`} />
  </div>
);

export default LoadingSpinner;