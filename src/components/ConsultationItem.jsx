export const ConsultationItem = ({ consultation, onDelete }) => {
  return (
    <li className="w-ful flex justify-between items-center border-none py-2 bg-slate-700 p-4 rounded mb-2 flex-col md:flex-row">
      <span className="font-bold text-slate-400 mb-2 md:mb-0">
        {consultation}
      </span>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded font-bold"
        onClick={onDelete}
      >
        Excluir
      </button>
    </li>
  );
};
