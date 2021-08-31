import GoogleLogin from 'react-google-login';
import useStyles from './styles';

function GoogleAuth({onSuccess, onFailure}) {
    const classes = useStyles();
    return (
        <div className={classes.Auth}>
            <GoogleLogin
                clientId="506087916181-jmat4l8tohdc5m537c8cktj673sds98b.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                isSignedIn={true}
            />
        </div>
    );
}

export default GoogleAuth;