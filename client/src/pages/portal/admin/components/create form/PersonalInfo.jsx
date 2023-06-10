import React from "react";

const PersonalInfo = () => {
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
    <div className="flex flex-col text-base ">
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          value={formData.firstname || ""}
          name="firstname"
          onChange={handleChanges}
          className="border-2 border-red-800 rounded-md p-2 "
          placeholder="Enter firstname"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="middlename">Middlename</label>
        <input
          type="text"
          onChange={handleChanges}
          value={formData.middlename || ""}
          name="middlename"
          className="border-2 border-red-800 rounded-md p-2 "
          placeholder="Enter middlename"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastname">Lastname</label>
        <input
          onChange={handleChanges}
          value={formData.lastname || ""}
          type="text"
          name="lastname"
          className="border-2 border-red-800 rounded-md p-2 "
          placeholder="Enter lastname"
        />
      </div>
      <div className="flex flex-col" style={{ display: staff ? "none" : "" }}>
        <label htmlFor="dob">Date of birth</label>
        <input
          value={formData.dob || ""}
          onChange={handleChanges}
          type="date"
          name="dob"
          className="border-2 border-red-800 rounded-md p-2 "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          value={formData.gender || ""}
          onChange={handleChanges}
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
        Next
      </button>
    </form>
  );
};

export default PersonalInfo;
