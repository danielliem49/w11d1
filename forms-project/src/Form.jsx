import {useState} from 'react';

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [staff, setStaff] = useState("");
    const [bio, setBio] = useState("");
    const [emailNotifs, setEmailNotifs] = useState("");
    const [formComplete, setFormComplete] = useState(false);

    {/* ///Name, 
        ///Email, 
        ///Phone number, 
        ///Phone type: Home, Work, or Mobile (dropdown menu)
        ///Staff: Instructor or Student (radio buttons), 
        Bio (text area)
        Sign up for email notifications (checkbox)
    */}

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("during submission");
        setFormComplete(true);
        setName("");
        setEmail("");
        setPhoneNumber("");
    }


    // https://imgur.com/Sb6to
    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></label>
                <br />
                <br />
                <label>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/></label>
                <br />
                <br />
                <label>Phone Number: <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/></label>
                <br />
                <br />
                <label>Phone Type: <select value={phoneType} onChange={(e) => setPhoneType(e.target.value)}>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </label>
                <br />
                <br />
                <label>Staff:
                    <br />
                    <label>Instructor<input type="radio" name="staff" value="instructor" onChange={(e) => setStaff(e.target.value)}/></label>
                    <label>Student<input type="radio" name="staff" value="student" onChange={(e) => setStaff(e.target.value)}/></label>
                </label>
                <br />
                <br />
                <label>Bio:
                    <br />
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </label>
                <br />
                <br />
                <label>Email Notifications
                    <input type="checkbox" value={emailNotifs} onChange={(e) => setEmailNotifs(e.target.checked)}/>
                </label>
                <br />
                <br />
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}
