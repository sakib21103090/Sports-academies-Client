import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Components/Providers/AuthProviders';
import Swal from 'sweetalert2';

const AddClass = () => {
    
    const {user} = useContext(AuthContext);
    console.log(user)

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0])
      console.log(formData)
      const name = data.className;
      // const image = data.image;
      console.log(data)
      const instructorName = user.displayName;
      const email = user.email;
      const availableSeats = data.availableSeats;
      const students = data.students;
      const price = data.price;
  
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMG_KEY}`
 
        fetch(url, {
            method: 'POST',
            body: formData,
          })
            .then(res => res.json())
            .then(imageData => {
              console.log(imageData)
              const classImage = imageData.data.display_url
              console.log(classImage)

              const classItems = {
                classImage:classImage,
                className:name,
                instructorName:instructorName,
                instructorEmail:email,
                availableClasses: parseFloat(availableSeats),
                students:parseFloat(students),
                price: parseFloat(price),
               
              };

              fetch("http://localhost:5000/addClass", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(classItems),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  if (result.insertedId) {
                    
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Class has been added successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                });
              console.log(data);

              
       })
    }

    return (
        <div>
        {/* <Helmet>
        <title>Animal-Toy-planet | Add A Toy</title>
      </Helmet> */}
         <div>
              <h2 className="text-center font-bold text-black text-5xl m-6 p-6">Add  Class</h2>
         </div>
         <div>
         <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mb-5">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
     <div className="form-control">
           <label className="label">
           <span className="block ">class Image</span></label>
           <input type="file" {...register("image", { required: true })} className="file-input bg-blue-300 file-input-bordered "/>                       
        </div>
                            {/* <div>
          <label htmlFor="classImage" className="block  mb-1"> classImage :</label>
          <input type="file" id="classImage" {...register('classImage',{ required: true })}className="file-input bg-blue-300 file-input-bordered w-3/1 " />
        </div> */}

     <div>
       <label htmlFor="name" className="block  mb-1"> Class Name:</label>
       <input type="text" id="className" {...register('className')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
     </div>

     <div>
       <label htmlFor="instructorName" className="block  mb-1">instructor Name:</label>
       <input type="text" id="instructorName" {...register('instructorName')}  defaultValue={user?.displayName} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
      
     </div>

     <div>
       <label htmlFor="instructorEmail" className="block  mb-1">instructor email:</label>
       <input type="email" id="instructorEmail" {...register('instructorEmail')} defaultValue={user?.email} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
     </div>

     <div>
       <label htmlFor="availableSeats" className="block  mb-1">availableSeats:</label>
       <input type="number"   id="availableSeats" {...register('availableSeats')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
     </div>
     <div>
       <label htmlFor="students" className="block  mb-1">students</label>
       <input type="number"   id="students" {...register('students')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
     </div>
     <div>
       <label htmlFor="price" className="block  mb-1">Price:</label>
       <input type="number" step="0.01" id="price" {...register('price')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
     </div>

    

   </div>
   

   <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-lime-600">Submit</button>
 </form>

   </div>
     </div>
    );
};

export default AddClass;