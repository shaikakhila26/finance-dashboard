import RoleToggle from "./Roletoggle";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      
      {/* LEFT */}
      <div>
        <h1 className="text-xl font-semibold text-darkGreen">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Financial overview
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        
        <input
          placeholder="Search..."
          className="px-3 py-2 border rounded-lg text-sm"
        />

        <RoleToggle />

        <div className="w-8 h-8 bg-mossGreen rounded-full" />
      </div>
    </div>
  );
}