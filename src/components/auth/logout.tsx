import { useEffect } from "react";

export default function Logout() {
  const handleLogout = () => {
    window.location.href = "/login";
    console.log("Déconnexion");
    sessionStorage.setItem("user", "");
  };
  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <div>
      <h1>Déconnexion</h1>
    </div>
  );
}
