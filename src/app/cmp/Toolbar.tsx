import Link from "next/link";
export default function Toolbar() {
  return (
    <div className="fixed flex w-full items-center justify-between p-4">
      <h1 className="text-3xl font-bold text-purple-500">Moonshine</h1>
      <div className="flex items-center space-x-4">
        <Link href="/"> Home</Link>
        <Link href="/user"> Profile</Link>
        <Link href="/login"> Login</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </div>
  );
}
