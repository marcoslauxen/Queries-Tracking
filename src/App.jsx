import { useState } from "react";
import ConsultationItem from './ConsultationItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [newConsultation, setNewConsultation] = useState('');
    const [consultations, setConsultations] = useState([]);

    const handleNewConsultation = (event) => {
        setNewConsultation(event.target.value);
    };

    const handleAddConsultation = () => {
        if (newConsultation.trim() !== '') {
            setConsultations([...consultations, newConsultation]);
            setNewConsultation('');
            toast.success('Consulta adicionada com sucesso!');
        } else {
            toast.error('Insira uma consulta!');
            setNewConsultation('');
        }
    };

    const handleDeleteConsultation = (index) => {
        const updatedConsultations = [...consultations];
        updatedConsultations.splice(index, 1);
        setConsultations(updatedConsultations);
        toast.success('Consulta excluída com sucesso!');
    };

    return (
        <div className="container mx-auto p-4">
            <ToastContainer />
            <h1 className="text-3xl font-bold mb-4">Rastreamento de Consultas de Clientes</h1>
            <div className="mb-4">
                <input type="text" placeholder="Adicionar nova consulta" className="border border-gray-400 p-2 mr-2 rounded outline-none" value={newConsultation} onChange={handleNewConsultation} />
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleAddConsultation}>Adicionar</button>
            </div>
            <ul>{consultations.map((consultation, index) => (
                <ConsultationItem key={index}
                    consultation={consultation}
                    onDelete={() => handleDeleteConsultation(index)} />
            ))}</ul>
        </div>
    )
}

export default App;