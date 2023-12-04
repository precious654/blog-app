import React from "react";

function Newarticle() {

  const [formData, setFormData] = React.useState(
    {
      author: "",
      title: "",
      desc: "",
      article: ""
    } );


    function handleChange(event: any) {
      setFormData( (prevState) => {
        return {
          ...prevState,
          [event.target.name]: event.target.value
        }
      } )
    }

    console.log( formData );

  return (
    <section>
      <div className="flex justify-between items-center px-5 mt-5">
        <input type='text' className='rounded-lg text-gray-500 py-3 px-2' name="author" placeholder='Full Name' onChange={handleChange} />
        <input type='text' className='rounded-lg text-gray-500 py-3 px-2' name='title' placeholder='Title' onChange={handleChange} />
        <input type='text' className='rounded-lg text-gray-500 py-3 px-2' name='desc' placeholder="Description" onChange={handleChange} />
        <button className="rounded-lg border border-gray-500 font-serif text-lg px-5 py-2 hover:bg-gray-700 hover:text-white">Post</button>
      </div>
      <div className="mt-5 px-5">
        <textarea className='text-gray-500 py-3 px-2 border-2 w-full h-screen' name='article'  placeholder="..." onChange={handleChange} />
      </div>
    </section>
  )
}

export default Newarticle;
