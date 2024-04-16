const ConsultationTable = ({
  filteredConsultations,
  handleEditConsultation,
  handleDeleteConsultation,
}) => (
  <div className="rounded bg-white p-4 overflow-x-auto">
    <h2 className="text-xl font-semibold mb-4 text-black">
      Consultas Adicionadas
    </h2>
    {filteredConsultations.length === 0 ? (
      <p className="text-black">Nenhuma consulta encontrada.</p>
    ) : (
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-800">Nome</th>
            <th className="px-4 py-2 text-left text-gray-800">Email</th>
            <th className="px-4 py-2 text-left text-gray-800">
              Número de Telefone
            </th>
            <th className="px-4 py-2 text-left text-gray-800">Consulta</th>
            <th className="px-4 py-2 text-left text-gray-800">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredConsultations.map((consultation, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 text-black">{consultation.name}</td>
              <td className="px-4 py-2 text-black">{consultation.email}</td>
              <td className="px-4 py-2 text-black">
                {consultation.phoneNumber}
              </td>
              <td className="px-4 py-2 text-black">
                {consultation.consultation}
              </td>
              <td className="px-4 py-2 text-black">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded font-semibold mr-2"
                  onClick={() => handleEditConsultation(index)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded font-semibold"
                  onClick={() => handleDeleteConsultation(index)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default ConsultationTable;
