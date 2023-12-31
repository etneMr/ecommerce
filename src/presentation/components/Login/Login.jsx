import React from "react";
import './Login.css'
import { apiAuth } from "../../services/axios/axoisRepo";
import { login } from "../../redux/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form"
import { Navigate } from "react-router-dom";

export default function Login() {
    const { user } = useSelector((state) => state.user);
    const dispath = useDispatch();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const submitForm = (data) => {
        const submission = {
            username: data.username,
            password: data.password
        }
        // transform email string to lowercase to avoid case sensitivity issues in login
        apiAuth.login(JSON.stringify(submission)).then((response) => {
            dispath(login({ token: response.data.token, user: response.data }));
        }).catch((err) =>
            console.log(err))
    }

    return (
        <>
            {
                (user !== undefined) && (
                    <Navigate to="/" replace={true} />
                )
            }
            <div id="login">
                <svg xmlns="http://www.w3.org/2000/svg" height="100vh" viewBox="0 0 865 720" fill="none" style={{ position: "fixed", right: "0" }}>
                    <path d="M257.5 139C121.9 151.8 29.6667 51 0.5 -1L864.5 2.5V720.5H768C469.2 682.5 519.5 531 582 460C618.5 410.167 684.5 290.1 656.5 208.5C621.5 106.5 427 123 257.5 139Z" fill="#264ECA" />
                </svg>
                <div className="background-circle">
                    <div className="background-circle-1"></div>
                    <div className="background-circle-2"></div>
                    <div className="background-circle-3"></div>
                </div>
                <form className="login-form" method="post" onSubmit={handleSubmit(submitForm)}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="124" height="102" viewBox="0 0 124 102" fill="none">
                            <path d="M2 2H15.6523C17.8311 2 19.7535 3.42651 20.3871 5.51343L41.7596 75.9005C42.3932 77.9874 44.3156 79.4139 46.4942 79.4139H94.6487C96.9129 79.4139 98.8889 77.8753 99.4455 75.6779L108.068 41.6561C108.624 39.4586 110.6 37.9201 112.865 37.9201H121.386" stroke="white" strokeWidth="3.75648" strokeLinecap="round" />
                            <path d="M72.5933 21.7428C71.8686 21.0174 70.6937 21.0174 69.969 21.7428L58.159 33.5667C57.4344 34.2923 57.4344 35.4686 58.159 36.1942C58.8837 36.9197 60.0588 36.9197 60.7835 36.1942L71.2811 25.6842L81.7788 36.1942C82.5035 36.9197 83.6785 36.9197 84.4032 36.1942C85.1279 35.4686 85.1279 34.2923 84.4032 33.5667L72.5933 21.7428ZM73.1369 57.7381V23.0566H69.4254V57.7381H73.1369Z" fill="white" />
                            <path d="M58.2909 99.8512C61.3656 99.8512 63.8581 97.3557 63.8581 94.2774C63.8581 91.1991 61.3656 88.7036 58.2909 88.7036C55.2162 88.7036 52.7236 91.1991 52.7236 94.2774C52.7236 97.3557 55.2162 99.8512 58.2909 99.8512Z" stroke="white" strokeWidth="3.00518" />
                            <path d="M85.5085 99.8512C88.5832 99.8512 91.0757 97.3557 91.0757 94.2774C91.0757 91.1991 88.5832 88.7036 85.5085 88.7036C82.4338 88.7036 79.9412 91.1991 79.9412 94.2774C79.9412 97.3557 82.4338 99.8512 85.5085 99.8512Z" stroke="white" strokeWidth="3.00518" />
                        </svg>
                    </div>
                    <input type="text" placeholder="USERNAME" {...register('username')} />
                    {/* <Sth register={register} /> */}
                    <input type="password" placeholder="PASSWORD" {...register('password')} />
                    <input type="submit" name="login" value="Login" />
                </form>
            </div>
        </>
    );
}

// function Sth({ register }) {
//     return (<input type="text" placeholder="USERNAME" {...register('username')} />);
// }