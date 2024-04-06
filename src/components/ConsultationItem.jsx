export const ConsultationItem = ({consultation, onDelete}) => {
  return (
    <li className="flex justify-between items-center border-b border-gray-300 py-2">
      <span>{consultation}</span>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
        onClick={onDelete}
      >
        Excluir
      </button>
    </li>
  );
};