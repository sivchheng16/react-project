export default function Button({ title }: any) {
  return (
    <>
      <button className="px-6 py-2 rounded-full text-gray-100  bg-linear-to-r from-teal-400 to-blue-500 text-md cursor-pointer">
        {title}
      </button>
    </>
  );
}
