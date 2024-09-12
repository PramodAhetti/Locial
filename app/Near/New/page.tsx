export default function New() {

  const handleSubmit = async (formdata : FormData) => {
    "use server";
    console.log("Form submitted:", formdata);
  };

  return (
    <div className="h-screen w-screen bg-zinc-800 flex justify-center items-center"> 
      <form action={handleSubmit} className="items-center text-center bg-zinc-300 border border-gray rounderd-lg  border-solid p-4"> 
        <div className="mb-4"> 
          <label className="p-2 mr-8 w-1/3 text-black rounded-lg font-semibold border border-black">Title:</label> 
          <input
            type="text"
            name="name"
            className="ml-2 p-2 border border-gray-300 text-black rounded"
          />
        </div>
        <div className="mb-4">
          <label className="p-2 w-1/3 text-black rounded-lg font-semibold border border-black">Message:</label>
          <input
            type="text"
            name="message"
            className="ml-2 p-2 border text-black border-gray-300 rounded"
          />
        </div>
        <button className="w-1/3 bg-black text-white py-3 px-4 rounded-full font-semibold border border-white hover:bg-gray-800 transition duration-300" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
