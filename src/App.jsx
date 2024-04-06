import { useState, useEffect } from "react";
import { ConsultationItem } from "./components/ConsultationItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [newConsultation, setNewConsultation] = useState("");
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const storedConsultations = JSON.parse(
      localStorage.getItem("consultations")
    );
    if (storedConsultations.length > 0) {
      setConsultations(storedConsultations);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("consultations", JSON.stringify(consultations));
  }, [consultations]);

  const handleNewConsultation = (event) => {
    setNewConsultation(event.target.value);
  };

  const handleAddConsultation = () => {
    if (newConsultation.trim() !== "") {
      setConsultations([...consultations, newConsultation]);
      setNewConsultation("");
      toast.success("Consulta adicionada com sucesso!");
    } else {
      toast.error("Insira uma consulta!");
      setNewConsultation("");
    }
  };

  const handleDeleteConsultation = (index) => {
    const updatedConsultations = [...consultations];
    updatedConsultations.splice(index, 1);
    setConsultations(updatedConsultations);
    toast.success("Consulta excluída com sucesso!");
  };

  return (
    <div className="container mx-auto p-4 mt-32 rounded w-1/2 bg-slate-600">
      <ToastContainer />
      <h1 className="md:text-3xl text-2xl font-bold mb-0 md:mb-4 mt-4 text-center text-white">
        Rastreamento de Consultas de Clientes
      </h1>
      <div className="md:mt-16 mt-5 flex flex-col md:flex-row items-center mb-10 justify-betwee w-ful">
        <input
          type="text"
          placeholder="Adicionar nova consulta"
          className="w-full pr-10 bg-transparent font-semibold tracking-tight placeholder:text-slate-500 placeholder:text-xl md:placeholder:text-2xl lg:placeholder:text-3xl outline-none text-3xl text-slate-400 mb-10 md:mb-0"
          value={newConsultation}
          onChange={handleNewConsultation}
        />
        <button
          className="bg-lime-400 hover:bg-lime-500 text-white py-2 px-4 rounded outline-none font-bold"
          onClick={handleAddConsultation}
        >
          Adicionar
        </button>
      </div>
      <hr className="bg-slate-700 mb-5" />
      <ul>
        {consultations.map((consultation, index) => (
          <ConsultationItem
            key={index}
            consultation={consultation}
            onDelete={() => handleDeleteConsultation(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
