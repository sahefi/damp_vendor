import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Sabrina',
    lastName: 'Aryan',
    username: '@Sabrina',
    email: 'SabrinaAry208@gmail.com',
    phone: '+234 904 6470',
    birth: '',
    gender: '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('/img/vendor_1.jpg');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Profile Updated',
      text: 'Your profile has been successfully updated.',
      confirmButtonColor: '#C5203C', // Warna tombol sesuai permintaan
    });

    console.log('Saving data:', formData);
    if (profileImage) {
      console.log('Selected image:', profileImage.name);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center">
        <img
          src={imagePreview}
          alt="Profile"
          className="rounded-circle mb-2"
          width="100"
          height="100"
          style={{ objectFit: 'cover' }}
        />
        <div className="mb-3">
          <label className="btn custom-red-button" style={{color:'#ffff'}}>
            Upload Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </label>
        </div>
        <h4>Edit Profile</h4>
      </div>

      <form className="mt-4" onSubmit={handleSave}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">Birth</label>
            <input
              type="date"
              className="form-control"
              name="birth"
              value={formData.birth}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <select
              className="form-select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn custom-red-button px-4" style={{ color: '#ffff' }}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
