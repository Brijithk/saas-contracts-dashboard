import { useState } from "react";

export default function UploadModal() {
  const [files, setFiles] = useState<File[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files);
    setFiles(selected);
    selected.forEach((f) => {
      setTimeout(() => console.log(`Uploaded: ${f.name}`), 1000); // simulate upload
    });
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <input type="file" multiple onChange={handleUpload} />
      <ul className="mt-2">
        {files.map((f) => (
          <li key={f.name}>{f.name} - Uploading...</li>
        ))}
      </ul>
    </div>
  );
}
