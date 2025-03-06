

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://www.google.com/imgres?q=profile%20photo&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F005%2F544%2F718%2Fsmall_2x%2Fprofile-icon-design-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&docid=RBpRIqik_jZCqM&tbnid=eKLh9kovO5Hp6M&vet=12ahUKEwi2uJ6o1fSLAxVc3jgGHcrgD4sQM3oECGMQAA..i&w=400&h=400&hcb=2&ved=2ahUKEwi2uJ6o1fSLAxVc3jgGHcrgD4sQM3oECGMQAA"; // Placeholder image
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main Street, City, Country";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default Usercard;
