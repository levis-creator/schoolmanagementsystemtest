import React from 'react'

const UpdateForm = () => {
  return (
    <div
    className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50"
    style={{ display: !openForm ? "none" : "" }}
  >
    <div className="bg-white bottom-0 left-0 right-0 absolute p-4 flex flex-col gap-3 ">
      <div className="flex justify-end">
        <button
          className="text-xl"
          onClick={() =>
            adminContextDispatch({
              type: isUpdate ? OPEN_UPDATE_FORM : OPEN_FORM,
            })
          }
        >
          {" "}
          <CgClose />
        </button>
      </div>
      <h2 className="font-bold text-xl">Student Info</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col text-base ">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            defaultValue={isUpdate ? data.firstname : ""}
            name="firstname"
            ref={firsnameinput}
            className="border-2 border-red-800 rounded-md p-2 "
            placeholder="Enter firstname"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="middlename">Middlename</label>
          <input
            type="text"
            defaultValue={isUpdate ? data.middlename : ""}
            ref={middlenameinput}
            name="middlename"
            className="border-2 border-red-800 rounded-md p-2 "
            placeholder="Enter middlename"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname">Lastname</label>
          <input
            ref={lastnameinput}
            defaultValue={isUpdate ? data.lastname : ""}
            type="text"
            name="lastname"
            className="border-2 border-red-800 rounded-md p-2 "
            placeholder="Enter lastname"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dob">Date of birth</label>
          <input
            defaultValue={isUpdate ? data.dob : ""}
            ref={dobInput}
            type="date"
            name="dob"
            className="border-2 border-red-800 rounded-md p-2 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            ref={genderinput}
            defaultValue={data.gender }
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button
          className="bg-red-800 text-white text-lg rounded-md py-2"
          type="submit"
        >
          {isUpdate ? "Save" : "Add new"}
        </button>
      </form>
    </div>
  </div>
  )
}

export default UpdateForm
