import Gear from "./icons/Gear";
export default function Toolbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-3xl font-bold text-purple-500">Moonshine</h1>
      <div className="flex items-center space-x-4">
        <a href="/"> Home</a>
        <a href="/user"> Profile</a>
        <a href="/login"> Login</a>
        <a href="/settings">Settings</a>
      </div>
    </div>
  );
}
