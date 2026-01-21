export default function Textarea({ value, onChange, rows = 5 }) {
    return (
        <textarea
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Write product description..."
            className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
        />
    );
}
