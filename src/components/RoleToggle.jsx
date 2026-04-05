import { useApp } from "../context/AppContext";

export default function Roletoggle() {
  const { role, setRole } = useApp();

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium">Role:</label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border px-2 py-1 rounded-md"
      >
        <option value="admin">Admin</option>
        <option value="viewer">Viewer</option>
      </select>
    </div>
  );
}