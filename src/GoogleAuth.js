import GoogleLogin from 'react-google-login';

function GoogleAuth({onSuccess, onFailure}) {
    return (
        <>
            <GoogleLogin
                clientId="506087916181-jmat4l8tohdc5m537c8cktj673sds98b.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </>
    );
}

export default GoogleAuth;