import { useLocation, useNavigate } from "react-router-dom";

export default function Generateai() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  const handleBack = () => {
    navigate("/SampleForm", { state: formData }); // SampleForm へ state を引き継いで戻る
  };

  return (
    <div>
      <h2>Welcome, {formData?.firstName}!</h2>
      <p>Email: {formData?.email}</p>
      <p>Role: {formData?.role}</p>

      <button onClick={handleBack} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
         戻る
      </button>
    </div>
  );
}