
export default function Topbar() {
  return (
    <div className="bg-white shadow flex justify-end items-center p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <span className="font-medium">John Doe</span>
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
