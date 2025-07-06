import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Generateai() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;
  const [loading, setLoading] = useState(true);
  const handleBack = () => {
    navigate("/SampleForm", { state: formData }); // SampleForm へ state を引き継いで戻る
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2秒後に表示

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center">
        <h2>Welcome, {formData?.firstName}!</h2>
        <div>Email: {formData?.email}</div>
        <div>Role: {formData?.role}</div>
      </div>
      <div className="mt-4">
        <button onClick={handleBack} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          戻る
        </button>
      </div>
    </div>
  );
}