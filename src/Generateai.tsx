import { useLocation } from "react-router-dom";

export default function Generateai() {
  const location = useLocation();
  const formData = location.state;

  return (
    <div>
      <h2>Welcome, {formData?.firstName}!</h2>
      <p>Email: {formData?.email}</p>
      <p>Role: {formData?.role}</p>
      {/* その他必要に応じて */}
    </div>
  );
}